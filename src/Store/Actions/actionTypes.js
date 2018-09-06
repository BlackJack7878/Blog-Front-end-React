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
export const getPostComments = (postId) => dispatch => {

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

	console.log('PIZDA');

}


// Combine getPostSingle & getPostComments
export const getPostInfo = (postId) => (dispatch, getState) => {

	return dispatch(getPostSingle(postId)).then(() => {
		return dispatch(getPostComments(postId));
	});

}

// ----------------------------------------------
// POSTS
// ----------------------------------------------

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
	return {
		type: REQUEST_POSTS
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
export const getPosts = () => dispatch => {

	dispatch(requestPosts());

	return fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(response => response.json())
		.then(json => dispatch(receivePosts(json)));

}