import React from "react";
import * as styles from "../../../styles/section02/carousel_template01/carousel_template01_card.module.css";
import { MdArrowForward, MdOutlineCheckCircle } from "react-icons/md";
import { Link } from "gatsby";

const CarouselTemplateCard01 = ({ img, title, description, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
          <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.innerCardContainer}>
            <MdOutlineCheckCircle color="#30b565" size={"32px"} />
            Sales
          </div>
          <div className={styles.innerCardContainer}>
            <MdOutlineCheckCircle color="#30b565" size={"32px"} />
            Sales
          </div>
          <div className={styles.innerCardContainer}>
            <MdOutlineCheckCircle color="#30b565" size={"32px"} />
            Sales
          </div>
          <div className={styles.innerCardContainer}>
            <MdOutlineCheckCircle color="#30b565" size={"32px"} />
            Sales
          </div>
        </div>
        <Link to={link}>
          <button className={styles.button}>Solicitar Consultoria<MdArrowForward size="20px" style={{marginLeft: '15px'}}/></button>
        </Link>
      </div>
    </div>
  );
};

export default CarouselTemplateCard01;
