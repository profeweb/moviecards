import React, { Component } from 'react';

class SelectCategory extends Component {

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.handleChange(event.target.value);
	}


	render() {
	    return (
	    	<select className="form-select" onChange={this.handleChange}>
	    		<option value="all">ALL</option>
	    		<option value="A">A</option>
	    		<option value="B">B</option>
	    		<option value="C">C</option>
	    		<option value="D">D</option>
	    	</select>
	    );
	}
}


export default SelectCategory;