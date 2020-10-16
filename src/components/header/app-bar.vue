<template>
	<div class="mdui-appbar mdui-appbar-fixed">
		<div class="mdui-toolbar mdui-color-theme">
			<span @click="status.drawer.toggle()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white">
				<i class="mdui-icon material-icons">menu</i>
			</span>
			<a href="https://tepuint.top/" class="mdui-typo-headline app-headline">{{status.title}}</a>
			<span class="mdui-typo-title">{{status.post}}</span>
			<div class="mdui-toolbar-spacer"></div>
		</div>
		<div class="mdui-progress" v-if="status.isLoading">
			<div class="mdui-progress-indeterminate"></div>
		</div>
	</div>
</template>

<script>
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
	@media screen and (max-width:600px) {
		.app-headline {
			display: none;
		}
	}
	
	@media screen and (min-width:600px) {
		.app-headline {
		}
	}
</style>
