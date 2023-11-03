import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleProject from '../Project/SingleProject';

export const ROUTES = {
  HOME: "/portfolio/",
  PROJECT: '/portfolio/projects/:id',
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Banner/>}/>
      <Route path={ROUTES.PROJECT} element={<SingleProject/>}/>
    </Routes>
  )
}

export default AppRoutes;