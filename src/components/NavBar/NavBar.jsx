import React from 'react'
import styles from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.textColor}>
        <NavLink to="/Profile" activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.textColor}>
        <NavLink to="/Dialogs"  activeClassName={styles.activeLink}>Dialogs</NavLink>
      </div>
      <div className={styles.textColor}>
        <NavLink to="/News"  activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div className={styles.textColor}>
        <NavLink to="/Music"  activeClassName={styles.activeLink}>Music</NavLink>
      </div>
      <div className={styles.textColor}>
        <NavLink to="/Settings"  activeClassName={styles.activeLink}>Settings</NavLink>
      </div>
      <div className={styles.textColor}>
        <NavLink to="/Users"  activeClassName={styles.activeLink}>Users</NavLink>
      </div>
    </nav>
  )
}

export default NavBar