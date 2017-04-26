const webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'index.bundle.js'
    },
    module: {
      rules: [
        {
          test: /(.js$|.jsx$)/,
          exclude: /(node_modules|bower_components)/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader'},
            { loader: 'css-loader' }
          ]
        },
        {
          test: /.(png|jpg|svg)$/,
          exclude: /node_modules/,
          use: { loader: 'url-loader?limit=8192' }
        }
      ]
    }
};
