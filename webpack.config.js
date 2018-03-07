var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV;

var config = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,  //排除在外
      include: __dirname,       //包含;
      loader: 'babel'  //es6语法;
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

if (env === 'production') {
  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  );
}

module.exports = config;


