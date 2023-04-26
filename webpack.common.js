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
  entry: './src/app.js',
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
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', 'jsx', 'json'],
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
    // new Dotenv({
    //   path: `./${process.env.NODE_ENV === 'test' ? '.env.test' : '.env'}`, // load this now instead of the ones in '.env'
    //   safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    //   allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    //   systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    //   silent: true, // hide any errors
    //   defaults: false, // load '.env.defaults' as the default values if empty.
    //   prefix: 'process.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
    // }),
  ],
};
