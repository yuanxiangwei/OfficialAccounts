import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, DatetimePicker, Area, Popup, RadioGroup, Radio, Calendar, NumberKeyboard, Swipe, SwipeItem, Lazyload, List, CellGroup, Cell, Image as VanImage, Icon, Dialog, Form, Field, Checkbox, CheckboxGroup } from 'vant';
import Cookie from 'js-cookie'
import './rem.js'
import axios from 'axios'
import config from './config.js'
//import VConsole from 'vconsole'
//new VConsole
//按需加载所需组件
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Field)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(CellGroup)
Vue.use(DatetimePicker)
Vue.use(Calendar)
Vue.use(NumberKeyboard)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Area)
Vue.use(Popup)

//Vue.use(Area)
Vue.config.productionTip = false

function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.hash.substr(1).match(reg) || window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	}
	return null;
}

const WHITELIST = []
//localStorage.setItem('openID','oU5bg5hGMg1b646q1NWng8bhk8EE')
async function isPerfectUserInfo(to, next) {
	if((localStorage.getItem('userID') && localStorage.getItem('userPhone')) || to.path == '/perfectInformation') {
		next()
	} else {
		axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/ajax_search_massage_by_openid`).then(res => {
			let data = res.data
			if(data && data.id && data.phone && data.phone != '') {
				localStorage.setItem('userID', data.id)
				localStorage.setItem('userPhone', data.phone)
				localStorage.setItem('userName', data.name)
				localStorage.setItem('userAge', data.age)
				localStorage.setItem('userSex', data.sex)
				next()
			} else {
				next({
					path: 'perfectInformation',
					query: {
						redirect_url: to.path
					}
				})
			}
		}).catch(function(error) {
			alert(error)

		});

	}
}
router.beforeEach(async(to, from, next) => { //路由拦截  未授权和
	document.title = config.title + '-' + to.meta.title
	const openID = localStorage.getItem('openID')
	if(!WHITELIST.includes(to.path) && (!openID || openID == '')) {
		const CODE = getQueryString("code")
		if(!CODE || CODE == '') {
			window.location.href = config.getWxUrl(location.href)
		} else {
			axios.get(`${config.baseUrl}/${CODE}/get_open_id`)
				.then(function(response) {
					localStorage.setItem('openID', response.data)
					next()

				})
				.catch(function(error) {
					alert(error)
					console.log(error);
				});
		}
	} else {
		next()
	}

})
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')