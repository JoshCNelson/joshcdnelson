import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="me-wrapper">
          <img className="me" src="./josh.jpg" />
        </div>
        <div className="greeting">
          <p>Hello there!</p>
          <p>My name is Josh Nelson</p>
          <p>
            I am a Full Stack Engineer and co-creator of{" "}
            <a href="http://plinkojs.com/about">PlinkoJS</a>, a real-time,
            physics-based browser multiplayer
          </p>
        </div>
      </div>
      <div className="plinko">
        <div className="description">
          <p>PlinkoJS</p>
          <p>PlinkoJS is a real-time, multiplayer browser game.</p>
          <p>
            Read the case study to learn about the challenges of building a
            real-time, interactive application
          </p>
          <p>
            <a className="case-study" href="www.plinkojs.com/about">
              Read Case Study
            </a>
          </p>
        </div>
        <div className="gameplay-wrapper">
          <figure>
            <img
              className="gameplay"
              src="https://media.giphy.com/media/1rRkqtfEgsK57mgN52/giphy.gif"
              alt="Plinko Gameplay"
            />
          </figure>
        </div>
      </div>
      <div className="miscellaneous">
        <div className="other-projects">
          <h3>Other Projects</h3>
          <ul>
            <li>
              <p>
                <a href="https://github.com/JoshCNelson/ticketing-microservices">
                  MicroTix
                </a>
                : A microservices app for buying tickets
              </p>
              <p className="tech">
                <span>Tech</span>: Docker, Kubernetes, NATS, Typescript, Node,
                NextJS, Redis, MongoDB
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/ryannmcq/reaction">Reaction</a>: A
                Trello-clone
              </p>
              <p className="tech">
                <span>Tech</span>: React, Redux, Rails, PostgreSQL
              </p>
            </li>
          </ul>
        </div>
        <div className="technology">
          {/* <ul>
            <li>some tech</li>
            <li>some tech</li>
            <li>some tech</li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Home;
