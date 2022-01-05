import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ProvideAuth } from '../../context/ProvideAuth';
import { UserProvider } from '../../context/UserContext';
import Login from './Login';

it('should render the login component', () => {
  const history = createMemoryHistory();
  render(
    <UserProvider>
      <ProvideAuth>
        <Router history={history}>
          <Login />
        </Router>
      </ProvideAuth>
    </UserProvider>
  );

  const usernameEntry = screen.getByText('Username');

  const passwordEntry = screen.getByText('Password');

  expect(usernameEntry).toBeInTheDocument();
  expect(passwordEntry).toBeInTheDocument();
});
