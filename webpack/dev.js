const path = require('path');

const config = {
  entry: path.resolve(__dirname, '..', 'app', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  // Toutes les options servant au webpack-dev-server. Toutes les
  // clefs sont dispos ici : https://webpack.js.org/configuration/dev-server/
  devServer: {
    publicPath: '/dist/',
    compress: true,
    port: 8080,
  },
};


module.exports = config;
