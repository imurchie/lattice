import React from 'react';
import MovieListDetail from './MovieListDetail';


function MovieList (props) {
  return (
    <div>
      {props.movies.map(movie => {
        return (
          <MovieListDetail title={movie.title} id={movie.id} key={movie.id} />
        );
      })}
    </div>
  );
}

export default MovieList;
