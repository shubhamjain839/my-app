import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MainContentArea from './MainContentArea/MainContentArea'
const Routes: React.FC = () => {
  return (
    <BrowserRouter basename='https://shubhamjain839.github.io/assigment3/'>
      <Navbar />
      <MainContentArea />
    </BrowserRouter>
  )
}

export default Routes
