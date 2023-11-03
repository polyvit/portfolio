import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoTelegram} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs';
import styles from './SidebarLeft.module.css';

const Media = ({list}) => {
  return (
    <div className={styles.media}>
            <div className={styles.media_link}>
              <a href={`mailto:${list[0].link}`} target="_blank">
                <AiOutlineMail/>
              </a>
            </div>
            <div className={styles.media_link} target="_blank">
              <a href={list[1].link}>
                <BiLogoTelegram/>
              </a>
            </div>
            <div className={styles.media_link} target="_blank">
              <a href={list[2].link}>
                <BsWhatsapp/>
              </a>
            </div>
        </div>
    
  )
}

export default Media