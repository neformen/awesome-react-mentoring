import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
}
