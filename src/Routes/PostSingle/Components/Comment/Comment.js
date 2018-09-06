import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.css'

const Comment = (props) => {
	return (
		<div className='comment'>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
			<a className='animated-link' href={`mail:${props.email}`}>
				<span>{props.email}</span>
			</a>
		</div>
	);
}

export default Comment;