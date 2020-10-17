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
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false
	}
}
