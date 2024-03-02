import React from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section02/banner_template.module.css'

const BannerTemplate = () => {
  return (
    <div className={styles.card}>
      <h1>
        Confira nossas <br /> conquistas
      </h1>
      <div className={styles.cardContent}>
        <div className={styles.cardTextBox}>
          <h1>+ 2,8 MI</h1>
          <p>Em conversões</p>
        </div>
        <div className={styles.cardTextBox}>
          <h1>+ 170</h1>
          <p>Parceiros</p>
        </div>
        <div className={styles.cardTextBox}>
          <h1>+ 1500</h1>
          <p>Clientes Satisfeitos</p>
        </div>
      </div>
    </div>
  )
}

export default BannerTemplate;