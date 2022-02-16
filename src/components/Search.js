import React, { Component } from 'react';

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
	    	<input type="text" className="form-control"  onChange={this.handleChange} />
	    );
	}
}


export default Search;