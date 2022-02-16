import React, { Component } from 'react';

class FilterRating extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.handleClick(this.props.rating);
	}


	render() {
	    return (
	    	<button className={this.props.style} onClick={this.handleClick}>
	    		<i className="fa fa-star fa-lg"></i> {this.props.rating}
	    	</button>
	    );
	}
}


export default FilterRating;