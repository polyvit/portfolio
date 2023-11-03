import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarRight.module.css';

import {BiSolidHome} from 'react-icons/bi';
import {BsFileEarmarkCodeFill} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import ModeSwitcher from './ModeSwitcher';
import { ROUTES } from '../Routes';

const SidebarRight = () => {
  const location = useLocation();

  const scrollHandle = (e) => {
    e.preventDefault();
    const elem = document.querySelector('.projects-section')
    elem.scrollIntoView({behavior: "smooth", block: "start"})
  }

  return (
    <div className={styles.sidebar}>
        <div className={styles.icons}>
          <ModeSwitcher/>
          <div className={styles.menu}>
            <div className={`${styles.link} ${location.pathname === ROUTES.HOME ? styles.active : ''}`}>
              <Link to={ROUTES.HOME}>
                <BiSolidHome/>
              </Link>
            </div>
            <div className={styles.link}>
              <a onClick={(e) => scrollHandle(e)}>
                <BsFileEarmarkCodeFill/>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.menu}>
            <div className={styles.link}>
              <AiOutlineArrowUp onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SidebarRight