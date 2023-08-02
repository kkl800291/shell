<template>
	<view class="search-container">
		<view class="search-wrap">
			<u-search shape="square" v-model="searchV" :showAction="false" @search="handleChnage"></u-search>
		</view>
		<view class="search-list-wrap">
			<ym-house v-for="item in houseList" :key="item.id" :house="item"></ym-house>
		</view>
	</view>
</template>

<script>
	import {API_SEARCH} from '@/apis/house.js'
	export default {
		data() {
			return {
				searchV:"",
				houseList:[
					// {
					// 	area: "温江区",
					// 	id: 2,
					// 	imgs: "http://129.211.169.131:6368/imgs/2.jpg",
					// 	name: "恒大未来城",
					// 	point: 115,
					// 	price: 12000,
					// 	range: "光华新城",
					// 	tabs: "['地产500强','品质保证','低容积','生态']",
					// 	type: "3室1厅",
					// }
				]
			}
		},
		methods: {
			async handleChnage(value) {
				const res = await API_SEARCH({
					searchkey: value
				})
				this.houseList = res.data.data
			}
		},
	}
</script>

<style lang="scss">
.search-container {
	padding: 20rpx 40rpx;
}
</style>
