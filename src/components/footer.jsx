import React from 'react';
import * as styles from '../styles/footer.module.css';
import images from '../images';
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useLocation } from "@reach/router";
import { Link } from 'gatsby';


const Footer = () => {

  const location = useLocation();

  return (
    <div>
      <section id='section_contacts'>
        <div className={styles.container}>
          <div>
            <img src={images.vize_logo} alt="vize logo" />
          </div>
          <div className={styles.content}>
            <table>
              <tbody>
                <thead>Mapa do site</thead>
                <tr><td><Link to='/about'>A Vize</Link></td></tr>
                <tr><td><Link to='/#carousel_template_01'>Soluções</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + '#section_our_clients'}>Nossos Clientes</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + '#section_comments'}>Relatos</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + '#section_form'}>Contato</Link></td></tr>
              </tbody>
            </table>
            
            <table>
              <tbody>
                <thead>Soluções</thead>
                <tr><td><Link to='/crm-dynamics'>CRM Dynamics 365</Link></td></tr>
                <tr><td><Link to="/#carousel_template_01">Power Platform</Link></td></tr>
                <tr><td><Link to="/#carousel_template_01">Portal do Cliente</Link></td></tr>
                <tr><td><Link to="/#carousel_template_01">Hospedagem</Link></td></tr>
                <tr><td><Link to="/#carousel_template_01">Integrações ERP</Link></td></tr>
                <tr><td><Link to="/#carousel_template_01">Outras Integrações</Link></td></tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <thead>Serviços</thead>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/#section_form" : location.pathname.toString() + '#section_form'}>Desenvolvimento</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/#section_form" : location.pathname.toString() + '#section_form'}>Consultoria</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/#section_form" : location.pathname.toString() + '#section_form'}>Gestão de Projetos</Link></td></tr>
                <tr><td><Link to={location.pathname.includes("/about/") ? "/#section_form" : location.pathname.toString() + '#section_form'}>Suporte</Link></td></tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <thead>Contatos</thead>
                <tr><td><a
                  href='https://api.whatsapp.com/send?phone=5562996902273&text=Ol%C3%A1%20Vize%20Solutions'
                  target='_blank'
                  rel='noreferrer'
                >
                  <MdOutlineWhatsapp className={styles.icon} />(62)99690-2273</a></td></tr>
                <tr><td><a
                  href='mailto:contato@vize.solutions'
                  target='_blank'
                  rel='noreferrer'
                >
                  <MdOutlineMailOutline className={styles.icon} />contato@vize.solutions</a></td></tr>
                <tr><td><a
                  href='https://www.linkedin.com/company/vize-solutionsgo/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn className={styles.icon} />Linkedin</a></td></tr>
                <tr><td><a
                  href='https://www.instagram.com/vize.solutions/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram className={styles.icon} />Instagram</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.bottom}>
          © Vize Solutions. Todos os direitos reservados - 2023
        </div>
      </section>
    </div>
  )
}

export default Footer;