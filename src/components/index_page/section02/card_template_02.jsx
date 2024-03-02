import React from 'react';
import * as styles from '../../../styles/index_page/section02/card_model02.module.css'
import { MdArrowForward } from "react-icons/md";

const CardTemplatel02 = ({img, title, description, link,}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <a href={link}>Solicitar consultoria <MdArrowForward size='20px' color="#FF7A00" style={{ marginLeft: '15px' }} /></a>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default CardTemplatel02;