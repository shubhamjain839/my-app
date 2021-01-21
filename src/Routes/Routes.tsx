import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainContentArea from './MainContentArea/MainContentArea'
const Routes: React.FC = () => {
  return (
    <BrowserRouter basename='/my-app/'>
      <Navbar />
      <MainContentArea />
    </BrowserRouter>
  )
}

export default Routes
