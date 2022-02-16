import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

import './Movies.css';

class MovieList extends Component {

	constructor(props){
		super(props);
	}

	applyFilters(movie){
		if(this.props.category==="all"){
			return movie.rating <= this.props.rating &&
			   	movie.title.indexOf(this.props.search)!=-1;
		}
		else {
			return movie.rating <= this.props.rating && 
			   	movie.category === this.props.category &&
			   	movie.title.indexOf(this.props.search)!=-1;
		}
	}

	render() {
	    return ( 
	    	<div> 
				<div className="card-deck">
	            {
	                this.props.movies.
	                	filter( movie => this.applyFilters(movie)).
	                	map(movie => <MovieCard key={movie.id} movie={movie} />)
	            }
	        	</div>
	    	</div>
	    );
	}
}


export default MovieList;