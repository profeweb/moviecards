import React, { Component } from 'react';

import './SelectOrder.css';

class SelectOrder extends Component {

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.handleChange(event.target.value);
	}


	render() {
	    return (
	    	<select className="form-select selCateg" onChange={this.handleChange}>
	    		<option value="asc">ASC</option>
	    		<option value="desc">DESC</option>
	    	</select>
	    );
	}
}


export default SelectOrder;