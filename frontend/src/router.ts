import Vue from 'vue'
import Router, { NavigationGuard } from 'vue-router'
import Services from './views/Services.vue'
import Login from './views/Login.vue'
import store from '@/store'
import Metrics from './views/Metrics.vue'
import Alarm from './views/Alarm.vue'
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
    {
      path:'/alarm',
      name:'alarm',
      component: Alarm,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
    },
      {
          path: '/instances/:instanceId',
          name: 'metrics',
          component: Metrics,
          props: true,
          beforeEnter: requireAuth,
      },
  ],
})
