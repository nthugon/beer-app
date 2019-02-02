import React from 'react';
import UnstyledLink from '../shared/UnstyledLink';
import './Header.css';

const Header = () => (
  <header>
    <div className="app-name">
      <h1>
        <UnstyledLink to="/">
          <span className="pointer">HopHub</span>
        </UnstyledLink>       
      </h1>
    </div>
  </header>
);

export default Header;