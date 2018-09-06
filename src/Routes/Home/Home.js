import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageIntro from '../../Components/PageIntro/PageIntro';
import Post from './Components/Post/Post';
import './Home.css';

import { store } from '../../Store/store';
import { getPosts } from '../../Store/Actions/actionTypes';

class Home extends Component {
	
	componentWillMount() {
		store.dispatch(getPosts());
	}

	render() {
		const posts = this.props.allPosts.posts.map(item => {
			return (
				<Post 
					key={item.postId}
					id={item.postId}
					userId={item.userId}
					title={item.postTitle}
					text={item.postBody}
				/>
			);
		});

		return(
			<div>
				<PageIntro title='Home' />
				<div className='wrapper'>{posts}</div>
			</div>
		);
	}
}

export default connect(state => state)(Home);