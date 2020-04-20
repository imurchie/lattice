import React from 'react';
import { Link } from "react-router-dom";
import './components.css';


class PersonDetail extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    return fetch(`/v1.0/people/${this.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          details: data,
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
    const { error, isLoaded, details } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="lmdb-person-detail">
        <h1>{details.name}</h1>
        <p>Birthday: {details.birthday}</p>
        <p>{details.biography}</p>
        <div className="lmdb-person-detail-movies">
          <h3>Movies</h3>
          {details.movie_credits.cast.map((movie) => {
            return (<div>
              <Link to={`/movie/${movie.id}`}>{movie.title} (<i>{movie.release_date}</i>)</Link>
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default PersonDetail;
