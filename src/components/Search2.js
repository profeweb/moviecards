import React, { Component } from 'react';


class Search2 extends Component {

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.handleChange(e.target.value);
	}


	render() {
	    return (
	    	<div className="form-group mb-2 searchFilter">
	    		<input type="text" className="form-control" onChange={this.handleChange} />
	    	</div>
	    );
	}
}


export default Search2;