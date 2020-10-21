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

    productionSourceMap: false
}
