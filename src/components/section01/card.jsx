import React from 'react';
import * as styles from '../../styles/card.module.css';
import { Link } from 'gatsby';
import { CiSearch } from "react-icons/ci";

const Card = ({logo, title, description, link}) => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src={logo} alt={''}/>
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Link to={link}>
        <button className={styles.button}>
          <CiSearch size='18px' /> Saiba mais
        </button>
      </Link>
    </div>
  )
}

export default Card;