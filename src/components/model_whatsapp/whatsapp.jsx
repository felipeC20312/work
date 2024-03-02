import React, { useState } from "react";
import * as styles from "../../styles/whatsapp/whatsapp.module.css";
import images from "../../images";
import WhatsAppCard from "./whatsapp_card/whatsapp_card";

const WhatsapWidget = () => {
  const [transform, setTranform] = useState();

  const handdleTransform = () => {
    setTranform(!transform);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={handdleTransform}>
          <img src={images.whatsapp} alt="" />
        </button>
        <div className={styles.accordion}>
          <div className={styles.accordion_panel}>
            <div
              className={
                transform
                  ? `${styles.accordion_content} ${styles.accordion_content_open}`
                  : `${styles.accordion_content} ${styles.accordion_content_close}`
              }
            >
              <div>
                <WhatsAppCard
                  link={'https://www.youtube.com/?bp=wgUCEAE%3D'}
                  img={'https://imgs.search.brave.com/fL2ympGnFQZv3t2lxmFLfoF1Dorf89wgmz8lIwobE6M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc'}
                  title={'Title 01'}
                  description={'description'}
                />
                <br />
                <WhatsAppCard
                  link={'https://www.youtube.com/?bp=wgUCEAE%3D'}
                  img={'https://imgs.search.brave.com/fL2ympGnFQZv3t2lxmFLfoF1Dorf89wgmz8lIwobE6M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc'}
                  title={'Title 01'}
                  description={'description'}
                />
                <br />
                <WhatsAppCard
                  link={'https://www.youtube.com/?bp=wgUCEAE%3D'}
                  img={'https://imgs.search.brave.com/fL2ympGnFQZv3t2lxmFLfoF1Dorf89wgmz8lIwobE6M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc'}
                  title={'Title 01'}
                  description={'description'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsapWidget;
