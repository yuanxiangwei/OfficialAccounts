import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: ''
		}

	},
	{
		path: '/registrationRecord', //我的接种
		name: 'registrationRecord',
		meta: {
			title: '接种记录'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/registrationRecord.vue')
	},
	{
		path: '/booked', //预约挂号
		name: 'booked',
		meta: {
			title: '线上挂号'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/booked.vue')
	},
	{
		path: '/jf', //预约挂号
		name: 'jf',
		meta: {
			title: '我的积分'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/integral.vue')
	},
	{
		path: '/hospitalDetails', //医院详情
		name: 'hospitalDetails',
		meta: {
			title: '线上挂号'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/details.vue')
	},
	{
		path: '/register', //登记
		name: 'register',
		meta: {
			title: '线上挂号'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/register.vue')
	},
	{
		path: '/myBookings', //我的预约
		name: 'myBookings',
		meta: {
			title: '我的预约'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/myBookings.vue')
	},
	{
		path: '/case', //关联病例
		name: 'case',
		meta: {
			title: '关联病例'
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/case.vue')
	},
	{
		path: '/recommend', //推荐人
		name: 'recommend',
		meta: {
			title: '推荐人',
		},

		component: () =>
			import( /* webpackChunkName: "about" */ '../views/recommend.vue')
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router