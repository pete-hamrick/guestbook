import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

function EntryForm() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function updateNameAndEntries() {
    if (!entry) return;
    setEntries([...entries, { name, message: entry }]);
    setUser(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNameAndEntries();
  };

  const guestNameEntry = (
    <div>
      <label htmlFor="guestName">Guest Name</label>
      <input
        id="guestName"
        type="text"
        placeholder="Guest Name..."
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Please Sign the Guest Book</h3>
      {user ? null : guestNameEntry}
      <label htmlFor="guestEntry">Guest Entry</label>
      <textarea
        id="guestEntry"
        placeholder="Your Entry..."
        value={entry}
        onChange={({ target }) => setEntry(target.value)}
      />

      <button type="submit">Sign</button>
    </form>
  );
}

export default EntryForm;
