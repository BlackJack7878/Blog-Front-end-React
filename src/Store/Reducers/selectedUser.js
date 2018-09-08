import { REQUEST_USER_INFO, RECEIVE_USER_INFO, REQUEST_USER_TODO, RECEIVE_USER_TODO, UPDATE_USER_TODO } from '../Actions/actionTypes';
import { initialState } from '../reducer';

function userInfo(state = {
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
	userTodos: [],
	isUserTodosLoading: false
}, action) {
	switch (action.type) {
		case REQUEST_USER_INFO: {
			return { ...state, isLoading: true };
		}
		case RECEIVE_USER_INFO: {
			return {
				...state,
				isLoading: false,
				userId: action.payload.userId,
				userName: action.payload.userName,
				userNickname: action.payload.userNickname,
				userEmail: action.payload.userEmail,
				userPhone: action.payload.userPhone,
				userWebsite: action.payload.userWebsite,
				userAddress: action.payload.userAddress,
				userCompany: action.payload.userCompany
			}
		}
		default: { return state; }
	}
}

function userTodos(state = {
	isUserTodosLoading: false,
	userTodos: []
}, action) {
	switch (action.type) {
		case REQUEST_USER_TODO: {
			return { ...state, isUserTodosLoading: true };
		}
		case RECEIVE_USER_TODO: {
			return {
				...state,
				isUserTodosLoading: false,
				userTodos: action.payload.userTodos
			};
		}
		case UPDATE_USER_TODO: {
			return {
				...state,
				userTodos: state.userTodos.map(todo => {
					if (todo.todoId === action.payload) {
						todo.todoStatus = !todo.todoStatus;
					}
					return todo;
				})
			}
		}
		default: {
			return state;
		}
	}
}

export default function selectedUser(state = initialState.selectedUser, action) {
	switch (action.type) {
		case REQUEST_USER_INFO:
		case RECEIVE_USER_INFO:
			return userInfo(state, action);
		case REQUEST_USER_TODO:
		case RECEIVE_USER_TODO:
		case UPDATE_USER_TODO:
			return userTodos(state, action);
		default: return state;
	}
}