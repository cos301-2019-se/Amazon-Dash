import router from '@/router'
import { ActionTree } from 'vuex'
import config from '@/config'
import { RootState, SnackbarOptions } from './types'
import { Instance } from '@/models/instance'
import { MetricData } from '@/models/metric'

const actions: ActionTree<RootState, RootState> = {
    async get({}, { url }: { url: string }) {
        return window.axios.get(url).catch(res => {
            if (res.response) {
                throw res.response.data
            } else {
                throw res.toString()
            }
        }).then(res => res.data)
    },
    async post({}, { url, body }: { url: string, body: any }) {
        return window.axios.post(url, body)
        .catch(res => {
            throw res.response.data
        })
        .then(res => res.data)
    },
    async checkAuth({ dispatch, state }) {
        return dispatch('get', { url: 'authenticated' }).then((res: { result: boolean, message: string }) => {
            state.authenticated = res.result
            return res.result
        }).catch(err => {
            dispatch('makeErrorMessage', { message: err })
        })
    },
    login({ dispatch }, details): void {
        dispatch('post', { url: 'login', body: details }).then(() => {
            router.push('/')
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    logout({ dispatch }): void {
        dispatch('get', { url: 'logout' }).then(() => {
            router.push({ name: 'login' })
        }).catch(err => {
            dispatch('makeErrorMessage', { message: err })
        })
    },
    register({ dispatch }, details): void {
        dispatch('post', { url: 'register', body: details }).then(() => {
            router.push('/')
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    googleRegister({ dispatch }, details): void {
        dispatch('post', { url: 'register/google', body: details }).then(() => {
            router.push('/')
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    googleLogin({ dispatch }, details): void {
        dispatch('post', { url: 'login/google', body: details }).then(() => {
            router.push('/')
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    fetchInstances({ dispatch, commit }) {
        dispatch('checkAuth').then(authenticated => {
            if (authenticated) {
                dispatch('get', { url: 'instances' }).then(res => {
                    commit('setInstances', res)
                }).catch(err => {
                    dispatch('makeErrorMessage', { message: `Error fetching instances: ${err}` })
                })
            }
        })
    },
    getInstanceMetrics({ dispatch, commit }, instanceId: string) {
        dispatch('checkAuth')
        dispatch('get', { url: `instances/${instanceId}/metrics` }).then(res => {
            commit('setInstanceMetrics', res)
        })
    },
    stopInstance({ dispatch, getters }, instanceId: string) {
        dispatch('checkAuth')
        const instance = getters.instances.find((i: Instance) => i.id === instanceId)
        dispatch('get', { url: `instances/${instanceId}/stop` }).then(res => {
            dispatch('openSnackbar', { message: `Successfully stopped ${instance.name}`, colour: 'green' })
        }).catch(err => {
          dispatch('makeErrorMessage', { message: err })
        })
    },
    restartInstance({ dispatch, getters }, instanceId: string) {
        dispatch('checkAuth')
        const instance = getters.instances.find((i: Instance) => i.id === instanceId)
        dispatch('get', { url: `instances/${instanceId}/restart` }).then(res => {
            dispatch('openSnackbar', { message: `Successfully restarted ${instance.name}`, colour: 'green' })
        }).catch(err => {
          dispatch('makeErrorMessage', { message: err })
        })
    },
    startInstance({ dispatch, getters }, instanceId: string) {
        dispatch('checkAuth')
        const instance = getters.instances.find((i: Instance) => i.id === instanceId)
        dispatch('get', { url: `instances/${instanceId}/start` }).then(res => {
            dispatch('openSnackbar', { message: `Successfully started ${instance.name}`, colour: 'green' })
        }).catch(err => {
          dispatch('makeErrorMessage', { message: err })
        })
    },
    openSnackbar({ commit }, payload: SnackbarOptions) {
        commit('openSnackbar', payload)
    },
    makeErrorMessage({ dispatch }, { message, timeout }: { message: string, timeout?: number }) {
        dispatch('openSnackbar', { message, colour: 'red', timeout })
    },
    fetchMetrics({ dispatch, commit }, instanceId: string) {
        dispatch('checkAuth')
        dispatch('get', { url: `instances/${instanceId}/metrics` }).then(res => {
            commit('setMetrics', res)
        })
    },
    createInstance({ dispatch, getters }, details) {
        dispatch('post', { url: 'create_instance', body: details })
            .catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    subscribe({ commit, state, dispatch }) {
        if (state.evtSource) {
            state.evtSource.close()
        }
        state.evtSource = new EventSource(`${config.apiUrl}/instances/subscribe`, {
            withCredentials: true,
        })
        state.evtSource.addEventListener('instances', ((event: MessageEvent) => {
            const instances = JSON.parse(event.data)
            commit('setInstances', instances)
        }) as EventListener)
        state.evtSource.addEventListener('metrics', ((event: MessageEvent) => {
            const metrics: MetricData = JSON.parse(event.data)
            commit('setInstanceMetrics', metrics)
        }) as EventListener)
        state.evtSource.onerror = () => setTimeout(() => dispatch('subscribe'), 2000)
    },
    unsubscribe({ state }) {
        if (state.evtSource) {
            state.evtSource.close()
        }
    },
}
export default actions
