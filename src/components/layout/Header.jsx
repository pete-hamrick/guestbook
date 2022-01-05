import React from 'react';
import './Header.css';
import logo from '../../assets/guestBook.png';
import { useUser } from '../../context/UserContext';

function Header() {
  const { user } = useUser();
  return (
    <header className="header-container">
      <img src={logo} alt="guest book" />
      {user ? (
        <div>
          <h3>Signing as {user}</h3>
        </div>
      ) : (
        <div className="header-right">
          <h3>Sign In, Friend</h3>
        </div>
      )}
    </header>
  );
}

export default Header;
