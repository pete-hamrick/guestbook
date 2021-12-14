import React from 'react';
import './Header.css';
import logo from '../../assets/guestBook.png';

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="guest book" />
      <div className="header-right">
        <h2>Sign In, Friend</h2>
      </div>
    </header>
  );
}

export default Header;
