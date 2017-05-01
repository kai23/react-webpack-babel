import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App.js';
import './app.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('maSuperApp'),
  );
};

render(App);

// Permet de répondre à la question :
// Qu'est-ce que je fais lors du Hot Reload ?
if (module.hot) module.hot.accept('./App.js', () => render(App));
