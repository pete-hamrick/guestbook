import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntryProvider } from '../../context/EntryContext';
import Home from './Home';

it('should render the home component if there is not a current user', () => {
  render(
    <EntryProvider value={null}>
      <UserProvider value={null}>
        <Home />
      </UserProvider>
    </EntryProvider>
  );

  const guestNameEntry = screen.getByLabelText('Guest Name');

  const displayMessage = screen.getByText('Please Sign the Guestbook');

  expect(guestNameEntry).toBeInTheDocument();
  expect(displayMessage).toBeInTheDocument();
});
