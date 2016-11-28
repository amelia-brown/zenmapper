const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
  },
  devTool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
      },
      {
        test: /\.css$/,
        loader: 'css!style!sass',
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: 'node_modules',
      },
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css',
      '.sass',
      '.png',
      '.jpg',
    ],
    moduleDirectories: [
      'src',
      'node_modules',
    ],
    root: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // TODO: uglify prod build
  ],
}