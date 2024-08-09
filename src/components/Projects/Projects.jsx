import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Projects.module.css';
import Card from './Card';
import { structureProjectsData } from '../../utils/common';

const Projects = () => {
  const projects = useSelector(state => structureProjectsData(state.data.projects));
  const filteredProjects = [...projects].sort((a, b) => Number(b.year) - Number(a.year))
  
  return (
    <div className='projects-section'>
          <div className="section-title">
            <h2 className="h2-title">Мои проекты</h2>
          </div>
          <div className={styles.projects}>
            {filteredProjects.map(pr => (
              <Card key={pr.id} {...pr}/>
            ))}
          </div>
        </div>
  )
}

export default Projects