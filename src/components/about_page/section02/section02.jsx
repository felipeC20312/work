import React from 'react';
import * as styles from '../../../styles/about_page/section02/section02.module.css';
import images from '../../../images/index'

const Section02 = () => {
  return (
    <div className={styles.container}>
      <h1>Onde nos encontrar</h1>
      <p>Av Portugal Qd. 29 LT. 1E S/N , 25 Andar, Sala C2501. Ed Orion Business, Goiânia, GO 74150-030</p>
      <a href="/">
        <div className={styles.imgContainer}>
          <img src={images.map_image} alt="" />
        </div>
      </a>
    </div>
  )
}

export default Section02;