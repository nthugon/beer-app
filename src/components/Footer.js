import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => ( 
  <footer>
    <nav className="tabs">
      <Link className="nav-link" to="/">
        <FontAwesomeIcon className="footer-icon" icon={faHome} />        
        <li>HOME</li>
      </Link>
      <Link className="nav-link" to="/beers">
        <FontAwesomeIcon className="footer-icon" icon={faBeer} />
        <li>BEERS</li>
      </Link>
      <Link className="nav-link" to="/about">
        <FontAwesomeIcon className="footer-icon" icon={faInfoCircle} />
        <li>ABOUT</li>
      </Link>
    </nav>
  </footer>
);

export default Footer;