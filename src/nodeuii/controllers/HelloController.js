import {route, GET} from 'awilix-koa'

@route('/hello')
export default class HelloController {
  constructor ({helloService}) {
    this.helloService = helloService
  }
  @route('/')
  @GET()
  async getUser (ctx) {
    const result = this.helloService.find()
    ctx.body = await ctx.render('hello/pages/index', {data: result})
  }
}