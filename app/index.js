import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import Home from './Home/Home.js';
import './app.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('maSuperApp'),
  );
};

render(Home);

// Permet de répondre à la question :
// Qu'est-ce que je fais lors du Hot Reload ?
if (module.hot) module.hot.accept('./Home/Home.js', () => render(Home));
