import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import VueRouter from 'vue-router'

import 'mdui/dist/css/mdui.min.css'
import mdui from 'mdui/dist/js/mdui.min.js'

import './main/status.js'
import router from './main/router.js'
import App from './App.vue'

axios.defaults.baseURL = 'https://api.rainapi.cn/teclub/';

Vue.use(VueLazyLoad);
Vue.use(VueRouter);
Vue.use(axios);

Vue.config.productionTip = false

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
