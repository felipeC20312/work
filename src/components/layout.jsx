import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/global.css'
import WhatsapWidget from './model_whatsapp/whatsapp';

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <WhatsapWidget/>
      <Footer/>
    </div>
  )
}

export default Layout;