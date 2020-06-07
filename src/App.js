import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Blogs from './Blogs';
import Projects from './Projects';
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
            <Blogs />
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

export default App;