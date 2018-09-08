import { REQUEST_POSTS, RECEIVE_POSTS } from '../Actions/actionTypes';
import { initialState } from '../reducer';

function posts(state = {
	loadedAt: null,
	isLoading: false,
	page: 1,
	maxPage: 1,
	posts: []
}, action) {
	switch (action.type) {
		case REQUEST_POSTS: {
			return { ...state, isLoading: true, page: action.payload };
		}
		case RECEIVE_POSTS: {
			return { 
				...state, 
				isLoading: false,
				maxPage: action.payload.posts.length / 5,
				posts: action.payload.posts.map((item, index) => {
					let firstPageOffset = 1;
					if (state.page === 1) {
						firstPageOffset = 2;
					}
					if (index + 1 > (state.page - firstPageOffset) * 5 && index + 1 <= (state.page * 5)) {
						return item;
					}
					else {
						return null;
					}
				}).filter(item => item != null),
				loadedAt: action.payload.loadedAt,
				page: action.payload
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
		default: return state;
	}
}