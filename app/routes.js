import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch, // La première route qui match sera affichée
} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import NotFound from './components/NotFound/NotFound.js';
import Counter from './components/Counter/Counter.js';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact/:name" component={Contact} />
      <Route path="/contact" component={Contact} />
      <Route path="/counter" component={Counter} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


export default Routes;
