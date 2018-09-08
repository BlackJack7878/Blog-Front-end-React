import React, { Component } from 'react';

import ToDoSingleItem from './Subcomponents/ToDoSingleItem';

import './ToDoList.css';

class ToDoList extends Component {
	render() {
		const toDoItems = this.props.list.map(item => {
			return (
				<ToDoSingleItem
					key={item.todoId}
					todoId={item.todoId}
					todoTitle={item.todoTitle}
					todoStatus={item.todoStatus}
					updateUserTodo={this.props.updateUserTodo}
				/>
			);
		});	

		return (
			<ul className='todo-list'>
				{toDoItems}
			</ul>
		);
	}
}

export default ToDoList;