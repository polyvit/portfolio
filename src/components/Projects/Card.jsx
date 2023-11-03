import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Card = ({id, images, title, short}) => {
  return (
    <div className={styles.card}>
      <div>
        <img width="100%" height="100%" src={images[0]} alt="" />
      </div>
      <div className={styles.info}>
        <div style={{marginBottom: "10px"}}>
          <h3 className="base-title">{title}</h3>
          <p>
            {short}
          </p>
        </div>
        <Link to={`/projects/${id}`} className={styles.link}>Подробнее</Link>
      </div>
    </div>
  )
}

export default Card