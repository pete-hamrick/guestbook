import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { setUser } = useUser();
  const { formState, handleFormChange } = useForm({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (event) => {
    event.preventDefault();
    const loginSuccessful = auth.login(formState.username, formState.password);

    if (loginSuccessful) {
      setUser(formState.username);
      history.replace(from.pathname);
    } else {
      setError('Wrong username/password combination');
    }
  };

  return (
    <fieldset className="w-1/4 border p-4">
      <legend>Sign In</legend>
      <form
        onSubmit={handleLogin}
        className="grid grid-cols-[1fr_2fr] grid-rows-3"
      >
        <label htmlFor="username" className="self-center text-right">
          Username
        </label>
        <input
          value={formState.username}
          onChange={handleFormChange}
          id="username"
          type="text"
          name="username"
          className="border p-2 m-3"
          required
        />
        <label htmlFor="password" className="self-center text-right">
          Password
        </label>
        <input
          value={formState.password}
          onChange={handleFormChange}
          id="password"
          type="password"
          name="password"
          className="border p-2 m-3"
          required
        />
        <button
          type="submit"
          className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
          aria-label="Sign In"
        >
          Sign In
        </button>
      </form>
      {error && <h4>{error}</h4>}
    </fieldset>
  );
}
