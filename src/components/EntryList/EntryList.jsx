import React from 'react';
import Entry from '../Entry/Entry';

function EntryList() {
  return (
    <div>
      <ul>{/* map over entries */}</ul>
      <Entry />
    </div>
  );
}

export default EntryList;
