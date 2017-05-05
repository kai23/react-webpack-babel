import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../app/reducers';
import App from '../app/App';

const app = Express();
const port = 8080;

// Permet de servir des fichiers statiques
app.use('/dist', Express.static('dist'));

// C'est appelé à chaque page côté serveur

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link href="/dist/all.css" rel="stylesheet"></head>
      </head>
      <body>
        <div id="maSuperApp">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
    `;
}
function handleRender(req, res) {
  const store = createStore(reducers);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // Récupère le state initial de notre store
  const preloadedState = store.getState();

  // Envoie la page au client
  res.send(renderFullPage(html, preloadedState));
}

app.use(handleRender);

app.listen(port);
