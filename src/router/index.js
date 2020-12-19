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
    path: '/registrationRecord',  //挂号记录
    name: 'registrationRecord',
    component: () => import(/* webpackChunkName: "about" */ '../views/registrationRecord.vue')
  },
   {
    path: '/booked',  //预约挂号
    name: 'booked',
    component: () => import(/* webpackChunkName: "about" */ '../views/booked.vue')
  },
    {
    path: '/myBookings',   //我的预约
    name: 'myBookings',
    component: () => import(/* webpackChunkName: "about" */ '../views/myBookings.vue')
  },
   {
    path: '/case',   //关联病例
    name: 'case',
    component: () => import(/* webpackChunkName: "about" */ '../views/case.vue')
  },
   {
    path: '/recommend',      //推荐人
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
