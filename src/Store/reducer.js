import { combineReducers } from 'redux';
import allPosts from './Reducers/allPosts';
import selectedPost from './Reducers/selectedPost';

export const initialState = {
	allPosts: {
		isLoading: false,
		loadedAt: null,
		posts: [
			{
				userId: 0,
				postId: 0,
				postTitle: '',
				postBody: '',
			}
		]
	},
	selectedPost: {
		isLoading: false,
		postId: 0,
		userId: 0,
		postTitle: '',
		postBody: '',
		postComments: [
			{
				commentId: 0,
				commentHead: '',
				commentBody: '',
				commentEmail: ''
			}
		]
	}
};

export default combineReducers({
  allPosts,
  selectedPost
});
