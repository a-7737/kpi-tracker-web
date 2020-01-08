import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import logo from '../../logo.svg';
import Team from '../Team/Team';
import Home from '../Home/Home';
import ManageTeam from '../Team/ManageTeam';

function Routes(props) {
  return (
    <Router>
      <Header logo={logo} history={props.history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Team} /> 
        <Route path="/manageteam/:id" component={ManageTeam} />
        <Route path="/manageteam" component={ManageTeam} />

      </Switch>
    </Router>
  )
}

export default Routes;
