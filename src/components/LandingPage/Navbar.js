// Navbar.js

import React, { useState } from 'react';
import Logo from './kik-final-logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`navbar ${showMenu ? 'show-menu' : ''}`}>
      <div className='logo_menu'>
      <div className="logoo">
        <img src={Logo} alt="KodeinKGP Logo" />
        <h4>KodeinKGP</h4>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      </div>
      <div className={`links ${showMenu ? 'show' : ''}`}>
        <span className='link-tag'>
          <Link className='link' to="/" onClick={toggleMenu}>
            Home
          </Link>
        </span>
        <span className='link-tag'>
          <Link className='link' to="/pds" onClick={toggleMenu}>
            QnA Page
          </Link>
        </span>
        <span className='link-tag'>
          <Link className='link' to="/teams" onClick={toggleMenu}>
            Teams
          </Link>
        </span>
        <span className='link-tag'>
          <Link className='link' to="/events" onClick={toggleMenu}>
            Events
          </Link>
        </span>
        <span className='link-tag'>
        <Link className='link' ro="/breadth-recommend" onClick={toggleMenu}>
          Breath Recommend
        </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
