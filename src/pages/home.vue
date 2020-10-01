<template>
	<div id="home" class="mdui-container">
		hello,world!
	</div>
</template>

<script>
	import axios from 'axios'
	import mdui from 'mdui/dist/js/mdui.min.js'
	import status from '../main/status.js'
	
	export default {
		name: 'home',
		data: function() {
			return {
				status: status,
			}
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			}
		}
	}
</script>

<style>
</style>
