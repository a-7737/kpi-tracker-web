import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import logo from '../../logo.svg';
import Team from '../Team/Team';
import Home from '../Home/Home';

function Routes() {
  return (
    <Router>
      <Header logo={logo} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Team} />
      </Switch>
    </Router>
  )
}

export default Routes;
