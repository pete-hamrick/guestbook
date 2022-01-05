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
