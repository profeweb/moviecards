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
			   	movie.title.indexOf(this.props.search)!==-1;
		}
		else {
			return movie.rating <= this.props.rating && 
			   	movie.category === this.props.category &&
			   	movie.title.indexOf(this.props.search)!==-1;
		}
	}

	sortMovies(movie1, movie2){
		if(this.props.order==="asc"){
			return parseFloat(movie1.rating) - parseFloat(movie2.rating);
		}
		else {
			return parseFloat(movie2.rating) - parseFloat(movie1.rating);
		}
	}

	render() {
	    return ( 
	    	<div> 
				<div className="card-deck">
	            {
	                this.props.movies
	                .filter( movie => this.applyFilters(movie))
	                .sort( (movie1, movie2) => this.sortMovies(movie1, movie2))
	                .map( movie => <MovieCard key={movie.id} movie={movie} />)
	            }
	        	</div>
	    	</div>
	    );
	}
}


export default MovieList;