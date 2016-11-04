'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.bundle.js',
      minChunks: 2
    })
  ]
}
