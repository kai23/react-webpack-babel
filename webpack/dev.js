const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: path.resolve(__dirname, '..', 'app', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      /*
        Ce plugin permet de récupérer tous les fichiers css
        qui sont require, de les concaténer dans un fichier
        puis de le placer dans le dossier de destination (output)

        On utilisera le css-loader pour convertir nos CSS
        en resources "exportables"
      */
      { test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader'),
      },
    ],
  },

  // Toutes les options servant au webpack-dev-server. Toutes les
  // clefs sont dispos ici : https://webpack.js.org/configuration/dev-server/
  devServer: {
    publicPath: '/dist/',
    compress: true,
    port: 8080,
  },


  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
};


module.exports = config;
