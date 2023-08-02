<template>
	<view class="city-container">
		<view class="city-type-wrap" v-for="item in cityList" :key="item.letter">
			<view class="city-letter">
				<text>{{item.letter}}</text>
			</view>
			<view class="city-list-wrap">
				<text class="city-name" v-for="city in item.citys" :key="city.id">{{city.city_name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		API_CITYS
	} from "@/apis/city.js"
	export default {
		data() {
			return {
				cityList: [
					// {
					// 	letter: 'C',
					// 	citys: [{
					// 			city_name: "重庆",
					// 			city_pinyin: "Chongqing",
					// 			city_pre: "C",
					// 			city_short: "cq",
					// 			count: "230",
					// 			id: "41"
					// 		}
					// 	]
					// },
				]
			};
		},
		onLoad() {
			this.getCitys()
		},
		methods: {
			async getCitys() {
				const res = await API_CITYS()
				console.log(res);
				// 对后台返回的数据进行处理
				this.getCityData(res.data)
			},
			getCityData(data) {
				// 过滤首字母
				let letter = data.map(item => item.city_pre.toUpperCase())
				// 去重
				letter = [...new Set(letter)]
				// 排序
				letter.sort()
				letter.forEach(item =>{
					let obj = {
						letter:item,
						citys: []
					}
					data.forEach(v => {
						if (item === v.city_pre.toUpperCase()) {
							obj.citys.push(v)
						}
					})
					this.cityList.push(obj)
				})
				
				console.log(letter);
			}
		}
	}
</script>

<style lang="scss">
	.city-container {
		padding: 20rpx 30rpx;
		background-color: #eee;

		.city-type-wrap {
			.city-letter {
				padding: 20rpx 0;
			}

			.city-list-wrap {
				background-color: #fff;
				display: flex;
				flex-wrap: wrap;
				border-radius: 10rpx;

				.city-name {
					padding: 20rpx 40rpx;
				}
			}
		}
	}
</style>
