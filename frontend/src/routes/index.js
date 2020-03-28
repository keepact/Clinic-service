import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Form from '../pages/Form';
import Specialties from '../pages/Specialties';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/form" component={Form} />
      <Route path="/specialties" component={Specialties} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
