<template>
	<div class="mdui-drawer" id="drawer">
		<ul class="mdui-list">
			<li class="mdui-list-item mdui-ripple" @click="navto('/')">
				<i class="mdui-list-item-icon mdui-icon material-icons">home</i>
				<div class="mdui-list-item-content">主页</div>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">info_outline</i>
				<div class="mdui-list-item-content">关于我们</div>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">assignment</i>
				<div class="mdui-list-item-content">我们的项目</div>
			</li>
			<li class="mdui-subheader">我们的成员</li>
			<member v-for="member in memberlist" :member="member" />
		</ul>
	</div>
</template>

<script>
	import mdui from 'mdui/dist/js/mdui.min.js'
	import status from '../../main/status.js'
	import member from './member.vue'
	import axios from 'axios'

	export default {
		name: 'drawer',
		components: {
			member,
		},
		data: function() {
			return {
				status: status,
				memberlist: [],
			}
		},
		mounted: function() {
			this.status.drawer = new mdui.Drawer('#drawer');
		},
		created: function() {
			status.isLoading = true;
			var vm = this;
			axios.get('members.php')
				.then(function(response) {
					vm.memberlist = response.data.contains;
					status.isLoading = false;
				})
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			navto(nav) {
				try {
					this.$router.push(nav)
				} catch (err) {
				
				}
			}
		}
	}
</script>

<style>
</style>
