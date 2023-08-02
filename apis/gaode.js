import {req} from './request.js';
import {BASE_URL_TYPE} from '@/utils/const.js'

export const API_GET_CITY_BYGAODE = data => {
	return SEND_GOADI_API({
		url:'/v3/geocode/regeo',
		data,
	})
}

// 了解
const SEND_GOADI_API = data => {
	return req({
		...data,
		type:BASE_URL_TYPE.GAODE_TYPE
	})
}