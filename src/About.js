import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { IconContext } from "react-icons";

import "./About.css";

const About = () => {
  return (
    <div className="content">
      <div className="about-me">
        <h3>About me</h3>
        <p>
          Josh Nelson loves programming, writing, 3d printing, exploring
          National Parks, and walking his dog. He has a work and educational
          background in marketing, healthcare, and education and loves building
          practical software solutions to meet real needs. He also enjoys{" "}
          <a href="http://www.plinkojs.com">
            building challenging side-projects
          </a>{" "}
          and sharing that information in talks and{" "}
          <a href="http://www.plinkojs.com/about">writeups</a>. For more info,
          check out his <a href="#">resume</a>,{" "}
          <a href="www.joshcdnelson.com/projects">projects</a>, and{" "}
          <a href="#">photos</a>.
        </p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/joshcdnelson/">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div className="icon">
                    <FaLinkedin size="2.1em" />
                    <span>LinkedIn</span>
                  </div>
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="https://github.com/JoshCNelson">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div className="icon">
                    <FaGithubSquare size="2.1em" />
                    <span>Github</span>
                  </div>
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="mailto:joshcdnelson@gmail.com">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div className="icon">
                    <MdEmail size="2.1em" />
                    <span>Email</span>
                  </div>
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="./resume.pdf" target="_blank">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <div className="icon">
                    <TiDocumentText size="2.1em" />
                    <span>Resume</span>
                  </div>
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
