import React from 'react'
import styles from './App.module.css'
import Routes from '../Routes/Routes'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Routes />
    </div>
  )
}

export default App
