import { combineReducers } from 'redux';
import allPosts from './Reducers/allPosts';
import selectedPost from './Reducers/selectedPost';
import selectedUser from './Reducers/selectedUser';

export const initialState = {
	allPosts: {
		isLoading: false,
		loadedAt: null,
		page: 1,
		maxPage: 1,
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
		isPostCommentsLoading: false,
		postComments: [
			{
				commentId: 0,
				commentHead: '',
				commentBody: '',
				commentEmail: ''
			}
		]
	},
	selectedUser: {
		isLoading: false,
		userId: 0,
		userName: '',
		userNickname: '',
		userEmail: '',
		userPhone: '',
		userWebsite: '',
		userAddress: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: '',
				lng: ''
			}
		},
		userCompany: {
			name: '',
			catchPhrase: '',
			bs: ''
		},
		isUserTodosLoading: false,
		userTodos: [
			{
				todoId: 0,
				todoTitle: '',
				todoStatus: false
			}
		]
	}
};

export default combineReducers({
  allPosts,
  selectedPost,
  selectedUser
});
