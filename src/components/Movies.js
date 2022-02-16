import React, { Component } from 'react';
import MovieList from './MovieList.js';
import FilterRating from './FilterRating.js';
import SelectCategory from './SelectCategory.js';
import Search from './Search.js';
import MovieService from '../services/MovieService.js';

import './Movies.css';

class Movies extends Component {

	constructor() {
	    super();
	    this.state = {
	        movies: [],
	        rating: 5,
	        category:"all",
	        search: ""
	    };

	    this.changeRating = this.changeRating.bind(this);
	    this.changeCategory = this.changeCategory.bind(this);
	    this.changeSearch = this.changeSearch.bind(this);
	}

	changeRating(i){
		this.setState({rating : i});
	}

	changeCategory(c){
		this.setState({category : c});
	}

	changeSearch(s){
		this.setState({search : s});
	}

	componentDidMount() {
	    this.setState(() => ({ movies: MovieService.getMovies() }));
	}

	render() {
	    return (
	        <div className="container-fluid" style={{marginLeft: '-15px'}}>
	        	<div className="d-flex flex-row">                    
	                <div className="col-sm-12">
	                    <FilterRating rating="1" style={this.state.rating==1? "badge-primary" :"badge-secondary"} handleClick={this.changeRating} />
	                    <FilterRating rating="2" style={this.state.rating==2? "badge-primary" :"badge-secondary"}handleClick={this.changeRating}/>
	                    <FilterRating rating="3" style={this.state.rating==3? "badge-primary" :"badge-secondary"}handleClick={this.changeRating}/>
	                    <FilterRating rating="4" style={this.state.rating==4? "badge-primary" :"badge-secondary"}handleClick={this.changeRating}/>
	                    <FilterRating rating="5" style={this.state.rating==5? "badge-primary" :"badge-secondary"}handleClick={this.changeRating}/>
	                </div>
	            </div>
	            <div className="col-sm-12">{this.state.rating}</div>
	            <div className="col-sm-12">
	            	<SelectCategory handleChange={this.changeCategory} />
	            	{this.state.category}
	            </div>
	            <div className="col-sm-12">
	            	<Search handleChange={this.changeSearch} />
	            	{this.state.search}
	            </div>
	            <div className="d-flex flex-row">                    
	                <div className="col-sm-12">
	                    <MovieList movies={this.state.movies} 
	                    		   rating={this.state.rating} 
	                    		   category={this.state.category}
	                    		   search = {this.state.search} />
	                </div>
	            </div>
	        </div>
	    );
	}
}


export default Movies;