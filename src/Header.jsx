import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header>
      <div className="navigation">
        <h1><Link to="/">Josh Nelson</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social">
        <ul>
          <li>Email Josh</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
