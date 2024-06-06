'use client'; 
import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    const closeMenu = () => setClick(false);
  
    return (
      <div className={styles.container}>
        <div className='header'>
          <nav className='navbar'>
            <a href='/' className='logo'>
              <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={handleClick}>
              {click ? (
                <FaTimes size={30} style={{ color: '#ffffff' }} />
              ) : (
                <FaBars size={30} style={{ color: '#ffffff' }} />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className='nav-item'>
                <a href='/' onClick={closeMenu}>Home</a>
              </li>
              {/* ... other menu items */}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Navbar;