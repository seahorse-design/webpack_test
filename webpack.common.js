const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/app.js',
    another: './src/js/another.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
        },
        vendorsModules: {
          test: /src[\\/]js[\\/]modules/,
          name: 'vendor-modules',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre', //preが指定されていないloaderよりも早く処理がされる：babelloaderで変換される前のコードを検証
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix:true,  //一部のエラーを自動で修正される
        },
      },
      {
        test: /\.js$/, //処理対象になるファイル
        exclude: /node_modules/, //除外したいファイル
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'another.html',
      template: './src/html/another.html',
      chunks: ['another'],
    }),
  ],
};
