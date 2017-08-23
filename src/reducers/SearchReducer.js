import { 
	TERM_CHANGED,
	SEARCH,
	DISPLAY_IMAGES
} from '../actions/types'

const INITIAL_STATE = { 
	term: '',
	images: []
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TERM_CHANGED:
			return { ...state, term: action.payload }
		case SEARCH:
			return { ...state, images: action.payload, load_images: true}
		default:
			return state
	}
}
