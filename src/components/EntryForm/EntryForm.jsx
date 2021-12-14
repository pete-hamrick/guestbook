import React, { useState } from 'react';

function EntryForm() {
  const [name, setName] = useState();
  const [entry, setEntry] = useState();

  return (
    <form>
      <h3>Please Sign the Guest Book</h3>
      <label htmlFor="guestName">Guest Name</label>
      <input
        id="guestName"
        type="text"
        placeholder="Guest Name..." /* need value and onChange */
      />

      <label htmlFor="guestEntry">Guest Entry</label>
      <textarea id="guestEntry" placeholder="Your Entry..." />

      <button type="submit">Sign</button>
    </form>
  );
}

export default EntryForm;
