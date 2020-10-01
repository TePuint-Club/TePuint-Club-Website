<template>
	<div class="mdui-appbar mdui-appbar-fixed">
		<div class="mdui-toolbar mdui-color-theme">
			<a href="https://tepuint.club/" class="mdui-typo-headline">{{status.title}}</a>
			<div class="mdui-toolbar-spacer"></div>
		</div>
		<div class="mdui-progress" v-if="status.isLoading">
			<div class="mdui-progress-indeterminate"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-bar',
		props:['status'],
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			}
		}
	}
</script>

<style>
</style>
