import React from 'react';
import * as styles from '../../styles/section02/card_model01.module.css';
import { MdArrowForward } from "react-icons/md";

const CardTemplatel01 = ({img, imgPosition, title, description, link, children}) => {

  return (
    <div>
      {imgPosition === 'left'
      ?
      <>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
          <div className={children ? `${styles.textContent} ${styles.whitChildren}` : `${styles.textContent} ${styles.whitoutChildren}`}>
            <h1 className={styles.title}>{title}</h1>
            {children
            ? <>{children}</>
            : <p className={styles.description}>{description}</p>
            }
            <a href={link}>Solicitar consultoria<MdArrowForward size='20px' color="#FF7A00" style={{ marginLeft: '8px' }} /></a>
          </div>
        </div>
      </>
      : 
      <>
        <div className={styles.container}>
          <div className={children ? `${styles.textContent} ${styles.whitChildren}` : `${styles.textContent} ${styles.whitoutChildren}`}>
            <h1 className={styles.title}>{title}</h1>
            {children
            ? <>{children}</>
            : <p className={styles.description}>{description}</p>
            }
            <a href={link}>Solicitar consultoria <MdArrowForward size='20px' color="#FF7A00"  style={{ marginLeft: '8px' }} /></a>
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