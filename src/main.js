import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueRouter from 'vue-router'

import router from './main/router.js'
import App from './App.vue'

document.querySelector('body').setAttribute('style', 'background: #f7f7f7')

window.localStorage.wmUserInfo = JSON.stringify({ userId: mdui.$.guid('TePuint'), projectVersion: '1.0.2' })

Vue.use(VueLazyLoad);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

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
