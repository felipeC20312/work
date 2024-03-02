import React from 'react';
import * as styles from '../../../styles/crm_dynamics_lp/section02/card_template.module.css';
import { MdArrowForward } from "react-icons/md";

const CardTemplate = ({img, imgPosition, title, description, link, children}) => {

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
        <div className={`${styles.container} ${styles.rigth}`}>
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

export default CardTemplate;