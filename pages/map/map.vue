<template>
	<map style="width: 100%;height: 100%;" :longitude="longitude" :latitude="latitude" scale="10"></map>
</template>

<script>
	export default {
		data() {
			return {
				longitude: '',
				latitude: ''
			};
		},
		onLoad() {
			uni.getLocation({
				success: (res) => {
					let { longitude, latitude } = res
					this.longitude = longitude
					this.latitude = latitude
				},
				fail(err) {
					console.log(err);
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
</style>
