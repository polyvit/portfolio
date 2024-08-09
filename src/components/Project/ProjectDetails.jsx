import React, {useState, useEffect} from 'react'
import styles from './Details.module.css';
import Skills from '../SidebarLeft/Skills';

const ProjectDetails = ({title, description, images, year, stack, demo, repo, plans = []}) => {
  const [currentImage, setCurrentImage] = useState()

  useEffect(() => {
    if (!images?.length) return;
    setCurrentImage(images[0])
  }, [images])

  return (
    <div className={`${styles.project} mb-50`}>
          <div className={styles.images}> 
            <img src={currentImage} alt="" className={styles.current}/>
            <div className={styles.images_list}>
              {images && images.map((image, i) => (
                <div key={i}  onClick={() => setCurrentImage(image)}>
                  <img src={image} alt=""className={styles.image}/>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.main}>
            <h3 className="h2-title">{title}</h3>
            <div className={styles.year}>{year}</div>
            {stack && <Skills title='Использовалось' list={stack}/>}
            <p>
              {description}
            </p>
            {plans.length > 0 && (
              <>
                Будет реализовано:
                <ul>
                  {plans && plans.map((plan, i) => <li key={i}>{plan}</li>)}
                </ul>
              </>
            )} 
            <div className={styles.buttons}>
              {demo !== "/" ? <a href={demo} className="button" target="_blank">Демоверсия</a>: null}
              {repo !== "/" ? <a href={repo} className={`button ${styles.github}`} target="_blank">GitHub</a>: null}
            </div>
          </div>
        </div>
  )
}

export default ProjectDetails

