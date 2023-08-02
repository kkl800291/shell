<template>
	<view class="quickly-wrap">
		<view class="quickly-title-wrap">
			<text>快速问答</text>
		</view>
		<view class="quickly-ans-wrap">
			<view class="ans-line" v-for="item in chatList" :key="item.id">
				<text>{{item.question}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ym-quickly",
		props: {
			chatList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.quickly-wrap {
		background-color: #F6F6F6;
		border-radius: 10rpx;
		padding: 20rpx;

		.quickly-title-wrap {
			padding: 10rpx 0 20rpx 0;
			color: #8C8C8C;
			font-size: 30rpx;
		}

		.quickly-ans-wrap {
			.ans-line {
				background-color: #fff;
				padding: 20rpx 30rpx;
				border-radius: 5rpx;

				&+.ans-line {
					margin-top: 25rpx;
				}
			}
		}
	}
</style>
