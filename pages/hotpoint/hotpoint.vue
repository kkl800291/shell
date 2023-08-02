<template>
	<view class="hot-container">
		<view class="hot-wrap" @click="handleJumpDetail(item.id)" v-for="item in list" :key="item.id">
			<view class="hot-left">
				<view class="hot-left-title">
					<text>{{item.title}}</text>
				</view>
				<view class="hot-left-bottom">
					<text>{{item.author}}</text>
					<view class="">
						<text style="color: deeppink;">{{ item.time | filterFormatTime }}</text>
					</view>
				</view>
			</view>
			<view class="hot-right" v-if="item.imgs">
				<image class="hot-right-img" :src="item.imgs" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {API_ARTICLE_LIST} from '@/apis/hot.js'
	import {getFormatTime} from '@/utils/index.js'
	export default {
		data() {
			return {
				list: [
					// {
					// 	author: "合肥飞墨设计"
					// 	id: 1
					// 	imgs: "http://129.211.169.131:6368/article/article_1.jpg"
					// 	point: "1188"
					// 	time: "2022-09-21T08:17:58.000Z"
					// 	title: "我妈说：“最满意你家厨房！”"
					// }
				]
			}
		},
		onLoad() {
			this.getArticleList()
		},
		methods: {
			async getArticleList() {
				const res = await API_ARTICLE_LIST({
					page: 1,
					pagesize: 15
				})
				console.log(res);
				this.list = res.data.data
			},
			handleJumpDetail(id) {
				uni.navigateTo({
					url:"/pages/hotDetail/hotDetail?id=" + id
				})
			}
		},
		filters: {
			filterFormatTime(v) {
				return getFormatTime(v)
			}
		}
	}
</script>

<style lang="scss">
.hot-container {
	padding: 0 30rpx;
	.hot-wrap {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0;
		.hot-right {
			.hot-right-img {
				width: 200rpx;
				height: 190rpx;
			}
		}
	}
}
</style>
