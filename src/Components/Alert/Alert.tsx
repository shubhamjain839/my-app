import React from 'react'
import styles from './Alert.module.css'

type AlertProps = {
  title: string
  type: string
}

const Alert = ({ title, type }: AlertProps) => {
  return (
    <div className={`${styles.Alert} ${styles[type]}`}>
      <p>{title}</p>
    </div>
  )
}

export default Alert
