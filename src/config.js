export default {
	baseUrl:'http://www.jkjyfw.cn:8080',
	imgBaseUrl:'http://www.jkjyfw.cn:8080/syx_fy_api_module',
	title:'疾控家园',
	appid:'wxaae04226b4e573d0',
	getWxUrl:function(url){
		return	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
	}
}
