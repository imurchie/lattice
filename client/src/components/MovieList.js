import React from 'react';
import MovieListDetail from './MovieListDetail';


class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Movies!</h1>
        <ol>
        {movies.map((movie) => (
          <MovieListDetail
            title={movie.title} id={movie.id} key={movie.id}
          />
        ))}
        </ol>
      </div>
    );
  }
}

export default MovieList;
