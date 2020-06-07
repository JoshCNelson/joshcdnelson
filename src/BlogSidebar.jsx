import React from 'react';

import { Link } from 'react-router-dom';

import './BlogSidebar.css';

const BlogSidebar = ({ url }) => {
  return (
    <div className="blog-sidebar">
      <h1>List of blogs</h1>
      <div>
        <ul>
          <li><Link to={`${url}/first-blog`}>First Blog</Link></li>
          <li><Link to={`${url}/second-blog`}>Second Blog</Link></li>
          <li><Link to={`${url}/third-blog`}>Third Blog</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default BlogSidebar;