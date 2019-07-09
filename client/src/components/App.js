import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import FormContainer from '../containers/FormContainer';
import UserListContainer from '../containers/UserListContainer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/register" component={FormContainer} />
      <Route path="/user-list" component={UserListContainer} />
    </Switch>
  </Router>
);

export default App;
