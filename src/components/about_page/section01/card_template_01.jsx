import React from 'react';
import * as styles from '../../../styles/about_page/section01/card_model01.module.css';

const CardTemplatel01 = ({img, imgPosition, children}) => {

  return (
    <div>
      {imgPosition === 'left'
      ?
      <>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
          <div className={`${styles.textContent} ${styles.whitChildren}`}>
            {children}
          </div>
        </div>
      </>
      : 
      <>
        <div className={styles.container}>
          <div className={`${styles.textContent} ${styles.whitChildren}`}>
            {children}
          </div>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default CardTemplatel01;