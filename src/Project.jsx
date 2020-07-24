import React from 'react';
import { useParams } from 'react-router-dom';
import FirstProject from './Projects/FirstProject';
import Plinko from './Projects/Plinko';
import Reaction from './Projects/Reaction';
import Ticketing from './Projects/Ticketing';

import './Project.css';

const Project = () => {
  let { projectId } = useParams();

  const renderedProject = () => {
    if (projectId === 'first-project') {
      return <FirstProject />
    } else if (projectId === 'plinko') {
      return <Plinko />
    } else if (projectId === 'reaction') {
      return <Reaction />
    } else if (projectId === 'ticketing') {
      return <Ticketing />
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