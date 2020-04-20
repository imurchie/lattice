import React from 'react';
import MovieListDetail from './MovieListDetail';
import './components.css';


function MovieList (props) {
  return (
    <div className="lmdb-movie-list">
      {props.movies.map(movie => {
        return (
          <MovieListDetail movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
}

export default MovieList;
