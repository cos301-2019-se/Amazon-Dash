import { GetterTree } from 'vuex'
import { RootState } from './types'

const getters: GetterTree<RootState, any> = {
    token: state => state.token,
    instances: state => state.instances,
    snackbar: state => state.snackbar,
}
export default getters
