import { RootState, SnackbarOptions } from './types'
import { MutationTree } from 'vuex'
import { InstanceData, Instance } from '@/models/instance'

const mutations: MutationTree<RootState> = {
    setToken(state, payload: string) {
        state.token = payload
    },
    clearToken(state) {
        state.token = null
    },
    setInstances(state, payload: InstanceData[]) {
        state.instances = payload.map(i => new Instance(i))
    },
    openSnackbar(state, { message, colour, timeout = 3000 }: SnackbarOptions) {
        state.snackbar.message = message
        state.snackbar.colour = colour
        state.snackbar.timeout = timeout
        state.snackbar.enabled = true

        setTimeout(() => state.snackbar.enabled = false, timeout)
    },
}
export default mutations
