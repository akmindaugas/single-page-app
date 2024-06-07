'use client'; 
import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-scroll";
import logo from '../images/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    const closeMenu = () => setClick(false);
  
    return (
      <div className={styles.header}>

          <nav className={styles.navBar}>
            <a href='/' className={styles.logo}>
                      </a>
            <div className={styles.hamburger} onClick={handleClick}>
              <FaBars/>
              </div>

            <ul className={styles.navList}>

              <li className={styles.navItem}>
                <a href='/' onClick={closeMenu}>Home</a>
              </li>
              <li className={styles.navItem}>
                <a href='/' onClick={closeMenu}>About</a>
              </li>
              <li className={styles.navItem}>
                <a href='/' onClick={closeMenu}>Gallery</a>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
  
  export default Navbar;