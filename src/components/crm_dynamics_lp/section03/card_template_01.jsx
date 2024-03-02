import React, { useState } from "react";
import * as styles from "../../../styles/crm_dynamics_lp/section03/card_template_01.module.css";

import { MdArrowForwardIos } from "react-icons/md";

const CardTemplate01 = ({img, title}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.accordion}>
        <div className={styles.accordion_panel}>
          <button className={styles.accordion_trigger} onClick={handleToggle}>
            <div className={styles.img_container}>
              <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <MdArrowForwardIos />
          </button>
          <div
            className={
              isCardOpen
                ? `${styles.accordion_content} ${styles.accordion_content_open}`
                : `${styles.accordion_content} ${styles.accordion_content_close}`
            }
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos eveniet natus quas eligendi nobis! Fuga adipisci quae delectus, mollitia magnam omnis error iusto rerum voluptate unde ipsa quas officia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate01;
