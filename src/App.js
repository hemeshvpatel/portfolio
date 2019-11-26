import React from "react";
import HomePage from "./Components/homepage";
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
          <HomePage />
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
