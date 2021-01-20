import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainContentArea from './MainContentArea/MainContentArea'
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContentArea />
    </BrowserRouter>
  )
}

export default Routes
