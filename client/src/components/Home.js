import React from 'react';
import MovieList from './MovieList';
import './components.css';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      movies: [],
      isLoaded: false,
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();

    const searchValue = encodeURI(this.state.searchValue);
    if (searchValue) {
      this.setState({
        isLoaded: true,
      });
      fetch(`/v1.0/movies/search/${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            movies: data.results,
            isLoaded: true,
          });
        });
    } else {
      this.getPopularMovies();
    }
  }

  componentDidMount () {
    this.getPopularMovies();
  }

  getPopularMovies () {
    return fetch('/v1.0/movies/popular')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          page: data.page,
          totalPages: data.total_pages,
          isLoaded: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit} className="lmdb-search">
            <input placeholder="Movie Title" type="text" value={this.state.searchValue} onChange={this.handleChange} />
            <input type="submit" value="Search" />
          </form>
        </div>

        <MovieList movies={movies}/>
      </div>
    );
  }
}
