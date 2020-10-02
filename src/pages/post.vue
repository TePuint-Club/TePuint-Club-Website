<template>
	<div id="post" class="mdui-container">
		<h1>post id</h1>
		<p>{{CID}}</p>
		<h1>post data</h1>
		<p>{{JSON.stringify(postdata)}}</p>
		<div class="mdui-divider"></div>
		<div class="mdui-typo">
			<postitem v-for="item in postdata.content" :item="item"></postitem>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import mdui from 'mdui/dist/js/mdui.min.js'
	import status from '../main/status.js'
	import postitem from '../components/postitem.vue'

	export default {
		name: 'post',
		components: {
			postitem,
		},
		data: function() {
			return {
				status: status,
				postdata: {},
			}
		},
		computed: {
			CID() {
				return this.$route.params.CID
			}
		},
		watch: {
			CID: function(newQuestion, oldQuestion) {
				this.init();
			}
		},
		created: function() {
			this.init();
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			init() {
				status.isLoading = true;
				var vm = this;
				axios.get('article-content.php', {
						params: {
							CID: this.CID
						}
					})
					.then(function(response) {
						vm.postdata = response.data;
						status.isLoading = false;
					})
			}
		}
	}
</script>

<style>
</style>
