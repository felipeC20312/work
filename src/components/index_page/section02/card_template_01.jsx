import React from "react";
import * as styles from "../../../styles/index_page/section02/card_model01.module.css";
import * as linkStyles from "../../../styles/scroller.module.css";
import { MdArrowForward } from "react-icons/md";
import { Link } from "gatsby";

const CardTemplatel01 = ({
  img,
  img2,
  imgPosition,
  title,
  description,
  link,
  children,
}) => {
  return (
    <div>
      {imgPosition === "left" ? (
        <>
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img src={img} alt="" />
            </div>
            <div
              className={
                children
                  ? `${styles.textContent} ${styles.whitChildren}`
                  : `${styles.textContent} ${styles.whitoutChildren}`
              }
            >
              <h1 className={styles.title}>{title}</h1>
              {children ? (
                <>{children}</>
              ) : (
                <p className={styles.description}>{description}</p>
              )}
              <Link to={link} className={linkStyles.anchor_link}>
                Solicitar consultoria
                <MdArrowForward
                  size="20px"
                  color="#FF7A00"
                  style={{ marginLeft: "8px" }}
                />
              </Link>
              {img2 ? (
                <img src={img2} alt="" className={styles.img2}></img>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.container} ${styles.rigth}`}>
            <div
              className={
                children
                  ? `${styles.textContent} ${styles.whitChildren}`
                  : `${styles.textContent} ${styles.whitoutChildren}`
              }
            >
              <h1 className={styles.title}>{title}</h1>
              {children ? (
                <>{children}</>
              ) : (
                <p className={styles.description}>{description}</p>
              )}
              <Link to={link} className={linkStyles.anchor_link}>
                Solicitar consultoria
                <MdArrowForward
                  size="20px"
                  color="#FF7A00"
                  style={{ marginLeft: "8px" }}
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <img src={img} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardTemplatel01;
