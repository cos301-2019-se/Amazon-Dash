import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './plugins/axios'
import './plugins/laue'
import App from './App.vue'
import router from './router'
import store from './store'


import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vuetify'
import './plugins/vue-google-oauth2'

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
