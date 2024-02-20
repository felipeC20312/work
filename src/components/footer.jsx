import React from 'react';
import * as styles from '../styles/footer.module.css';
import images from '../images';
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img src={images.vize_logo} alt="vize logo" />
        </div>
        <div className={styles.content}>
          <table>
            <tbody>
              <thead>Mapa do site</thead>
              <tr><td><a href='/about'>Sobre nós</a></td></tr>
              <tr><td><a href='/'>Soluções</a></td></tr>
              <tr><td><a href='/'>Serviços</a></td></tr>
              <tr><td><a href='/'>Nossos Clientes</a></td></tr>
              <tr><td><a href='/'>Contato</a></td></tr>
            </tbody>
          </table>
          
          <table>
            <tbody>
              <thead>Soluções</thead>
              <tr><td><a href='/'>CRM Dynamics 365</a></td></tr>
              <tr><td><a href='/'>Power Platform</a></td></tr>
              <tr><td><a href='/'>Portal do Cliente</a></td></tr>
              <tr><td><a href='/'>Hospedagem</a></td></tr>
              <tr><td><a href='/'>Integrações ERP</a></td></tr>
              <tr><td><a href='/'>Outras Integrações</a></td></tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <thead>Serviços</thead>
              <tr><td><a href='/'>Desenvolvimento</a></td></tr>
              <tr><td><a href='/'>Consultoria</a></td></tr>
              <tr><td><a href='/'>Gestão de Projetos</a></td></tr>
              <tr><td><a href='/'>Suporte</a></td></tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <thead>Contato</thead>
              <tr><td><a href='https://api.whatsapp.com/send?phone=5562996902273&text=Ol%C3%A1%20Vize%20Solutions'><MdOutlineWhatsapp className={styles.icon} />(62)99690-2273</a></td></tr>
              <tr><td><a href='mailto:contato@vize.solutions'><MdOutlineMailOutline className={styles.icon} />contato@vize.solutions</a></td></tr>
              <tr><td><a href='https://www.linkedin.com/company/vize-solutionsgo/'><FaLinkedinIn className={styles.icon} />Linkedin</a></td></tr>
              <tr><td><a href='https://www.instagram.com/vize.solutions/'><FaInstagram className={styles.icon} />Instagram</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.bottom}>
        © Vize Solutions. Todos os direitos reservados - 2023
      </div>
    </div>
  )
}

export default Footer;