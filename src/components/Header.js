import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="app-name">
      <h1 ui-sref="about">
        <span className="pointer">HopHub</span>
      </h1>
    </div>
  </header>
);

export default Header;