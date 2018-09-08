import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageIntro from '../../Components/PageIntro/PageIntro';
import Post from './Components/Post/Post';
import Pager from '../../Components/Pager/Pager';
import Loader from '../../Components/Loader/Loader';

import './Home.css';

import { getPosts } from '../../Store/Actions/actionTypes';

class Home extends Component {

	constructor(props) {
		super(props);

		let initialPage = parseInt(this.props.match.params.page, 10);

		if (isNaN(initialPage)) {
			initialPage = 1;
		}

		this.state = {
			page: initialPage
		}
	}
	
	componentWillMount() {
		this.props.getPosts(this.state.page);
	}

	changePage() {
		this.setState({
			page: parseInt(this.props.match.params.page, 10)
		});
		this.props.getPosts(this.state.page);
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
		const is_loading = this.props.allPosts.isLoading;

		const prevPage = this.state.page - 1;
		const nextPage = this.state.page + 1;

		return(
			<div>
				<Loader is_loading={is_loading} />

				<PageIntro title='Home' />
				
				<div className='wrapper'>{posts}</div>

				<Pager 
					prevPage={prevPage}
					nextPage={nextPage}
					maxPage={this.props.allPosts.maxPage}
				/>
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