import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

function EntryForm() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();
  const history = useHistory();

  function updateNameAndEntries() {
    if (!entry) return;
    setEntries([...entries, { name: user, message: entry }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNameAndEntries();
  };

  const displayMessage = user
    ? `Thanks for Signing, ${user}`
    : 'Please Sign the Guestbook';

  return (
    <form onSubmit={handleSubmit}>
      <h2>{displayMessage}</h2>
      {/* {user ? null : guestNameEntry} */}
      <label htmlFor="guestEntry">Guest Entry</label>
      <textarea
        id="guestEntry"
        placeholder="Your Entry..."
        value={entry}
        onChange={({ target }) => setEntry(target.value)}
      />

      <button type="submit">Sign</button>
      {user && (
        <button
          type="button"
          onClick={() => {
            setUser('');
            history.push('/login');
          }}
        >
          Not {user}?
        </button>
      )}
    </form>
  );
}

export default EntryForm;
