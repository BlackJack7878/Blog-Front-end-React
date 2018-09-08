// ----------------------------------------------
// USER - TO DO
// ----------------------------------------------
export const REQUEST_USER_TODO = 'REQUEST_USER_TODO';
export function requestUserTodo() {
	return {
		type: REQUEST_USER_TODO
	}
}

export const RECEIVE_USER_TODO = 'RECEIVE_USER_TODO';
export function receiveUserTodo(json) {
	return {
		type: RECEIVE_USER_TODO,
		payload: {
			userTodos: json.map(item => {
				return {
					todoId: item.id,
					todoTitle: item.title,
					todoStatus: item.completed
				}
			})
		}
	}
}

export const getUserTodo = (userId = 0) => dispatch => {

	dispatch(requestUserTodo());

	return fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
		.then(response => response.json())
		.then(json => dispatch(receiveUserTodo(json)));

}

export const UPDATE_USER_TODO = 'UPDATE_TODO';
export function updateUserTodo(id) {
	return {
		type: UPDATE_USER_TODO,
		payload: id
	}
}

// ----------------------------------------------
// USER
// ----------------------------------------------
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export function requestUserInfo() {
	return {
		type: REQUEST_USER_INFO
	}
}

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export function receiveUserInfo(json) {
	return {
		type: RECEIVE_USER_INFO,
		payload: {
			userId: json.id,
			userName: json.name,
			userNickname: json.username,
			userEmail: json.email,
			userPhone: json.phone,
			userWebsite: json.website,
			userAddress: json.address,
			userCompany: json.company
		}
	}
}

export const getUserInfo = (userId = 0) => dispatch => {

	dispatch(requestUserInfo());

	return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
		.then(response => response.json())
		.then(json => dispatch(receiveUserInfo(json)));

}

// Combine getUserTodo & getUserInfo
export const getUser = (userId = 0) => (dispatch, getState) => {

	return dispatch(getUserInfo(userId)).then(() => {
		return dispatch(getUserTodo(userId));
	});
	
}

// ----------------------------------------------
// POST - COMMENTS
// ----------------------------------------------
export const REQUEST_POST_COMMENTS = 'REQUEST_POST_COMMENTS';
export function requestPostComments() {
	return {
		type: REQUEST_POST_COMMENTS
	}
}

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export function receivePostComments(json) {
	return {
		type: RECEIVE_POST_COMMENTS,
		payload: {
			postComments: json.map(item => {
				return {
					commentId: item.id,
					commentHead: item.name,
					commentBody: item.body,
					commentEmail: item.email
				};
			})
		}
	}
}

// ASYNC COMMENTS REQUEST
export const getPostComments = (postId = 0) => dispatch => {

	dispatch(requestPostComments());

	return fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
		.then(response => response.json())
		.then(json => dispatch(receivePostComments(json)));

}

// ----------------------------------------------
// POST - SINGLE
// ----------------------------------------------

export const REQUEST_POST_SINGLE = 'REQUEST_POST_SINGLE';
export function requestPostSingle() {
	return {
		type: REQUEST_POST_SINGLE
	}
}

export const RECEIVE_POST_SINGLE = 'RECEIVE_POST_SINGLE';
export function receivePostSingle(json) {
	return {
		type: RECEIVE_POST_SINGLE,
		payload: {
			postId: json.id,
			userId: json.userId,
			postTitle: json.title,
			postBody: json.body,
		}
	}
}

export const getPostSingle = (postId = 0) => dispatch => {

	dispatch(requestPostSingle());

	return fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
		.then(response => response.json())
		.then(json => dispatch(receivePostSingle(json)));

}


// Combine getPostSingle & getPostComments
export const getPostInfo = (postId = 0) => (dispatch, getState) => {

	return dispatch(getPostSingle(postId)).then(() => {
		return dispatch(getPostComments(postId));
	});

}

// ----------------------------------------------
// POSTS
// ----------------------------------------------
export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(page) {
	return {
		type: REQUEST_POSTS,
		payload: page
	}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(json) {
	return {
		type: RECEIVE_POSTS,
		payload: {
			loadedAt: Date.now(),
			posts: json.map(item => {
				return {
					userId: item.userId,
					postId: item.id,
					postTitle: item.title,
					postBody: item.body,
					isLoadingComments: false
				};
			})
		}
	}
}

// ASYNC POST REQUEST
export const getPosts = (page = 1, userId = null) => dispatch => {

	dispatch(requestPosts(page));

	return fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(response => response.json())
		.then(json => dispatch(receivePosts(json)));

}