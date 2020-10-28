import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navigation">
        <h1>
          <Link to="/">JOSH NELSON</Link>
        </h1>
        <div className="links">
          <ul>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/190792471@N07/albums">
                PHOTOS
              </a>
            </li>
            <li>
              <a href="./resume.pdf" target="_blank">
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
