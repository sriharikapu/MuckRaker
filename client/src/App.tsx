import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './pages';
import Funding from './pages/Funding/Funding';
import Investigation from './pages/Investigation/Investigation';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/funding" component={Funding}></Route>
        <Route exact path="/investigate" component={Investigation}></Route>
      </Switch>
    </Router>
  );
}

export default App;
