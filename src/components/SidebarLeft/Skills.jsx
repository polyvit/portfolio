import React from 'react';
import styles from './SidebarLeft.module.css';

const Skills = ({title, list}) => {
  return (
    <>
      <h3 className="base-title mb-10">{title}:</h3>
      <div>
        {list.map((skill, i) => (
            <div className={styles.skillgroup} key={skill}>
             <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="skill">
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400"/>
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400"/>
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400"/>
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400"/>
              </svg>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills