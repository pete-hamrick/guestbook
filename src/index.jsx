import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
