import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "HomePage" */ '@/views/index/HomePage.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import(/* webpackChunkName: "account" */ '@/views/account/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import(/* webpackChunkName: "account" */ '@/views/account/RegisterPage.vue')
    },
    {
      path: '/pay',
      name: 'PayPage',
      component: () => import(/* webpackChunkName: "pay" */ '@/views/pay/PayPage.vue')
    },
    {
      path: '/pay_add',
      name: 'PayAdd',
      component: () => import(/* webpackChunkName: "pay" */ '@/views/pay/PayAdd.vue')
    },
    {
      path: '/pay_record',
      name: 'PayRecord',
      component: () => import(/* webpackChunkName: "pay" */ '@/views/pay/PayRecord.vue')
    }
  ]
})
