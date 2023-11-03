import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import {RotatingLines} from  'react-loader-spinner';

const SingleProject = () => {
  const {id} = useParams()
  const project = useSelector(state => state.data.projects[Number(id)])

  window.scroll({top: 0, left: 0, behavior: 'smooth'})

  return (
    <>
      {project ? <ProjectDetails {...project}/> : <div style={{width: "max-content", margin: "100px auto"}}><RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        /></div>}
    </>
  )
}

export default SingleProject