import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button , Swipe , SwipeItem,Lazyload,List,Cell,Image as VanImage,Icon ,Dialog    } from 'vant';
import Cookie from 'js-cookie'
import './config.js'
import $http from './libs/request'
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
//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect
const wxurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5122952d67353ac5&redirect_uri=https%3a%2f%2fyuanxiangwei.github.io%2fOfficialAccounts%2fdist%2findex.html&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'
const WHITELIST = ['/']
window.location.href = wxurl
router.beforeEach(async (to, from, next)=>{
//	console.log(to,from)
//	if(WHITELIST.includes(to.path)){
//		next()	
//	}else if(!Cookie.get('access_token')||Cookie.get('access_token')==''){
//		if(to.query.code){
//			
//		}else{
//			
//		}
//	}
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
