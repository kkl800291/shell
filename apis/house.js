import {
	req
} from './request.js'

export const API_TOP_LIST = () => {
	return req({
		url: '/toplist'
	})
}

export const API_GET_HOUSE = data => {
	return req({
		url: '/gethouse',
		data
	})
}

// 搜索房源
export const API_SEARCH = data => req({
	url: '/search',
	data
})