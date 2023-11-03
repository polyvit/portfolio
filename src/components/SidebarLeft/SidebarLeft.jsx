import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SidebarLeft.module.css';
import {FiDownload} from 'react-icons/fi';
import Media from './Media';
import Languages from './Languages';
import Skills from './Skills';
import { getAge } from '../../utils/common';

const SidebarLeft = () => {
  const {
    avatar, 
    name, 
    role,
    media,
    country,
    birthday,
    languages,
    skills,
    cv
  } = useSelector((state) => state.data.person);

  return (
      <div className={styles.sidebar}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <div className={styles.desc}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
        <Media list={media}/>
        <div className={styles.info}>
          <div className={styles.info_item}>
              <div className={styles.cont}>
                <div className={styles.left}>Страна:</div>
              </div>
              <div className={styles.right}>{country}</div>
          </div>
          <div className={styles.info_item}>
              <div className={styles.cont}>
                <div className={styles.left}>Возраст:</div>
              </div>
              <div className={styles.right}>{getAge(birthday)}</div>
          </div>
        </div>
        <Languages list={languages}/>
        <Skills title="Навыки" list={skills}/>
        <a href={cv} className="button m-center">
          СКАЧАТЬ CV
          <FiDownload height="12px" width="12px"/>
        </a>
      </div>
  )
}

export default SidebarLeft