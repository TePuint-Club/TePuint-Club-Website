import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueRouter from 'vue-router'

import router from './main/router.js'
import App from './App.vue'
import config from '../src/main/config.js'

// 以下一条设置网站背景色
document.querySelector('body').setAttribute('style', 'background: #f7f7f7')

// 以下一条设置网站跟踪
window.localStorage.wmUserInfo = JSON.stringify({ userId: mdui.$.guid(config.build), projectVersion: config.version })

// 以下配置VUE
Vue.use(VueLazyLoad);
Vue.use(VueRouter);

Vue.config.productionTip = false; // 设置生产模式是否打开vue提示
Vue.config.devtools = false; // 设置是否允许网页被调试

new Vue({
	render: h => h(App),
	router,
	updated: function() {
		mdui.mutation()
	},
	mounted: function() {
		mdui.mutation()
	}
}).$mount('#app')
