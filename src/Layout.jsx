import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import {Top} from './Components/Top'
import Popup from './Components/popup'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Top/>
    <Popup/>
    <Footer/>
    </>
  )
}

export default Layout