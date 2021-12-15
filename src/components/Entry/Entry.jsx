import React from 'react';

function Entry({ entry: { name, message } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Entry;
