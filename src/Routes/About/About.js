import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return(
			<div>
				<Link to='/'>Home</Link>
				<h1>About page</h1>
			</div>
		);
	}
}

export default connect(state => state)(About);