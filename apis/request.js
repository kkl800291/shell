import {
	BASE_URL,
	BASE_URL_GAODE
} from './http.js'

import {
	BASE_URL_TYPE
} from '@/utils/const.js'

export const req = (options) => {

	const baseUrl = options.type === BASE_URL_TYPE.GAODE_TYPE ? BASE_URL_GAODE : BASE_URL

	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			url: baseUrl + options.url,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

// export const req = (url, method = "GET", data = {}) => {
// 	return new Pormise((resolve, reject) => {
// 		uni.request({
// 			url,
// 			method,
// 			data,
// 			success(res){
// 				resolve(res)
// 			},
// 			fail(err) {
// 				reject(err)
// 			}
// 		})
// 	})
// }
