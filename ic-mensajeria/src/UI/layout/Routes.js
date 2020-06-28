import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../login/Login';
import Signup from '../../login/Signup';
import Chat from '../../msg/chat';
import Profile from '../../login/Profile';
import Home from '../layout/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/chat" component={Chat} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default Routes;