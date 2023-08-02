import {req} from './request.js'

// 获取默认聊天问题
export const API_INIT_QUESTION = () => req({
	url:'/initquestion'
})