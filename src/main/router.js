import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import home from '../pages/home.vue';

const routes = [
	{
		path: "",
		name: '/',
		component: home
	}
]

const router = new VueRouter({
	routes
});

export default router
