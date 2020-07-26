import React from 'react';

import './home.css'

const Home = () => {
  return (
    <>
      <div className="intro">
        {/* <img src="https://via.placeholder.com/500" /> */}
        <div className="me-wrapper">
          <img className="me" src="./josh.jpg" />
        </div>
        <div className="greeting">
          <p>Hello there!</p>
          <p>My name is Josh Nelson</p>
          <p>I am a Full Stack Engineer and co-creator of <a href="http://plinkojs.com/about">PlinkoJS</a>, a real-time, physics-based browser multiplayer</p>
        </div>
      </div>
      <div className="plinko">
        <div className="description">
          <p>PlinkoJS</p>
          <p>
            PlinkoJS is a real-time, physics-based, multiplayer browser game.
          </p>
          <p>
            PlinkoJS is a second paragrtaph on it and goes over the other stuff. Should I link the slides.
          </p>
          <p><a className="case-study" href="www.plinkojs.com/about">Read Case Study</a></p>
        </div>
        <div className="gameplay-wrapper">
          <figure>
            <img className="gameplay" src="https://media.giphy.com/media/1rRkqtfEgsK57mgN52/giphy.gif" alt="Plinko Gameplay" />
          </figure>
        </div>
      </div>
      <div className="miscellaneous">
        <div className="other-projects">
          <ul>
            <li>micro-tix: a microservices app for buying tickets</li>
            <li>Reaction: a trello-clone built in Rails and React</li>
          </ul>
        </div>
        <div className="technology">
          <ul>
            <li>some tech</li>
            <li>some tech</li>
            <li>some tech</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home;