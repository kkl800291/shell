<template>
	<view>
		<ym-house v-for="item in list" :key="item.id" :house="item"></ym-house>
	</view>
</template>

<script>
	// H5: localStorage: 5M   sessionStorage: 5M   cookie: 4k
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			// 由于onShow每次页面进入都会触发
			let list = uni.getStorageSync('history_list')
			this.list = list
			console.log(list);
		}
	}
</script>

<style>

</style>
