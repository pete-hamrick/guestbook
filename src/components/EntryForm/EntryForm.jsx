import React, { useState } from 'react';

function EntryForm() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <h3>Please Sign the Guest Book</h3>
      <label htmlFor="guestName">Guest Name</label>
      <input
        id="guestName"
        type="text"
        placeholder="Guest Name..."
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

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
