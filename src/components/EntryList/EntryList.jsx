import React from 'react';
import { useEntries } from '../../context/EntryContext';
import Entry from '../Entry/Entry';

function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <ul>
        {entries.map((entry) => {
          return (
            <li key={`${entry.name}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EntryList;
