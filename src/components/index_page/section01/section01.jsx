import React from "react";
import * as styles from "../../../styles/index_page/section01/section01.module.css";
import * as linkStyles from "../../../styles/scroller.module.css";
import images from "../../../images/index";

import { Link } from "gatsby";
import { MdArrowForward } from "react-icons/md";

import "swiper/css";
import CarouselTemplate01 from "./carousel_template_01/carousel_template_01";

const Section01 = () => {
  return (
    <section id="section01">
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Soluções Personalizadas Para o <span>Mercado Imobiliário</span>.
          </h1>
          <p className={styles.description}>
            Tecnologia que conecta sua empresa ao seu cliente em uma jornada
            excepcional com resultados impressionantes para o seu negócio.
          </p>

          <Link
            to="/#sectionForm"
            className={`${styles.link} ${linkStyles.anchor_link}`}
          >
            Solicitar consultoria <MdArrowForward />
          </Link>

          <CarouselTemplate01 />
        </div>
        <div className={styles.imgContainer}>
          <img src={images.index_page_img_01} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section01;
