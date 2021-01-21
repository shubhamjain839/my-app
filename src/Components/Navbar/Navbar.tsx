import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import NavLinks from './NavLinks/NavLinks'
const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarLogo}>
        <Link to='/'>
          <img className={styles.Brand} src='/Assets/brand.png' alt='logo' />
        </Link>
      </div>
      <div className={styles.NavbarLinksRight}>
        <NavLinks path='/list' clicked={() => {}} title='LIST USERS' />
        <NavLinks path='/resources' clicked={() => {}} title='LIST RESOURCES' />
      </div>
      <div className={styles.NavbarLinks}>
        <NavLinks path='/login' clicked={() => {}} title='LOGIN' />
        <NavLinks path='/create' clicked={() => {}} title='CREATE USER' />
      </div>
    </div>
  )
}

export default Navbar
