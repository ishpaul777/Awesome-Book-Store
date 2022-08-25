import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';

const styles = {
  navStyles: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '80px',
    backgroundColor: '#ffffff',
    // boxShadow: '2px 18px 18px 0px rgba(156,156,156,1)',
  },
  navContainer: {
    display: 'flex',
    marginLeft: '200px',
    gap: '100px',
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
    fontSize: '28px',
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
  navStyles, navContainer, logoContainer, logoTextStyles, navLinksContainer, navLinks,
} = styles;

const Navbar = () => (
  <nav style={navStyles}>
    <div style={navContainer}>
      <div style={logoContainer}>
        <h1 style={logoTextStyles}>Bookstore CMS</h1>
      </div>
      <ul style={navLinksContainer}>
        <li>
          <Link style={navLinks} to="/">Books</Link>
        </li>
        <li>
          <Link style={navLinks} to="/Categories">Categories</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
