import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = (props) => {
	return (
		<div className='post'>
			<h2>{props.title}</h2>
			<h3>By user #{props.userId}</h3>
			<p>{props.text}</p>
			<Link to={`/post/${props.id}`} className='post-more animated-link'>
				<span>Read more</span>
			</Link>
		</div>
	);
}

export default Post;