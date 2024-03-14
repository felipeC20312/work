import React from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section03/card_template_02.module.css'

const CardTemplate02 = ({ img, title, description}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <img src={img} alt="" />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardTemplate02;