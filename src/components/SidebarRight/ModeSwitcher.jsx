import React, { useState, useEffect } from 'react';
import styles from './SidebarRight.module.css';
import {WiMoonAltWaningGibbous6} from 'react-icons/wi';
import {GoSun} from 'react-icons/go';

const ModeSwitcher = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.settings} onClick={toggleTheme}>
      {theme === 'light' ? <WiMoonAltWaningGibbous6/> : <GoSun style={{fill: 'white'}}/>}
    </div>
  )
}

export default ModeSwitcher