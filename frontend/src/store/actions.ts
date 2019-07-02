import router from '@/router'
import { ActionTree } from 'vuex'
import config from '@/config'
import { RootState, SnackbarOptions } from './types'

const actions: ActionTree<RootState, RootState> = {
    get({ getters }, { url }: { url: string }) {
        return window.axios.get(url, {
            headers: {
                Authorization: getters.token,
            },
        }).catch(res => {
            if (res.response) {
                throw res.response.data
            } else {
                throw res.toString()
            }
        }).then(res => res.data)
    },
    post({ getters }, { url, body }: { url: string, body: any }) {
        return window.axios.post(url, body, {
            headers: {
                Authorization: getters.token,
            },
        })
        .catch(res => {
            throw res.response.data
        })
        .then(res => res.data)
    },
    checkAuth({ dispatch, commit }) {
        return dispatch('get', { url: 'authenticated' }).then((res: { result: boolean, message: string }) => {
            if (!res.result) {
                dispatch('makeErrorMessage', { message: 'You have been logged out by the server. Please log in again' })
                commit('clearToken')
                router.push({ name: 'login' })
                return false
            }
            return true
        }).catch(err => {
            dispatch('makeErrorMessage', { message: err })
        })
    },
    login({ dispatch, commit }, details): void {
        dispatch('post', { url: 'login', body: details }).then(res => {
            commit('setToken', res.token)
            router.push({ name: 'home' })
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    register({ commit, dispatch }, details): void {
        dispatch('post', { url: 'register', body: details }).then(res => {
            dispatch('login', details)
        }).catch(err => dispatch('makeErrorMessage', { message: err }))
    },
    fetchInstances({ dispatch, commit, getters }) {
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
    fetchMetrics({dispatch, commit, getters}) {
        dispatch('checkAuth').then(authenticated => {
            if (authenticated) {
                const res: object[] = [{data: 'test', name: 'test'}]
                commit('setMetrics', res)
            }
        })
    },
    openSnackbar({ commit }, payload: SnackbarOptions) {
        commit('openSnackbar', payload)
    },
    makeErrorMessage({ dispatch }, { message, timeout }: { message: string, timeout?: number }) {
        dispatch('openSnackbar', { message, colour: 'red', timeout })
    },
}
export default actions