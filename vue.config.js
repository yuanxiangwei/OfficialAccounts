const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css'];
module.exports = {
	publicPath: "./",
	productionSourceMap: false,
	configureWebpack: {
		plugins: [
			new CompressionWebpackPlugin({
				//filename: '[path].gzip[query]', // 提示compression-webpack-plugin@2.0.0的话filename改为asset
				algorithm: 'gzip',
				test:/\.js$|\.html$|\.css/,
				threshold: 1024, //内容超过1KB进行压缩
				
			})
		]
	},
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