import axios from 'axios'

import { 
	TERM_CHANGED,
	SEARCH
} from './types'

export const termChange = (term) => {
	console.log(term)
	return {
		type: TERM_CHANGED,
		payload: term
	}
}

const cb = (dispatch, images) => {
	dispatch({
		type: SEARCH,
		payload: images
	})
}

export const search = () => {
	return (dispatch, func) => {
		axios.get('https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1&tags=' + func().searchReducer.term)
		.then((response) => {
			cb(dispatch, response.data.items)
		})
		.catch(() => {
			console.log('error')
		})
	}
}