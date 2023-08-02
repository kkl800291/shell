<template>
	<view>
		<image :src="house.imgs" mode=""></image>
		<view class="">
			<text>{{ house.name}}</text>
		</view>
		<u-button type="primary" @click="handleCallPhone">免费致电</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				house: {
					area: "",
					id: 0,
					imgs: "",
					name: "",
					point: 0,
					price: 0,
					range: "",
					tabs: [],
					type: ""
				}
			}
		},
		onLoad({
			house
		}) {
			console.log(house);
			this.house = JSON.parse(house)
		},
		methods: {
			handleCallPhone() {
				uni.makePhoneCall({
					phoneNumber: '10086'
				})
			}
		}
	}
</script>

<style>

</style>
