import React from 'react';
import PersonListDetail from './PersonListDetail';


class MovieDetail extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      id: props.match.params.id,
      details: {},
    };
  }

  componentDidMount() {
    return fetch(`/v1.0/movies/${this.state.id}`)
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
      <div>
        <h1>Movie!</h1>
        {details.title} ({details.release_date})<br/>
        <i>{details.tagline}</i>
        {details.credits.cast.map((member) => (<PersonListDetail id={member.id} name={member.name} character={member.character} key={member.id} />))}
      </div>
    );
  }
}

export default MovieDetail;
