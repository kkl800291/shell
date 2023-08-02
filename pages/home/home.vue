<template>
	<view class="home-container">
		<view class="home-swiper-wrap">
			<view class="home-search-wrap">
				<navigator url="/pages/search/search">
					<view class="search-left">
						左
					</view>
				</navigator>
				<navigator url="/pages/selectCity/selectCity">
					<view class="search-right">
						{{city}}
					</view>
				</navigator>
			</view>
			<swiper @click="handleJumpMap" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image class="swiper-img"
						src="https://img0.baidu.com/it/u=2171411284,1924893541&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
						mode=""></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-img"
						src="https://img1.baidu.com/it/u=1765908055,4034886621&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
						mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="home-grid-wrap">
			<u-grid :border="false" col="5">
				<u-grid-item v-for="(item, index) in gridList" :key="index">
					<image class="grid-img" :src="item.imgUrl" mode=""></image>
					<text class="grid-text">{{item.text}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="find-house-wrap">
			<text>帮我找房</text>
		</view>
		<view class="hot-house-wrap">
			<view class="hot-house-title">
				<text>新房·本周热门好盘</text>
			</view>
			<u-grid :border="false">
				<u-grid-item v-for="item in hotList" :key="item.id">
					<image style="width: 100%;height: 150rpx;" :src="item.imgs" mode=""></image>
					<text>{{item.name}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="home-like-wrap">
			<view class="">
				<text>猜你喜欢</text>
			</view>

			<ym-house v-for="item in houseList" :key="item.id" :house="item"></ym-house>
			<!-- <view class="like-list" v-for="item in houseList" :key="item.id">
				<view class="like-list-left">
					<image class="like-img" :src="item.imgs" mode=""></image>
				</view>
				<view class="like-list-right">
					<text>{{item.name}}</text>
				</view>
			</view> -->
		</view>
		<view class="" v-show="isEnd">
			<text>做人要有底线</text>
		</view>
	</view>
</template>

<script>
	import {
		API_GET_CITY_BYGAODE
	} from '@/apis/gaode.js';
	import {
		API_TOP_LIST,
		API_GET_HOUSE
	} from '@/apis/house.js'
	import {
		GAODE_KEY
	} from '@/utils/const.js'
	export default {
		data() {
			return {
				city: '定位中...',
				isEnd: false,
				hotList: [
					// {
					// 	area: "金牛区"
					// 	id: 1
					// 	imgs: "http://129.211.169.131:6368/imgs/a.jpg"
					// 	name: "北京城建国誉府"
					// 	point: "160-204"
					// 	price: "31600,
					// }
				],
				houseList: [
					// {
					// 	area: "仁寿县"
					// 	id: 1
					// 	imgs: "http://129.211.169.131:6368/imgs/1.jpg"
					// 	name: "美的云溪郡"
					// 	point: 117
					// 	price: 9000
					// 	range: "仁寿大道"
					// 	tabs: "['近地铁','公园房']"
					// 	type: "4室2厅"
					// }
				],
				curPage: 1,
				gridList: [{
						imgUrl: '../../static/imgs/1.png',
						text: '二手房'
					},
					{
						imgUrl: '../../static/imgs/2.png',
						text: '新房'
					},
					{
						imgUrl: '../../static/imgs/3.png',
						text: '租房'
					},
					{
						imgUrl: '../../static/imgs/4.png',
						text: '装修'
					},
					{
						imgUrl: '../../static/imgs/5.png',
						text: '家具商城'
					},
					{
						imgUrl: '../../static/imgs/1.png',
						text: '卖房'
					}
				]
			}
		},
		onLoad() {
			uni.getLocation({
				success: async (res) => {
					let {
						longitude,
						latitude
					} = res
					const result = await API_GET_CITY_BYGAODE({
						location: `${longitude},${latitude}`,
						key: GAODE_KEY
					})
					this.city = result.data.regeocode.addressComponent.city
				},
				fail: (err) => {
					console.log(err);
				}
			})
			this.getTopList()
			this.getHouseList()
		},
		onReachBottom() {
			console.log('到底了');
			this.curPage++
			this.getHouseList()
		},
		methods: {
			handleJumpMap() {
				uni.navigateTo({
					url:"/pages/map/map"
				})
			},
			async getTopList() {
				const res = await API_TOP_LIST()
				this.hotList = res.data.data
			},
			async getHouseList() {
				if (this.isEnd) return

				const result = await API_GET_HOUSE({
					page: this.curPage,
					pagesize: 20
				})
				console.log(11, result.data.data);
				if (result.data.data.length <= 0) {
					this.isEnd = true
				}
				// 追加
				// this.houseList = result.data.data
				this.houseList.push(...result.data.data)
				// console.log(111, this.houseList);
			}
		
		}
	}
</script>

<style lang="scss">
	.home-container {
		.home-swiper-wrap {
			position: relative;

			.swiper-img {
				width: 100%;
				height: 100%;
			}

			.home-search-wrap {
				position: absolute;
				z-index: 1;
				background-color: yellow;
				width: 600rpx;
				left: 75rpx;
				top: 40rpx;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 30rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
			}
		}

		.home-grid-wrap {
			padding: 50rpx 0;

			.grid-img {
				width: 80rpx;
				height: 80rpx;
			}
		}

		.home-like-wrap {
			.like-list {
				display: flex;
				align-items: center;

				.like-img {
					width: 220rpx;
					height: 200rpx;
				}
			}
		}
	}
</style>
