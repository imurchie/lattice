import React from 'react';
import { useHistory } from 'react-router-dom';


export default function PersonListDetail (props) {
  const history = useHistory();

  const { id, name, character } = props;

  function navigate () {
    history.push(`/person/${id}`);
  }

  return (
    <div className='person-list-details' onClick={navigate}>
      {name} ({character})
    </div>
  );
}
