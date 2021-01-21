import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLinks.module.css'

interface NavLinksProps {
  title: string
  clicked: any
  path: string
}

const NavLinks: React.FC<NavLinksProps> = ({ title, clicked, path }) => {
  return (
    <div className={styles.NavLinks}>
      <Link to={path} onClick={clicked} className={styles.NavLinksBtn}>
        {title}
      </Link>
    </div>
  )
}

export default NavLinks
