import { GetterTree } from 'vuex'
import { BackendState } from './types'

const getters: GetterTree<BackendState, any> = {
    token: state => state.token,
    instances: state => state.instances,
}
export default getters
