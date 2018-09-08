import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Comment from './Components/Comment/Comment';

import './PostSingle.css';

import { getPostInfo } from '../../Store/Actions/actionTypes';

class PostSingle extends Component {

	componentWillMount() {
		const post_id = parseInt(this.props.match.params.id, 10);
		this.props.getPostInfo(post_id);
	}

	render() {
		const comments = this.props.selectedPost.postComments.map(item => {
			return (
				<Comment 
					key={item.commentId}
					title={item.commentHead}
					text={item.commentBody}
					email={item.commentEmail}
				/>
			);
		});	

		return (
			<div class='post-single'>
				<PageIntro title={this.props.selectedPost.postTitle} />
				<div className='wrapper'>
					<p>{this.props.selectedPost.postBody}</p>

					<div className='post-single-comments'>
						{comments}
					</div>
				</div>
			</div>
		);
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		getPostInfo: bindActionCreators(getPostInfo, dispatch)
	}
}

export default connect(state => state, mapActionsToProps)(PostSingle);