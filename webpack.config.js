const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {

  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed || process.env;
  console.log('env:', env);
  let envKeys = [];
  // reduce it to a nice object, the same as before
  if (typeof Object.keys(env) !== 'undefined' && Object.keys(env).length > 0) {
    envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});
  }

  return {
    entry: './public/ts/index.ts',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/dist'),
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  }
};