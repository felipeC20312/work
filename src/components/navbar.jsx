import React from 'react';
import {Link} from 'gatsby';
import { useLocation } from '@reach/router';
import * as styles from '../styles/navbar.module.css';
import { MdMenu } from "react-icons/md";

import images from '../images';

const Navbar = () => {

  const navbarOptions = [
    {
      id: '1',
      content: <Link to='/'>Serviços</Link>
    },
    {
      id: '2',
      content: <Link to='/'>Soluções</Link>
    },
    {
      id: '3',
      content: <Link to='/'>Relatos</Link>
    },
    {
      id: '4',
      content: <Link to='/'>Contato</Link>
    },
  ]

  const location = useLocation();
  console.log("local atual da aplicação:" + location.pathname);

  // Verifica se a rota atual é "/about"
  const isAboutPage = location.pathname.includes('/about/');

  return (
    <nav className={isAboutPage ? `${styles.container} ${styles.aboutPage}` : styles.container}>
      <img src={images.vize_logo} alt="vize logo" />
      <div className={styles.links}>
        {isAboutPage ? <Link><span>A Vize</span></Link> : <></>}
        <Link to='/'>Serviços</Link>
        <Link to='/about'>Soluções</Link>
        <Link to='/'>Relatos</Link>
        <Link to='/'>Contato</Link>
      </div>

      <MdMenu className={styles.menuButton} size={'25px'} />
      <button className={styles.button}>Solicitar Contato</button>

      <div className={styles.navMenu}>
        {isAboutPage ? <Link><span>A Vize</span></Link> : <></>}
          <Link to='/'>Serviços</Link>
          <Link to='/about'>Soluções</Link>
          <Link to='/'>Relatos</Link>
          <Link to='/'>Contato</Link>
      </div>

    </nav>
  )
}

export default Navbar;