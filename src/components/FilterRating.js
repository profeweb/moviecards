import React, { Component } from 'react';

import './FilterRating.css';

class FilterRating extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.handleClick(this.props.rating);
	}


	render() {
		const style = this.props.style + " filterRating"
	    return (
	    	<button className= {style} onClick={this.handleClick}>
	    		<i className="fa fa-star fa-lg"></i> {this.props.rating}
	    	</button>
	    );
	}
}


export default FilterRating;