const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  'mode': 'development',
  'entry': [
    'babel-polyfill',
    './src/index.js'
  ],
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': '[name].[chunkhash:8].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  'module': {
    'rules': [
      {
        'enforce': 'pre',
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': 'eslint-loader'
      },
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': [
              'env'
            ]
          }
        }
      },
      {
        'test': /\.(css|scss)$/,
        'use': [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            'loader': 'postcss-loader',
            'options': {
              'ident': 'postcss',
              'plugins': (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-cssnext')(),
                require('cssnano')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  'plugins': [
    new CleanWebpackPlugin(
      ['dist']
    ),
    new MiniCssExtractPlugin({
      'filename': '[name].[chunkhash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: !devMode
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      }
    )
  ]
};