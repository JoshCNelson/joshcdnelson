import React from 'react';

import { Link } from 'react-router-dom';

import './ProjectSidebar.css';

const ProjectSidebar = ({ url }) => {
  return (
    <div className="project-sidebar">
      <h1>List of projects</h1>
      <div>
        <ul>
          <li><Link to={`${url}/plinko`}>PlinkoJS</Link></li>
          <li><Link to={`${url}/ticketing`}>Ticketing</Link></li>
          <li><Link to={`${url}/first-project`}>First Project</Link></li>
          <li><Link to={`${url}/third-project`}>Third Project</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectSidebar;