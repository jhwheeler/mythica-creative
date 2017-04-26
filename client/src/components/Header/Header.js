import React from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';
import logo from '../../../public/images/mythica-full-logo.png'

const Header = () => {
  return (
    <nav>
      <Link to="/" className="logo" aria-label="Mythica Creative Homepage">
        <img src={logo} alt="Mythica Creative" />
      </Link>
      <div className="links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
