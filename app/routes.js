import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch, // La première route qui match sera affichée
} from 'react-router-dom';

import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import NotFound from './NotFound/NotFound.js';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact/:name" component={Contact} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


export default Routes;
