import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Projects.module.css';
import Card from './Card';

const Projects = () => {
  const projects = useSelector(state => state.data.projects);
  
  return (
    <div className='projects-section'>
          <div className="section-title">
            <h2 className="h2-title">Мои проекты</h2>
          </div>
          <div className={styles.projects}>
            {projects.map((pr, i) => (
              <Card key={i} id={i} {...pr}/>
            ))}
          </div>
        </div>
  )
}

export default Projects