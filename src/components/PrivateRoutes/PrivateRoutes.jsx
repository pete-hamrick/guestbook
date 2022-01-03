import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoutes({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
