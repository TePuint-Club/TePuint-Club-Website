<template>
	<li class="mdui-list-item mdui-ripple">
		<div class="mdui-list-item-avatar"><img :src="member.avatar"></div>
		<div class="mdui-list-item-content" :title="member.bio">{{member.name}}</div>
	</li>
</template>

<script>
	export default {
		name: 'member',
		props: ['member']
	}
</script>

<style>
</style>
