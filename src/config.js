export default {
	baseUrl:'https://www.qugouzhigong.top/syx_fy_api_module/wx_server',
	imgBaseUrl:'https://www.qugouzhigong.top/syx_fy_api_module',
	title:'疾控家园',
	appid:'wx75ef57468a1bae64',
	getWxUrl:function(url){
		return	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
	}
}
