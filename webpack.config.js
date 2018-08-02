const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  'mode': 'development',
  'entry': './src/index.js',
  'output': {
    'path': path.resolve(__dirname + '/dist'),
    'filename': 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  'module': {
    'rules': [
      {
        'enforce': 'pre',
        'test': /\.(js|jsx)$/,
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
        'test': /\.css$/,
        'use': [
          'style-loader',
          'css-loader',
          {
            'loader': 'postcss-loader',
            'options': {
              'ident': 'postcss',
              'plugins': (loader) => [
                require('postcss-import')(),
                require('postcss-cssnext')(),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          }
        ]
      }
    ]
  },
  'plugins': [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      }
    )
  ]
};