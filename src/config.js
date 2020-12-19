export default {
	appid:'wx5122952d67353ac5',
	getWxUrl:function(url){
		return	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`
	}
}
