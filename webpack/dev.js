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
};


module.exports = config;
