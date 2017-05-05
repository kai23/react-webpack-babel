import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Ici, le provider sert à rendre tout
// le store disponible dans tous les containers de l'application
// sans avoir à les passer explicitement
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './App.js';
import './app.scss';

// Récupère le state depuis le SSR
const preloadedState = window.__PRELOADED_STATE__;

// On est propres, et on laisse ça au garbage collector
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('maSuperApp'),
  );
};

render(App);

// Permet de répondre à la question :
// Qu'est-ce que je fais lors du Hot Reload ?
if (module.hot) {
  module.hot.accept('./App.js', () => {
    render(App);
  });
  module.hot.accept('./reducers', () => {
    console.log(store);
    store.replaceReducer(require('./reducers').default);
  });
}
