import React from 'react';
import { useHistory } from 'react-router-dom';
import './components.css';


export default function MovieListDetail (props) {
  const {
    id,
    title,
    poster_path: posterPath,
  } = props.movie;

  const history = useHistory();

  function navigate () {
    history.push(`/movie/${id}`);
  }

  return (
    <div className="lmdb-movie-list-detail">
      <img className="lmdb-movie-poster" src={`http://image.tmdb.org/t/p/w500${posterPath}`} alt={title} onClick={navigate} />
      <p>{title}</p>
    </div>
  );
}
