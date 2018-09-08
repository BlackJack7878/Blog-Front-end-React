import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageIntro from '../../Components/PageIntro/PageIntro';
import ToDoList from '../../Components/ToDoList/ToDoList';
import Loader from '../../Components/Loader/Loader';

import { getUser, updateUserTodo } from '../../Store/Actions/actionTypes';

class UserTodos extends Component {
	
	componentWillMount() {
		const post_id = parseInt(this.props.match.params.id, 10);
		this.props.getUser(post_id);
	}

	render() {
		const is_loading = (this.props.selectedUser.isLoading || this.props.selectedUser.isUserTodosLoading) ? true : false ;

		return(
			<div>
				<Loader is_loading={is_loading} />

				<PageIntro title={this.props.selectedUser.userName} />

				<div className='wrapper'>
					<ToDoList 
						list={this.props.selectedUser.userTodos}
						updateUserTodo={this.props.updateUserTodo}
					/>
				</div>
			</div>
		);
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		getUser: bindActionCreators(getUser, dispatch),
		updateUserTodo: bindActionCreators(updateUserTodo, dispatch),
	}
}

export default connect(state => state, mapActionsToProps)(UserTodos);