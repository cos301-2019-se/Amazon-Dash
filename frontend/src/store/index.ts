import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { RootState } from './types'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence<RootState>({
    storage: window.localStorage,
    reducer: state => ({
        token: state.token,
    }),
})

const backend = new Vuex.Store<RootState>({
    state: {
        token: null,
        instances: [],
        metrics: [],
        bus: new Vue({}),
        snackbar: {
            enabled: false,
            message: '',
            colour: 'red',
            timeout: 3000,
        },
    },
    mutations,
    getters,
    actions,
    plugins: [vuexLocal.plugin],
})
export default backend
