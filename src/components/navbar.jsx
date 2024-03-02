import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { MdMenu, MdArrowForwardIos } from "react-icons/md";
import * as styles from "../styles/navbar.module.css";
import * as linkStyles from "../styles/scroller.module.css";
import images from "../images";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);

  const isAboutPage =
    location.pathname.includes("/about/") ||
    location.pathname.includes("/crm-dynamics/");

  const toggleNavMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSolutionMenu = () => {
    setSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <nav
      className={
        isAboutPage
          ? `${styles.container} ${styles.aboutPage}`
          : styles.container
      }
    >
      <Link to="/#section01">
        <img src={images.vize_logo} alt="" />
      </Link>

      <ul className={styles.links}>
        <Link to="/about">A Vize</Link>
        <button className={styles.solution} onClick={toggleSolutionMenu}>
          Soluções
          <MdArrowForwardIos
            className={`${styles.solutionIcon} ${
              isSolutionsOpen ? styles.solutionIconClicked : ""
            }`}
          />
          <ul
            className={`${styles.solutionDropDown} ${
              isSolutionsOpen ? styles.MenuOpen : styles.MenuClose
            }`}
          >
            <Link to="/crm-dynamics" className={linkStyles.anchor_link}>
              CRM Dynamics 365
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Power Platform
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Portal do Cliente
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Hospedagem
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Integrações ERP
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Outras Integrações
            </Link>
          </ul>
        </button>
        <Link
          to={location.pathname.toString() + '#section_comments'}
          className={linkStyles.anchor_link}
        >
          Relatos
        </Link>
        <Link
          to={location.pathname.toString() + '#section_form'}
          className={linkStyles.anchor_link}
        >
          Contatos
        </Link>
      </ul>

      <ul
        className={`${styles.navMenu} ${
          isMenuOpen ? styles.MenuOpen : styles.MenuClose
        }`}
      >
        <Link>A Vize</Link>
        <button className={styles.solution} onClick={toggleSolutionMenu}>
          Soluções
          <MdArrowForwardIos
            className={`${styles.solutionIcon} ${
              isSolutionsOpen ? styles.solutionIconClicked : ""
            }`}
          />
          <ul
            className={`${styles.solutionDropDown} ${
              isSolutionsOpen ? styles.MenuOpen : styles.MenuClose
            }`}
          >
            <Link to="/crm_dynamics_lp" className={linkStyles.anchor_link}>
              CRM Dynamics 365
            </Link>
          </ul>
        </button>
        <Link to="/#section_comments_index" className={linkStyles.anchor_link}>
          Relatos
        </Link>
        <Link to="/#sectionContacts" className={linkStyles.anchor_link}>
          Contatos
        </Link>
      </ul>

      <button className={styles.button}>
        <Link to="/#sectionForm" className={linkStyles.anchor_link}>
          Solicitar consultoria
        </Link>
      </button>

      <button
        aria-label="button"
        className={styles.menuButton}
        onClick={toggleNavMenu}
      >
        <MdMenu size={"25px"} />
      </button>
    </nav>
  );
};

export default Navbar;
