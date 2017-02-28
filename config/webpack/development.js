// Note: You must restart bin/webpack-watcher for changes to take effect

const webpack = require('webpack')
const merge   = require('webpack-merge')

const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig.config, {
  devtool: 'sourcemap',
  // sass-loader configs
  module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    },
  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
})
