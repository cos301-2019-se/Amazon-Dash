import { GetterTree } from 'vuex'
import { RootState } from './types'

const getters: GetterTree<RootState, any> = {
    token: state => state.token,
    instances: state => state.instances,
    metrics: state => state.metrics,
    snackbar: state => state.snackbar,
    authenticated: state => !!state.token,
}
export default getters
