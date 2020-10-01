<template>
	<div class="mdui-appbar mdui-appbar-fixed">
		<div class="mdui-toolbar mdui-color-theme">
			<span @click="status.drawer.toggle()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white">
				<i class="mdui-icon material-icons">menu</i>
			</span>
			<a href="https://tepuint.club/" class="mdui-typo-headline">{{status.title}}</a>
			<div class="mdui-toolbar-spacer"></div>
		</div>
		<div class="mdui-progress" v-if="status.isLoading">
			<div class="mdui-progress-indeterminate"></div>
		</div>
	</div>
</template>

<script>
	import mdui from 'mdui/dist/js/mdui.min.js'
	import status from '../../main/status.js'

	export default {
		name: 'app-bar',
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
