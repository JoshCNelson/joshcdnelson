import React from 'react';
import { useParams } from 'react-router-dom';
import FirstProject from './Projects/FirstProject';
import Plinko from './Projects/Plinko';

import './Project.css';

const Project = () => {
  let { projectId } = useParams();

  const renderedProject = () => {
    if (projectId === 'first-project') {
      return <FirstProject />
    } else if (projectId === 'plinko') {
      return <Plinko />
    }

    return 'nothing here :((((';
  }

  return (
    <div className="project">
      {renderedProject()}
    </div>
  );
}

export default Project;