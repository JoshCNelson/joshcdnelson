import React from 'react';
import Blog from './Blog';
import BlogSidebar from './BlogSidebar';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import './Blogs.css';

const Blogs = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="blogs-container">
      <BlogSidebar url={url} />
      <div className="blogs">

        <Switch>
          <Route path={`${path}/:blogId`}>
            <Blog />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Blogs;