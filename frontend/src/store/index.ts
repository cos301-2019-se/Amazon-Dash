import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const backend = new Vuex.Store({
    state: {
        token: null,
        instances: [],
    },
    mutations,
    getters,
    actions,
})
export default backend
