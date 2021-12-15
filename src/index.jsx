import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { EntryProvider } from './context/EntryContext';

render(
  <React.StrictMode>
    <EntryProvider>
      <App />
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
