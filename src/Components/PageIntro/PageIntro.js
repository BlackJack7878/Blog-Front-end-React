import React from 'react';
import './PageIntro.css';

const PageIntro = (props) => {
	return (
		<div className='intro-wrapper'>
			<h1>{props.title}</h1>
		</div>
	);
}

export default PageIntro;