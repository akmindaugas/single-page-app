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
        {/* <div className='header'> */}
          <nav className={styles.navbar}>
            <a href='/' className={styles.logo}>
              <img src={logo} alt='logo' />
            </a>
            <div className={styles.hamburger} onClick={handleClick}>
              {click ? (
                <FaTimes size={30} style={{ color: '#ffffff' }} />
              ) : (
                <FaBars size={30} style={{ color: '#ffffff' }} />
              )}
            </div>
            <ul className={click ? `${styles.navMenu} active` : styles.navMenu}>
              <li className='nav-item'>
                <a href='/' onClick={closeMenu}>Home</a>
              </li>
              <li className='nav-item'>
                <a href='/' onClick={closeMenu}>About</a>
              </li>
              <li className='nav-item'>
                <a href='/' onClick={closeMenu}>Gallery</a>
              </li>
              {/* ... other menu items */}
            </ul>
          </nav>
        </div>
      // </div>
    );
  }
  
  export default Navbar;