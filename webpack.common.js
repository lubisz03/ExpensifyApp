const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: path.join(__dirname, '.env.test') });
} else {
  require('dotenv').config({ path: path.join(__dirname, '.env') });
}

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', 'jsx', 'json'],
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(
        process.env.REACT_APP_FIREBASE_API_KEY
      ),
      'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
      ),
      'process.env.REACT_APP_FIREBASE_DATABASE_URL': JSON.stringify(
        process.env.REACT_APP_FIREBASE_DATABASE_URL
      ),
      'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_PROJECT_ID
      ),
      'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
      ),
      'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
      ),
      'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_APP_ID
      ),
      'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
      ),
    }),
  ],
};
