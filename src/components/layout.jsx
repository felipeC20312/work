import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/global.css'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;