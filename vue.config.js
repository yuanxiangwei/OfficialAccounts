module.exports = {
	publicPath: "./",

	productionSourceMap: false,
	devServer: {
		disableHostCheck: true,
		proxy: 'https://www.qugouzhigong.top'
		//   proxy:{  '/api': {
		//      target: 'https://www.qugouzhigong.top', // 目标服务器地址
		//      //路径重写
		//      pathRewrite: {'^/api' : '/'},
		//      changeOrigin: true
		//    }
		//  }
	}
}