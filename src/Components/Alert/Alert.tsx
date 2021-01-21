import React from 'react'
import styles from './Alert.module.css'

interface AlertProps {
  title: string
  type: string
}

const Alert: React.FC<{ title: string; type: string }> = ({
  title,
  type,
}: AlertProps) => {
  return (
    <div className={`${styles.Alert} ${styles[type]}`}>
      <p>{title}</p>
    </div>
  )
}

export default Alert
