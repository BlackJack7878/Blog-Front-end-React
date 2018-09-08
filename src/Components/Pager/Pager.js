import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Pager.css';

class Pager extends Component {
	render() {
		const class_hidden_prev = (this.props.prevPage === 0) ? 'hidden' : '';
		const class_hidden_next = (this.props.nextPage === this.props.maxPage + 1) ? 'hidden' : '';

		return (
			<div className='pager'>
				<Link 
					onClick={() => this.props.changePage()} 
					to={this.props.prevLink} 
					className={`button ${class_hidden_prev}`}
				>
					Back
				</Link>
				<Link 
					onClick={() => this.props.changePage()} 
					to={this.props.prevLink} 
					className={`button ${class_hidden_prev}`}
				>
					{this.props.prevPage}
				</Link>
				<Link 
					onClick={() => this.props.changePage()} 
					to='' 
					className='button inactive'
				>
					{this.props.prevPage + 1}
				</Link>
				<Link 
					onClick={() => this.props.changePage()} 
					to={this.props.nextLink} 
					className={`button ${class_hidden_next}`}
				>
					{this.props.nextPage}
				</Link>
				<Link 
					onClick={() => this.props.changePage()} 
					to={this.props.nextLink} 
					className={`button ${class_hidden_next}`}
				>
					Next
				</Link>
			</div>
		);
	}
}

export default Pager;