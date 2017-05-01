const path = require('path');
const webpack = require('webpack');

const DEV_PORT = 8080;

const config = {
  entry: [
    'react-hot-loader/patch',
    // active le HMR pour react

    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    // connecte à webpack-dev-server

    'webpack/hot/only-dev-server',
    // ajoute le HMR
    // only- permet le hot reload que sur les builds qui sont réussies

    path.resolve(__dirname, '..', 'app', 'index.js'),
    // Le point d'entrée de notre app
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/', // Obligatoire pour que le HMR sache où chercher les chunks mis à jour
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      /*
        - style-loader va permettre de mettre une balise "style" en haut
        de notre app. C'est compatible avec le HMR, c'est pourquoi on le préfère en dev.
        - css-loader va transformer les "import" et "url()" en require/import pour webpack.
        Pratique pour faire des imports sass-style (comme dans app.css)
      */
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Toutes les options servant au webpack-dev-server. Toutes les
  // clefs sont dispos ici : https://webpack.js.org/configuration/dev-server/
  devServer: {
    hot: true,
    publicPath: '/dist/',
    port: DEV_PORT,
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Affiche des noms de modules plus compréhensibles dans la console du navigateur
    // Pratique pour le HMR
    new webpack.NamedModulesPlugin(),
  ],
};


module.exports = config;
