<template>
	<div v-if="item.type === 'title'">
		<h1>{{item.data}}</h1>
	</div>
	<div v-else-if="item.type === 'prag'">
		<p>{{item.data}}</p>
	</div>
	<div v-else-if="item.type === 'image'">
		<img class="mdui-img-fluid" :src="item.data"/>
	</div>
	<div v-else-if="item.type === 'divider'">
		<div class="mdui-divider"></div>
	</div>
</template>

<script>
	export default {
		name: 'postitem',
		props: ['item'],
	}
</script>

<style>
</style>
