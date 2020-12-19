import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registrationRecord',
    name: 'registrationRecord',
    component: () => import(/* webpackChunkName: "about" */ '../views/registrationRecord.vue')
  },
   {
    path: '/booked',  //预约挂号
    name: 'booked',
    component: () => import(/* webpackChunkName: "about" */ '../views/booked.vue')
  },
    {
    path: '/myBookings',   //
    name: 'myBookings',
    component: () => import(/* webpackChunkName: "about" */ '../views/myBookings.vue')
  },
   {
    path: '/case',   //
    name: 'case',
    component: () => import(/* webpackChunkName: "about" */ '../views/case.vue')
  },
   {
    path: '/recommend',
    name: 'recommend',
    component: () => import(/* webpackChunkName: "about" */ '../views/recommend.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
