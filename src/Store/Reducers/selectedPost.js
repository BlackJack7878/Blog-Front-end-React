import { REQUEST_POST_SINGLE, RECEIVE_POST_SINGLE, REQUEST_POST_COMMENTS, RECEIVE_POST_COMMENTS } from '../Actions/actionTypes';
import { initialState } from '../reducer';

function post(state = {
	isLoading: false,
	postId: 0,
	userId: 0,
	postTitle: '',
	postBody: '',
	isPostCommentsLoading: false
}, action) {
	switch (action.type) {
		case REQUEST_POST_SINGLE: {
			return { ...state, isLoading:true };
		}
		case RECEIVE_POST_SINGLE: {
			return { 
				...state,
				isLoading: false,
				postId: action.payload.postId,
				userId: action.payload.userId,
				postTitle: action.payload.postTitle,
				postBody: action.payload.postBody
			};
		}
		default: {
			return state;
		}
	}
}

function comments(state = {
	isPostCommentsLoading: false,
	postComments: []
}, action) {
	switch (action.type) {
		case REQUEST_POST_COMMENTS: {
			return { ...state, isPostCommentsLoading: true };
		}
		case RECEIVE_POST_COMMENTS: {
			return {
				...state,
				isPostCommentsLoading: false,
				postComments: action.payload.postComments
			};
		}
		default: {
			return state;
		}
	}
}

export default function selectedPost(state = initialState.selectedPost, action) {
	switch (action.type) {
		case REQUEST_POST_SINGLE:
		case RECEIVE_POST_SINGLE:
			return post(state, action);
		case REQUEST_POST_COMMENTS:
		case RECEIVE_POST_COMMENTS:
			return comments(state, action);
		default: { return state; }
	}
}