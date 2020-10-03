<template>
	<div id="home" class="mdui-container">
		<post-box v-for="(postinf,p,index) in postlist" :postinf="postinf" :key="index"></post-box>
		<div v-show="page <= maxpage && !status.isLoading">
			<button class="load mdui-btn mdui-color-grey-400 mdui-text-color-white mdui-ripple mdui-center" v-show="page <= maxpage"
			 @click="loadpage()">
				加载更多
			</button>
		</div>
		<div v-show="page > maxpage && !status.isLoading">
			<span class="mdui-card-primary-subtitle mdui-text-center">已加载完所有数据</span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import mdui from 'mdui/dist/js/mdui.min.js'
	import status from '../main/status.js'
	import postBox from '../components/postBox.vue'

	export default {
		name: 'home',
		data: function() {
			return {
				status: status,
				postlist: [],
				page: 1,
				maxpage: 1,
			}
		},
		components: {
			postBox
		},
		created: function() {
			this.loadpage()
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			loadpage() {
				if (this.page > this.maxpage) return
				status.isLoading = true;
				var vm = this;
				axios.get('article-list.php', {
						params: {
							page: this.page
						}
					})
					.then(function(response) {
						vm.postlist = vm.postlist.concat(response.data.content);
						vm.maxpage = response.data.maxpage;
						vm.page += 1;
						status.isLoading = false;
					})
			}
		}
	}
</script>

<style>
	.load {
		width: 200px;
		border-radius: 16px;
	}
</style>
