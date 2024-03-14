import React from "react";
import * as styles from "../../../../styles/index_page/section02/carousel_template02/carousel_template02_card.module.css";
import { MdArrowForward } from "react-icons/md";

const CarouselTemplateCard02 = ({ img, title, subtitle, description }) => {
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

export default CarouselTemplateCard02;
