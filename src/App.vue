<template>
	<div id="app">
		<app-bar></app-bar>
		<drawer></drawer>
		<router-view></router-view>
	</div>
</template>

<script>
	import status from './main/status.js'
	import appBar from './components/header/app-bar.vue'
	import drawer from './components/header/drawer.vue'

	export default {
		name: 'app',
		components: {
			appBar,
			drawer,
		},
		data: function() {
			return {
				status: status,
			}
		}
	}
</script>

<style>
</style>
