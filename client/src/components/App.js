import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Form from './Form';
import UserListContainer from '../containers/UserListContainer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/register" component={Form} />
      <Route path="/user-list" component={UserListContainer} />
    </Switch>
  </Router>
);

export default App;
