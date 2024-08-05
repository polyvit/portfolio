import React from 'react';
import styles from './SidebarLeft.module.css';

const Languages = ({list}) => {
  return (
    <>
    <h3 className="base-title mb-10">Языки:</h3>
        <div className={styles.languages}>
          {list.map((lan, i) => (
          <div className={styles.group} key={lan.name}>
            <div className={styles.top}>
              <p className={styles.lang_name}>{lan.name}</p>
              <p className={styles.level}>{lan.level}</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.progress} style={{width: `${lan.progress}`}}></div>
            </div>
          </div>
          ))}
        </div>
    </>
  )
}

export default Languages