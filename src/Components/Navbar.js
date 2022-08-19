import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';

const styles = {
  navStyles: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '70px',
    paddingLeft: '100px',
    backgroundColor: '#ffffff',
    boxShadow: '5px 24px 29px 0px rgba(156,156,156,1)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyles: {
    height: '8vmin',
    display: 'inline',
  },

  logoTextStyles: {
    fontSize: '23px',
    display: 'inline',
    color: '#0290ff',
  },

  navLinksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    gap: '30px',
    fontSize: '18px',
  },
  navLinks: {
    color: '#000',
    textDecoration: 'none',
  },
};

const {
  navStyles, logoContainer, logoTextStyles, navLinksContainer, navLinks,
} = styles;

const Navbar = () => (
  <nav style={navStyles}>
    <div style={logoContainer}>
      <h1 style={logoTextStyles}>Book Store</h1>
    </div>
    <ul style={navLinksContainer}>
      <li>
        <Link style={navLinks} to="/">Books</Link>
      </li>
      <li>
        <Link style={navLinks} to="/Categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
