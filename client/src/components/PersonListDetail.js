import React from 'react';
import { useHistory } from 'react-router-dom';
import './components.css';


export default function PersonListDetail (props) {
  const history = useHistory();

  const { id, name, character } = props;

  function navigate () {
    history.push(`/person/${id}`);
  }

  return (
    <div className='lmdb-person-list-detail' onClick={navigate}>
      {name} (<i>{character}</i>)
    </div>
  );
}
