import React from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import EntryList from '../../components/EntryList/EntryList';

function Home() {
  return (
    <div>
      <EntryForm />
      <EntryList />
    </div>
  );
}

export default Home;
