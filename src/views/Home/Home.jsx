import React from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import EntryList from '../../components/EntryList/EntryList';

function Home() {
  return (
    <div>
      <h1>hello from the home component</h1>
      <EntryForm />
      <EntryList />
    </div>
  );
}

export default Home;
