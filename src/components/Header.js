import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Business Name</h1>
      <nav>
        <ul>
          <li><a href="#pricing">Pricelist</a></li>
          <li><a href="#benefits">Benefits</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
