export const getFormatTime = (v) => {
	// 时间戳
	// 当前系统的时间戳
	let nowTime = new Date().getTime()
	// 把后台返回的时间转化为时间戳
	let oldTime = new Date(v).getTime()
	// 时间戳的差
	let newTime = nowTime - oldTime
	console.log(newTime);
	// xx分钟前
	if (newTime < 60 * 60 * 1000) {
		return Math.floor(newTime / 1000 / 60) + "分钟前"
	}
	// xxx小时前
	else if (newTime < 60 * 60 * 24 * 1000) {
		return Math.floor(newTime / 1000 / 60 / 60) + '小时前'
	}
	// 几天前
	else {
		return Math.floor(newTime / 1000 / 60 / 60 / 24) + '天前'
	}
}
