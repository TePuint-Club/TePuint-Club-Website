import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//重复路由检查
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//路由懒加载
const home = () => import('../views/home.vue');
const post = () => import('../views/post.vue');
const more = () => import('../views/more.vue');

const routes = [{
		path: "",
		name: 'home',
		component: home
	},
	{
		path: "/post/:CID",
		name: 'post',
		component: post
	},
	{
		path: "/more",
		name: 'more',
		component: more
	}
]

const router = new VueRouter({
	routes,
});

export default router
