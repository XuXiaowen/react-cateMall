//解析路径,入口只支持绝对路径
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './app/index.js',
    //vendor:['react','react-dom','redux','react-redux','react-router-dom']//第三方库
  },
  output: {
    filename: "bundle.js",
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {test: /\.js/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  devtool: 'source-map',//错误时可以提示源码错误位置
  devServer: {
    proxy: {//使用代理解决跨域问题
      '/api': 'http://localhost:3000'
    }
  }
};
