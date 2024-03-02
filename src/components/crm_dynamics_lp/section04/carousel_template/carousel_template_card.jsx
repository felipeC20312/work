import React from "react";
import * as styles from "../../../../styles/crm_dynamics_lp/section04/carousel_template/carousel_template_card.module.css";
import { MdArrowForward } from "react-icons/md";

const CarouselTemplateCard = ({ link, img, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <a href={link} aria-label="Ir para a página seguinte">
          <MdArrowForward size="20px" color="#FF601A" />
        </a>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="/" />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CarouselTemplateCard;
