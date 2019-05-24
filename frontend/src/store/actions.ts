import router from '@/router'
import config from '@/config'

const actions = {
    login({ commit }, details): void {
        fetch(config.apiUrl + '/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        }).then(response => response.json()).then(res => {
            commit('setToken', res.token)
            router.push({ name: 'home' })
        })
    },
    register({ commit, dispatch }, details): void {
        fetch(config.apiUrl + '/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        }).then(response => response.json()).then(res => {
            dispatch('login', details)
        })
    },
    fetchInstances({ commit, getters }) {
        fetch(config.apiUrl + '/instances', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getters.token,
            },
        }).then(response => response.json()).then(res => {
            commit('setInstances', res)
        })
    },
}
export default actions
