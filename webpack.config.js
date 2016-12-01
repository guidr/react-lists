var webpack = require('webpack');
var path = require('path');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  // devtool: 'eval',
  debug: true,
  devtool: "#eval-source-map",
  entry: [
    // 'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData)
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['react-hot', 'babel']
        // query: {
        //   presets: ['es2015' ,"react", "stage-0"]
        // },
        // loader : 'babel'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
          test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader : 'file-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  // devServer : {
  //   progress : true,
  //   port : 3000,
  //   contentBase : path.resolve(__dirname, 'src/client'),
  //   historyApiFallback : true
  // }
};

module.exports = config;
