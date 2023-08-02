import {req} from './request.js'

export const API_ARTICLE_LIST = data => {
	return req({
		url: '/getarticlelist',
		data
	})
}

export const API_ARITICLE_INFO = data => req({
	url: '/getarticleinfo',
	data
})