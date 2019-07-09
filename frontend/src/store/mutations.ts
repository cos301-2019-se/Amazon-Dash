import { BackendState } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<BackendState> = {
    setToken(state, payload: string) {
        state.token = payload
    },
    clearToken(state) {
        state.token = null
    },
    setInstances(state, payload) {
        state.instances = payload
    },

}
export default mutations
