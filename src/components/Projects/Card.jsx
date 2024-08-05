import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import LazyImage from '../Image/LazyImage';

const Card = ({id, images, title, short}) => {
  return (
    <div className={styles.card}>
      <LazyImage src={images[0]} id={id}/>
      <div className={styles.info}>
        <div style={{marginBottom: "10px"}}>
          <h3 className="base-title">{title}</h3>
          <p>
            {short}
          </p>
        </div>
        <Link to={`/portfolio/projects/${id}`} className={styles.link}>Подробнее</Link>
      </div>
    </div>
  )
}

export default Card