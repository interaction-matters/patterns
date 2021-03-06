var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './epo/app.jsx' // Appʼs entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'epo'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.scss?$/,
      exclude: /node_modules/,
      loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, 'node_modules')
    }, { 
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
      loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
    }, {
      test: /\.json$/, 
      loader: 'json-loader'
    }
    ]
  },
  devServer: {
      contentBase: "./public",
      noInfo: true, //  --no-info option
      hot: true,
      inline: true
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
