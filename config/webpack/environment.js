const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
const { join } = require('path')

environment.plugins.append(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  })
)

environment.plugins.append(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
)
environment.loaders.append(
  'babel',
  {
    test: /\.(js|jsx)?(\.erb)?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
        babelrc: false,
        plugins: [
          ['import', {
            libraryName: 'antd',
            style: 'css'
          }],
          'transform-decorators-legacy',
          "syntax-dynamic-import",
          "transform-object-rest-spread",
          [
              "transform-class-properties",
              {
              "spec": true
              }
          ]
        ],
        cacheDirectory: join('tmp/cache', 'babel-loader')
      }
    }]
  }
)
// environment.resolvedModules.append('vendor', 'vendor')
// console.log(environment.resolvedModules)
module.exports = environment
