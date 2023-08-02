<template>
	<view>
		<view class="detail-title">
			<text>{{info.title}}</text>
		</view>
		<view class="detail-info">
			<view class="detail-author">
				<text>{{info.author}}</text>
			</view>
			<view class="detail-time">
				{{info.time}}
			</view>
		</view>
		<view class="detail-text" v-html="info.text">
		</view>
	</view>
</template>

<script>
	import {
		API_ARITICLE_INFO
	} from '@/apis/hot.js'
	export default {
		data() {
			return {
				info: {
					author: "",
					id: 0,
					imgs: "",
					point: "",
					text: "",
					time: "",
					title: "",
				}
			};
		},
		onLoad({id}) {
			this.getArticleInfo(id)
		},
		methods: {
			async getArticleInfo(id) {
				const res = await API_ARITICLE_INFO({
					id
				})
				console.log(res);
				this.info = res.data.data[0]
				uni.setNavigationBarTitle({
					title: this.info.title
				})
			}
		}
	}
</script>

<style lang="scss">
.big-image {
	width: 100%;
}
</style>