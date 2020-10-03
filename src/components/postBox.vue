<template>
	<div v-if="postinf.TID ==='daily'">
		<div class="card mdui-card mdui-center">
			<!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
			<div class="mdui-card-media">
				<img :src="postinf.image" />
			</div>

			<!-- 卡片的标题和副标题 -->
			<div class="card-title mdui-typo-display-1 mdui-text-color-theme" @click="goPost(postinf.CID)">{{postinf.title}}</div>

			<!-- 卡片的内容 -->
			<div class="mdui-card-content">
				{{postinf.discription}}
			</div>
			<div class="mdui-divider"></div>
			<div class="card-info mdui-card-primary-subtitle mdui-float-left">{{postinf.auther}} {{postinf.TID}}</div>
			<button class="mdui-float-right card-btn mdui-text-color-theme-accent mdui-btn mdui-ripple mdui-text-center" @click="goPost(postinf.CID)">
				去浏览
			</button>
		</div>
	</div>
</template>

<script>
	import status from '../main/status.js'
	import mdui from 'mdui/dist/js/mdui.min.js'

	export default {
		name: 'post-box',
		props: ['postinf'],
		data: function() {
			return {
				status: status,
			}
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			goPost(i) {
				this.$router.push({
					name: 'post',
					params: {
						CID: i
					}
				})
			}
		}
	}
</script>

<style>
	.card {
		border-radius: 16px;
		margin: 20px;
		max-width: 700px;
	}

	.card-btn {
		margin: 8px 12px 8px 0px;
	}

	.card-info {
		margin: 12px 15px;
	}

	.card-title {
		margin: 18px 0px 0px 18px;
	}
</style>
