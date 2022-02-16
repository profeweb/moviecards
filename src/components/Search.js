import React, { Component } from 'react';

import './Search.css';

class Search extends Component {

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.handleChange(event.target.value);
	}


	render() {
	    return (
	    	<div className="form-group mb-2 searchFilter">
	    		<input type="text" className="form-control" onChange={this.handleChange} />
	    	</div>
	    );
	}
}


export default Search;