import React from "react";
import * as styles from "../../../../styles/crm_dynamics_lp/section04/carousel_template/carousel_template_card.module.css";

const CarouselTemplateCard = ({ img, title, subtitle, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header_content}>
        <div className={styles.imgContainer}>
          <img src={img} alt="/" />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CarouselTemplateCard;
