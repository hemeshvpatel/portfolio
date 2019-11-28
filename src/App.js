import React from "react";
import AboutMe from "./Components/aboutme";
import MenuBar from "./Components/menubar";
import Resume from "./Components/resume";
import Projects from "./Components/projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
      </div>

      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
