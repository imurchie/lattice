import React from 'react';
import { useHistory } from 'react-router-dom';


export default function MovieListDetail (props) {
  const { title, id } = props;

  const history = useHistory();

  function navigate () {
    history.push(`/movie/${id}`);
  }

  return (
    <li onClick={navigate}>{title}: {id}</li>
  );
}
