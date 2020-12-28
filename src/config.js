export default {
	baseUrl:'https://www.qugouzhigong.top/syx_fy_api_module/wx_server',
	imgBaseUrl:'https://www.qugouzhigong.top/syx_fy_api_module',
	title:'疾控家园',
	appid:'wxaae04226b4e573d0',
	getWxUrl:function(url){
		//let url ='https://www.qugouzhigong.top/syx_fy_api_module/weixin/callback/init'
		return	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
	}
}
