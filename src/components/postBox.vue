<template>
	<div v-if="postinf.TID ==='daily'">
		<div class="card mdui-card mdui-center mdui-hoverable">
			<!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
			<div class="mdui-card-media">
				<img v-lazy="postinf.coverImage" class="card-img"/>
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
	<div v-else-if="postinf.TID ==='state'">
		<div class="state mdui-color-grey-100 mdui-card mdui-center mdui-hoverable">
			<div class="state-title mdui-text-color-grey-700 mdui-text-truncate mdui-color-grey-300 mdui-valign mdui-typo-headline">
				<i class="mdui-icon material-icons">announcement</i> {{postinf.title}}
			</div>
			<div class="mdui-card-content" v-html="postinf.discription">
			</div>
		</div>
	</div>
</template>

<script>
	import status from '../main/status.js'

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
	.state {
		min-height: 200px;
		border-radius: 16px;
		margin: 20px;
		max-width: 700px;
	}
	
	.state>.state-title {
		height: 50px;
		margin: 0px 18px 0px 18px;
		border-radius: 0px 0px 8px 8px;
	}

	.state-title>.mdui-icon {
		margin: 15px;
	}
	
	.state>.mdui-card-content{
		font-size: 20px;
		margin: 0px 20px 0px 20px;
	}

	.card {
		border-radius: 16px;
		margin: 20px;
		max-width: 700px;
	}

	.card>.mdui-card-content{
		font-size: 20px;
	}

	.card>.card-btn {
		margin: 8px 12px 8px 0px;
	}

	.card>.card-info {
		margin: 12px 15px;
	}

	.card>.card-title {
		margin: 18px 0px 0px 18px;
	}
</style>
