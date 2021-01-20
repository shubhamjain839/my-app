import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLinks.module.css'

type NavLinksProps = {
  title: string
  clicked: any
  path: string
}

const NavLinks = ({ title, clicked, path }: NavLinksProps) => {
  return (
    <div className={styles.NavLinks}>
      <Link to={path} onClick={clicked} className={styles.NavLinksBtn}>
        {title}
      </Link>
    </div>
  )
}

export default NavLinks
