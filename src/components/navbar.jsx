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
        <Link
          to="/about"
        >
          A Vize
        </Link>

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
            <Link to="/crm-dynamics" className={linkStyles.anchor_link}>
              CRM Inc.
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Vize Conecta
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Power BI
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Vize Cloud
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
            >
              Power Plataform
            </Link>
          </ul>
        </button>

        <Link
          to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + "#section_comments"}
          className={linkStyles.anchor_link}
        >
          Depoimentos
        </Link>

        <Link
          to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + "#section_form"}
          className={linkStyles.anchor_link}
        >
          Contato
        </Link>
      </ul>

      <ul
        className={`${
          isAboutPage ? styles.nav_menu_about_page : styles.navMenu
        } ${isMenuOpen ? styles.MenuOpen : styles.MenuClose}`}
      >
        <Link
          to={"/about"}
          onClick={toggleNavMenu}
        >
          A Vize
        </Link>

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
            <Link
              to="/crm-dynamics"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              CRM Dynamics 365
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              CRM Inc.
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              Vize Conecta
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              Power BI
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              Vize Cloud
            </Link>
            <Link
              to="/#carousel_template_01"
              className={linkStyles.anchor_link}
              onClick={toggleNavMenu}
            >
              Power Plataform
            </Link>
          </ul>
        </button>

        <Link
          to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + "#section_comments"}
          className={linkStyles.anchor_link}
          onClick={toggleNavMenu}
        >
          Depoimentos
        </Link>

        <Link
          to={location.pathname.includes("/about/") ? "/" : location.pathname.toString() + "#section_form"}
          className={linkStyles.anchor_link}
          onClick={toggleNavMenu}
        >
          Contato
        </Link>
      </ul>

      <button className={styles.button}>
        <Link
          to={location.pathname.includes("/about/") ? "/#section_form" : location.pathname.toString() + "#section_form"}
          className={linkStyles.anchor_link}
        >
          Solicitar consultoria
        </Link>
      </button>

      <button
        aria-label="button"
        className={styles.menuButton}
        onClick={toggleNavMenu}
      >
        <MdMenu
          size={"25px"}
          style={isAboutPage ? { color: "#fe5f06" } : { color: "white" }}
        />
      </button>
    </nav>
  );
};

export default Navbar;
