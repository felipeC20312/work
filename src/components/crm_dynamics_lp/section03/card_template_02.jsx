import React from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section03/card_template_02.module.css'
import images from '../../../images/index'

const CardTemplate02 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <img src={images.crm_dynamics_365_logo} alt="" />
        </div>
        <h1>Cobrança</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus, ut perferendis repellendus accusamus necessitatibus cumque provident facere maiores vel ex dolor ducimus porro earum! Dolores quibusdam laboriosam dolorem sunt.</p>
      </div>
    </div>
  )
}

export default CardTemplate02;