import Vue from 'vue'
import Router, { NavigationGuard } from 'vue-router'
import Services from './views/Services.vue'
import Login from './views/Login.vue'
import store from '@/store'
import Metrics from './views/Metrics.vue'
import Alarm from './views/Alarm.vue'
Vue.use(Router)

const requireAuth: NavigationGuard = (to, from, next) => {
    if (store.getters.authenticated) {
        next()
    } else {
        next('/login')
    }
}

const noAuth: NavigationGuard = (to, from, next) => {
    if (store.getters.authenticated) {
        next('/')
    } else {
        next()
    }
}

export default new Router({
 feature/create_alarm
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
=======
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
            beforeEnter: noAuth,
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
            beforeEnter: noAuth,
        },
        {
            path: '/instances/:instanceId',
            name: 'metrics',
            component: () => import(/* webpackChunkName: "metrics" */ './views/Metrics.vue'),
            props: true,
            beforeEnter: requireAuth,
        },
    ],
 develop
})
