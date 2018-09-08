import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageIntro from '../../Components/PageIntro/PageIntro';
import Post from './Components/Post/Post';
import './Home.css';

import { getPosts } from '../../Store/Actions/actionTypes';

class Home extends Component {
	
	componentWillMount() {
		this.props.getPosts();
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

const mapActionsToProps = (dispatch) => {
	return {
		getPosts: bindActionCreators(getPosts, dispatch)
	}
}

export default connect(state => state, mapActionsToProps)(Home);