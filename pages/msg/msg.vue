<template>
	<view class="msg-container">
		<ym-quickly :chatList="chatList"></ym-quickly>
		<view class="mine-msg-wrap">
			<view class="mine-msg">
				<view class="mine-msg-time">
					<text>14:39:06</text>
				</view>
				<view class="mine-msg-text">
					<text>点我优惠</text>
				</view>
			</view>
			<view class="mine-avatar">
				<u-avatar src="https://img0.baidu.com/it/u=1250551608,2180019998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" shape="circle"></u-avatar>
			</view>
		</view>
		<view class="other-msg-wrap">
			<view class="other-avatar">
				<u-avatar src="https://img0.baidu.com/it/u=1250551608,2180019998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" shape="circle"></u-avatar>
			</view>
			<view class="other-msg">
				<view class="other-msg-text">
					<text>点我优惠</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { API_INIT_QUESTION } from '@/apis/chat.js'
	export default {
		data() {
			return {
				chatList: []
			}
		},
		onLoad() {
			this.getInfoQuestion()
		},
		methods: {
			async getInfoQuestion() {
				const res = await API_INIT_QUESTION()
				console.log(res);
				this.chatList = res.data.data
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background-color: #ecedef;
	}

	.msg-container {
		height: 100%;
		padding: 20rpx 40rpx;
	}
	.mine-msg-wrap {
		display: flex;
		justify-content: flex-end;
		padding: 20rpx 0;
		.mine-msg-time {
			color: #C7C8CA;
			font-size: 25rpx;
			padding: 10rpx 0;
		}
		.mine-msg-text {
			background-color: #D95F2E;
			padding: 25rpx;
			color: #fff;
			border-radius: 30rpx;
		}
	}
	
	.other-msg-wrap {
		display: flex;
		.other-msg-text {
			background-color: #fff;
			padding: 25rpx;
			border-radius: 30rpx;
		}
	}
	
	
</style>
