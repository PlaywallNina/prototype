// Note: You must restart bin/webpack-watcher for changes to take effect
const path = require('path')
const webpack = require('webpack')
const merge   = require('webpack-merge')

const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig.config, {
  output: { filename: '[name]-[chunkhash].js' },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=10000!img?progressive=true'
    },
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../app/javascript')
    }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
