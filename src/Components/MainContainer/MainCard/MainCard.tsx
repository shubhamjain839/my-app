import React from 'react'
import styles from './MainCard.module.css'

interface MainCardProps {
  children: any
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
  return <div className={styles.MainCard}>{children}</div>
}

export default MainCard
