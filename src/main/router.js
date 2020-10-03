import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//重复路由检查
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

import home from '../pages/home.vue';
import post from '../pages/post.vue';

const routes = [{
		path: "",
		name: '/',
		component: home
	},
	{
		path: "/post/:CID",
		name: 'post',
		component: post
	}
]

const router = new VueRouter({
	routes
});

export default router
