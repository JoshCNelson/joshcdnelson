import React, { Fragment } from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <ul>
          <li>
            <div className="project">
              <div className="project-image">
                <figure>
                  <img
                    src="https://media.giphy.com/media/1rRkqtfEgsK57mgN52/giphy.gif"
                    alt="Plinko Gameplay"
                  />
                </figure>
              </div>

              <div className="project-description">
                <h3>
                  <a href="http://www.plinkojs.com">PlinkoJS</a>
                </h3>
                <p>
                  PlinkoJS is a real-time, multiplayer browser game built with
                  Node, React, and WebSockets. Features a client-server
                  architecture to synchronize game state generated across the
                  internet to multiple clients, all in real time. Check out the
                  case study to learn more about the challenging process of
                  creating a real-time, interactive application.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="project">
              <div className="project-image">
                <figure>
                  <img src="./micro-tix.png" alt="MicroTix" />
                </figure>
              </div>

              <div className="project-description">
                <h3>
                  <a href="https://github.com/JoshCNelson/ticketing-microservices">
                    MicroTix
                  </a>
                </h3>
                <p>
                  MicroTix is an app for reserving and purchasing event tickets.
                  Built as a microservices architecture using Docker,
                  Kubernetes, NATS Streaming Server, Typescript, Node, Redis,
                  and MongoDB.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="project">
              <div className="project-image">
                <figure>
                  <img
                    src="https://media.giphy.com/media/Ib0cmvAy92jpZEJdZJ/source.gif"
                    alt="Plinko Gameplay"
                  />
                </figure>
              </div>

              <div className="project-description">
                <h3>
                  <a href="https://rk-reaction.herokuapp.com/">Reaction</a>
                </h3>
                <p>
                  Reaction is a clone of the popular Trello project management
                  productivity app. Designed using React, Redux, Rails, and
                  PostgreSQL.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
