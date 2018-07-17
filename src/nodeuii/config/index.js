import _ from 'lodash'
import path from 'path'

let config = {
  "env": process.env.NODE_ENV || 'development', // "development" "production"
  "viewDir": path.join(__dirname, '..', 'views'),
  "staticDir": path.join(__dirname, '..', 'assets'),
  "port": 8080
}

const init = (app) => {
  // 开发环境
  if (process.env.NODE_ENV === 'development') {
    const devConfig = {
      // port: '8080'
    }
    config = _.extend(config, devConfig)
    const webpack = require('webpack');
    const devMiddleware = require('koa-webpack-dev-middleware')
    const hotMiddleware = require('koa-webpack-hot-middleware')
    // const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
    const devWebpackConfig = require('../../webpack.config.js');
    // 本地的开发环境默认就是使用 development mode
    devWebpackConfig.mode = 'development'
    const compiler = webpack(devWebpackConfig)
    app.use(
      devMiddleware(compiler, {
        stats: {
          colors: true,
        },
        // publicPath: devWebpackConfig.output.publicPath
        publicPath: '/assets/'
      })
    )
    app.use(hotMiddleware(compiler))
  }
  // 生产环境
  if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
      port: '8081'
    }
    config = _.extend(config, prodConfig)
  }
  return config
}

export default app => init(app)