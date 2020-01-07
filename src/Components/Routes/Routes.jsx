import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import logo from '../../logo.svg';
import Team from '../Team/Team';
import Home from '../Home/Home';

function Routes(props) {
  return (
    <Router>
      <Header logo={logo} history={props.history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Team} />
      </Switch>
    </Router>
  )
}

export default Routes;
