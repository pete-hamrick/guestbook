import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Layout from './Layout';

it('should render the layout component if there is not a current user', () => {
  render(
    <UserProvider value={null}>
      <Layout />
    </UserProvider>
  );

  const anonymousHeader = screen.getByText('Sign In, Friend');

  expect(anonymousHeader).toBeInTheDocument();
});

xit('should render the layout component if there is a user', async () => {
  render(
    <UserProvider value={{ user: 'user' }}>
      <Layout />
    </UserProvider>
  );

  const namedUserHeader = await screen.findByText('Signing as user');

  expect(namedUserHeader).toBeInTheDocument();
});
