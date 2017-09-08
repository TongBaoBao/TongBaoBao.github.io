const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractCSSFromVue = new ExtractTextPlugin('styles.css')
const extractCSSFromSASS = new ExtractTextPlugin('index.css')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue',
      options: {
        preserveWhitespace: false,
        postcss: [
        require('autoprefixer')({
          browsers: ['last 3 versions']
        })
        ],
        loaders: {
          sass: extractCSSFromVue.extract({
            loader: 'css!sass!less',
            fallbackLoader: 'vue-style-loader'
          })
        }
      }
    },
    {
      test: /\.less$/,
      loader: extractCSSFromSASS.extract(['css', 'less'])
    },
    {
      test: /\.scss$/,
      loader: extractCSSFromSASS.extract(['css', 'sass'])
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file',
      options: {
        name: '[name].[ext]?[hash]'
      }
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  plugins: [
  extractCSSFromVue,
  extractCSSFromSASS,
  new CopyWebpackPlugin([
    {from: './src/assets', to: './'}
    ])
  ],
  resolve: {
    alias: {
      filter: path.join(__dirname, './src/filters'),
      components: path.join(__dirname, './src/components'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/'
      }
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
    ])
}
