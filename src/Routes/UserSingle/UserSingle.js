import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import PageIntro from '../../Components/PageIntro/PageIntro';
import UserMap from './Components/UserMap/UserMap';
import ToDoList from '../../Components/ToDoList/ToDoList';
import Loader from '../../Components/Loader/Loader';

import './UserSingle.css';

import { getUser, updateUserTodo } from '../../Store/Actions/actionTypes';

class UserSingle extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user_id: parseInt(this.props.match.params.id, 10)
		};
	}

	componentWillMount() {
		this.props.getUser(this.state.user_id);
	}

	render() {
		const firstName = this.props.selectedUser.userName.split(' ')[0];
		const is_loading = (this.props.selectedUser.isLoading || this.props.selectedUser.isUserTodosLoading) ? true : false ;

		return(
			<div className='user-single'>
				<Loader is_loading={is_loading} />

				<PageIntro title={this.props.selectedUser.userName} />

				<div className='wrapper'>
					<div className='col'>
						<h2>{this.props.selectedUser.userName}</h2>
						<h4>{this.props.selectedUser.userNickname}</h4>

						<Link className='page-link' to={`/user/${this.state.user_id}/posts`}>View All User's Posts</Link>

						<h3>Contact Info:</h3>
						<p>
							Phone: <a href={`tel:${this.props.selectedUser.userPhone}`}>{this.props.selectedUser.userPhone}</a>
							<br />
							Website: <a href={`http://www.${this.props.selectedUser.userWebsite}`}>{this.props.selectedUser.userWebsite}</a>
						</p>

						<h3>{firstName}'s company:</h3>
						<p>
							Company name: {this.props.selectedUser.userCompany.name}
							<br />
							Phrase: {this.props.selectedUser.userCompany.catchPhrase}
							<br />
							Business sector: {this.props.selectedUser.userCompany.bs}
						</p>

						<h3>Address:</h3>
						<p>
							City: {this.props.selectedUser.userAddress.city}
							<br />
							Street: {this.props.selectedUser.userAddress.street}
							<br />
							Suite: {this.props.selectedUser.userAddress.suite}
							<br />
							Zip code: {this.props.selectedUser.userAddress.zipcode}
						</p>
					</div>

					<UserMap 
						lat={this.props.selectedUser.userAddress.geo.lat} 
						lng={this.props.selectedUser.userAddress.geo.lng}
						title={`${this.props.selectedUser.userName} map`}
					/>

					<h3>User's To Do List:</h3>
					<ToDoList 
						list={this.props.selectedUser.userTodos.slice(0, 5)} 
						updateUserTodo={this.props.updateUserTodo}
					/>

					<Link className='page-link' to={`/user/${this.state.user_id}/todos`}>View All User's Todos</Link>
				</div>
			</div>
		);
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		updateUserTodo: bindActionCreators(updateUserTodo, dispatch),
		getUser: bindActionCreators(getUser, dispatch)
	}
}

export default connect(state => state, mapActionsToProps)(UserSingle);