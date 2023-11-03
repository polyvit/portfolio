import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Banner.module.css';
import {AiFillGithub} from 'react-icons/ai';

const Banner = () => {
  const {banner} = useSelector(state => state.data.person)
  return (
    <div className={styles.banner}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Привет! Это мое резюме
              Junior <span className={styles.span}>Front - End</span> разработчика
            </h1>
            <p></p>
            <a className={`button ${styles.button}`} target="_blank">
              GitHub
              <AiFillGithub/>
            </a>
          </div>
          <div style={{height: "100%"}}> 
            <img src={banner} alt="banner-photo" />
          </div>
        </div>
  )
}

export default Banner