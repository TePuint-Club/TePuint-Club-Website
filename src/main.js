import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import VueRouter from 'vue-router'

import router from './main/router.js'
import App from './App.vue'

document.querySelector('body').setAttribute('style', 'background: #f7f7f7')

axios.defaults.baseURL = 'https://api.rainapi.cn/teclub/';

Vue.use(VueLazyLoad);
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.devtools = false;

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
