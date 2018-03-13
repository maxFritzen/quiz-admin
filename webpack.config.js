const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = {

    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.resolve(__dirname,'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              'postcss-loader',
              'sass-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname,'public'),
      publicPath: '/dist/'
    }
}
