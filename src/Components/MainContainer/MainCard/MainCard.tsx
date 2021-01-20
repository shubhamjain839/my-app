import React from 'react'
import styles from './MainCard.module.css'

type MainCardProps = {
  children: any
}

const MainCard = ({ children }: MainCardProps) => {
  return <div className={styles.MainCard}>{children}</div>
}

export default MainCard
