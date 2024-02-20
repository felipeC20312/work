import React from "react";
import * as styles from "../../styles/index.module.css";
import images from "../../images/index";

import { Link } from "gatsby";
import { MdArrowForward } from "react-icons/md";

import "swiper/css";
import CarouselTemplate01 from "./carousel_template_01/carousel_template_01";

const Section01 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Soluções Personalizadas Para o Mercado Imobiliário<span>.</span>
        </h1>
        <p className={styles.description}>
          Tecnologia que conecta sua empresa ao seu cliente em uma jornada
          excepcional com resultados impressionantes para o seu negócio.
        </p>
        <Link className={styles.link}>
          Solicitar consultoria <MdArrowForward />
        </Link>

        <CarouselTemplate01 />
      </div>
      <div className={styles.imgContainer}>
        <img src={images.index_page_img_01} alt="" />
      </div>
    </div>
  );
};

export default Section01;
