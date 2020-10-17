import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//重复路由检查
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//路由懒加载
const home = () => import('../pages/home.vue');
const post = () => import('../pages/post.vue');

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
	routes,
	mode: 'history',
});

export default router
