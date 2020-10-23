module.exports = {
    chainWebpack: config => {
		// 压缩代码
		config.optimization.minimize(true);
		// 分割代码
		config.optimization.splitChunks({
			chunks: 'all'
		})
		// 用cdn方式引入
		config.externals({
			'vue': 'Vue',
			'vue-router': 'VueRouter',
			'axios': 'axios'
		})
	},

    css: {
      loaderOptions: {}
    },

	productionSourceMap: false,
	
	// 当处于开发状态或需要单独打包时，将下面这段话注释
    //publicPath: 'http://assets.papernote.cn/tepuint/'
}
