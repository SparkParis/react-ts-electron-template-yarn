const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prodConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index']
    })
  ]
}

module.exports = webpackMerge.merge(baseConfig, prodConfig)
