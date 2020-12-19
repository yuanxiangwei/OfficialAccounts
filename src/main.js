import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Swipe, SwipeItem, Lazyload, List, Cell, Image as VanImage, Icon, Dialog } from 'vant';
import Cookie from 'js-cookie'
import './rem.js'

import Vconsole from 'vconsole';
import axios from 'axios'
import config from './config.js'
new Vconsole();
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Dialog)
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

router.beforeEach(async(to, from, next) => {
	//	console.log(to,from)
	if(!WHITELIST.includes(to.path) && (!localStorage.getItem('openID') || localStorage.getItem('openID') == '')) {
		const CODE = getQueryString("code")
		if(!CODE || CODE == '') {
			alert('未授权')
			window.location.href = config.getWxUrl(location.href)
		} else {
			alert(CODE)
			// 为给定 ID 的 user 创建请求
			axios.get(`https://www.qugouzhigong.top/syx_fy_api_module/wx_server/${CODE}/get_open_id`)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
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