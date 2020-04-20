import React from 'react';


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
      <div>
        <h1>Person!</h1>
        {details.name} ({details.birthday})<br/>
        <i>{details.biography}</i>
      </div>
    );
  }
}

export default PersonDetail;
