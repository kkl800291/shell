<template>
	<view class="house-container" @click="handleJumpDetail">
		<view class="house-left">
			<image class="house-img" :src="house.imgs" mode=""></image>
		</view>
		<view class="house-right">
			<text>{{house.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ym-house",
		props: {
			house: {
				type: Object,
				default: {
					area: "",
					id: 0,
					imgs: "",
					name: "",
					point: 0,
					price: 0,
					range: "",
					tabs: [],
					type: "",
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			handleJumpDetail() {
				// 储存至本地
				// 1.先从本地取出已储存的数据
				let arr = uni.getStorageSync('history_list')
				// 存入之前先判断是否已存在，已存在先删除
				for (var i = 0; i < arr.length; i++) {
					if(arr[i].id == this.house.id) {
						// 删除
						arr.splice(i, 1)
						break
					}
				}
				
				if (arr) {
					// 如果存在
					arr.unshift(this.house)
				} else {
					arr = []
					arr.unshift(this.house)
				}
				uni.setStorageSync("history_list", arr)

				uni.navigateTo({
					url: "/pages/houseDetail/houseDetail?house=" + JSON.stringify(this.house)
				})
			}
		}
	}
</script>

<style lang="scss">
	.house-container {
		display: flex;
		align-items: center;

		.house-img {
			width: 200rpx;
			height: 180rpx;
		}

		&+.house-container {
			margin-top: 30rpx;
		}
	}
</style>
