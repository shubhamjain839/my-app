import React from 'react'
import styles from './Graphics.module.css'

type GraphicsProps = {
  logo: string
}

const Graphics = ({ logo }: GraphicsProps) => {
  return (
    <div className={styles.Graphics}>
      <img src={`/Assets/svg/${logo}.svg`} alt='logo' />
    </div>
  )
}

export default Graphics
