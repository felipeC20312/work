import React from "react";
import * as styles from "../../../styles/whatsapp/whatsapp_card/whatsapp_card.module.css";

const WhatsAppCard = ({ link, img, title, description }) => {
  return (
    <a href={link} className={styles.container}>
      <div className={styles.img_container}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text_container}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default WhatsAppCard;
