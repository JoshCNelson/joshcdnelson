import React from "react";
import Home from "./Home";
import logo from "./logo.svg";
import Header from "./Header";
import About from "./About";
import Splash from "./Splash";
import Blogs from "./Blogs";
import Projects from "./Projects";
import ProjectsSplash from "./ProjectsSplash";
import "./reset.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/projects">
          <ProjectsSplash />
          <Projects />
        </Route>
        <Route path="/">
          <Splash />
          <About />
        </Route>
      </Switch>
      {/* <div className="content"> */}
      {/* <Switch> */}
      {/* <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blogs />
          </Route> */}
      {/* <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div> */}
    </div>
  );
}

export default App;
