import { req } from './request.js'

// 获取所有热门城市
	
export const API_CITYS = () => req({
	url: '/citys'
})