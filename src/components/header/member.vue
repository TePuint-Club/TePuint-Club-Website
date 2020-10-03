<template>
	<li class="mdui-list-item mdui-ripple" @click="goPost(member.CID)">
		<div class="mdui-list-item-avatar"><img v-lazy="member.avatar"></div>
		<div class="mdui-list-item-content" :title="member.bio">{{member.name}}</div>
	</li>
</template>

<script>
	export default {
		name: 'member',
		props: ['member'],
		methods:{
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
</style>
