import React from 'react'
import AppRoutes from '../Routes'
import Projects from '../Projects/Projects'
import data from '../../data.json'

const Home = () => {
  return (
    <div className='home'>
      <AppRoutes/>
      <Projects/>
    </div>
  )
}

export default Home