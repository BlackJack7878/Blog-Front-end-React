import { REQUEST_POSTS, RECEIVE_POSTS } from '../Actions/actionTypes';
import { initialState } from '../reducer';

function posts(state = {
	loadedAt: null,
	isLoading: false,
	posts: []
}, action) {
	switch (action.type) {
		case REQUEST_POSTS: {
			return { ...state, isLoading: true };
		}
		case RECEIVE_POSTS: {
			return { 
				...state, 
				isLoading: false, 
				posts: action.payload.posts, 
				loadedAt: action.payload.loadedAt 
			};
		}
		default: { return state; }
	}
}

export default function allPosts(state = initialState.allPosts, action) {
	switch (action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
			return posts(state, action);
		default: { return state };
	}
}