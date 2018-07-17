import {route, GET} from 'awilix-koa'

@route('/index')
export default class IndexController {
  constructor () {
  }
  @route('/test')
  @GET()
  async getData (ctx) {
    ctx.body = {
        data: 'hello test'
    }
  }
}