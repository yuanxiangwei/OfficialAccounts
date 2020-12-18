import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button , Swipe , SwipeItem,Lazyload,List,Cell,Image as VanImage,Icon ,Dialog    } from 'vant';
import Cookie from 'js-cookie'
import './config.js'
import $http from './libs/request'
import Vconsole from 'vconsole';
import axios from 'axios'
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
  var r = window.location.hash.substr(1).match(reg)|| window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
  console.log(getQueryString("code"),'code')

//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect
const wxurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5122952d67353ac5&redirect_uri=https%3a%2f%2fyuanxiangwei.github.io%2fOfficialAccounts%2fdist%2findex.html&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'
const WHITELIST = ['/']
if(!getQueryString("code")||getQueryString("code")==''){
	alert('未授权')
	window.location.href = wxurl
}else{
	alert( getQueryString("code"))
	$http({
		url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx5122952d67353ac5&secret=ba13d281c8760f5c6b36b1f41059bc8a&code='+getQueryString("code")+'&grant_type=authorization_code',
        method: 'get'
       }).then(res=>{
		alert(res)
		Cookie.set('userInfo',res)
	}).catch(err=>{
		console.log(err,'err')
	})
}

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
next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
