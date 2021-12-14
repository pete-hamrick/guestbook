import React from 'react';

function EntryForm() {
  return (
    <form>
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
