import React from 'react';

import './ToDoSingleItem.css';

const ToDoSingleItem = (props) => {
	return (
		<li className='todo-list-item'>
			<label htmlFor={`to_do_${props.todoId}`}>{props.todoTitle}</label>
			<input 
				type='checkbox' 
				id={`to_do_${props.todoId}`} 
				checked={props.todoStatus}
				onChange={() => props.updateUserTodo(props.todoId)} 
			/>
			<span className="checkmark"></span>
		</li>
	);
}

export default ToDoSingleItem;