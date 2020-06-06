import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Blog from './Blog';
import './reset.css';
import './App.css';

import {
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

export default App;
