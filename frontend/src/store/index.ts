import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { RootState } from './types'

Vue.use(Vuex)

const backend = new Vuex.Store<RootState>({
    state: {
        authenticated: false,
        instances: [],
        metrics: [],
        bus: new Vue({}),
        snackbar: {
            enabled: false,
            message: '',
            colour: 'red',
            timeout: 3000,
        },
        evtSource: undefined,
    },
    mutations,
    getters,
    actions,
})
export default backend
