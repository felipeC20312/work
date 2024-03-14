import React from "react";
import * as styles from "../../styles/whatsapp/whatsapp.module.css";
import images from "../../images";
import { Link } from "gatsby";

const WhatsapWidget = () => {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.button} to='https://api.whatsapp.com/send?phone=5562996902273&text=Ol%C3%A1%20Vize%20Solutions' target="_blank">
          <img src={images.whatsapp} alt="" />
        </Link>
      </div>
    </>
  );
};

export default WhatsapWidget;
