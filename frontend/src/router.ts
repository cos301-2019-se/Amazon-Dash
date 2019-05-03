import Vue from 'vue'
import Router, { NavigationGuard } from 'vue-router'
import Services from './views/Services.vue'
import Login from './views/Login.vue'
import store from '@/store'

Vue.use(Router)

const requireAuth: NavigationGuard = (to, from, next) => {
    if (store.getters.token) {
        next()
    } else {
        next('/login')
    }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Services,
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})
