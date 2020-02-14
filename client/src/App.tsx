import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './pages';
import Funding from './pages/Funding/Funding';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/funding" component={Funding}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
    </Router>
  );
}

export default App;
