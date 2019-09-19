import { GetterTree } from 'vuex'
import { RootState } from './types'

const getters: GetterTree<RootState, any> = {
    instances: state => state.instances,
    metrics: state => state.metrics,
    snackbar: state => state.snackbar,
    authenticated: state => state.authenticated,
}
export default getters
