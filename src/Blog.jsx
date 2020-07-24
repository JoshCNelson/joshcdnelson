import React from 'react';
import { useParams } from 'react-router-dom';

import FirstBlog from './Blogs/FirstBlog/FirstBlog';

import './Blog.css';

const Blog = () => {
  let { blogId } = useParams();

  const renderedBlog = () => {
    if (blogId === 'why-i-started-a-blog') {
      return <FirstBlog />
    }

    return 'nothing here :((((';
  }

  return (
    <div className="blog">
      {renderedBlog()}
    </div>
  );
}

export default Blog;