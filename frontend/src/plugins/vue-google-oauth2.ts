import GAuth from 'vue-google-oauth2'
import Vue from 'vue'

const gauthOptions = {
    clientId: '167278001228-mrqvkm3ngt1lsct9fufu86vg29du0l7h.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
}

Vue.use(GAuth, gauthOptions)
