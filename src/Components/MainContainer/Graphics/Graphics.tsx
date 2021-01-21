import React from 'react'
import styles from './Graphics.module.css'

interface GraphicsProps {
  logo: string
}

const Graphics: React.FC<GraphicsProps> = ({ logo }) => {
  return (
    <div className={styles.Graphics}>
      <img
        src={`${process.env.PUBLIC_URL}/Assets/svg/${logo}.svg`}
        alt='logo'
      />
    </div>
  )
}

export default Graphics
