import React from 'react';
import './Loader.css';

const Loader = (props) => {
	const loader_class = props.is_loading ? 'loader active' : 'loader';

	return (
		<div className={loader_class}></div>
	);
}

export default Loader;