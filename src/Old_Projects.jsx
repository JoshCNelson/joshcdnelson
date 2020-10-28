import React from 'react';
import ProjectSidebar from './ProjectSidebar';
import Project from './Project';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './Projects.css';

const Projects = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="projects-container">
      <ProjectSidebar url={url} />
      <div className="projects">

        <Switch>
          <Route path={`${path}/:projectId`}>
            <Project />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Projects;