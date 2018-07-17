import {route, GET} from 'awilix-koa'

@route('/user')
export default class UserController {
  constructor ({userService}) {
    this.userService = userService
  }
  @route('/:id')
  @GET()
  async getUser (ctx) {
    const result = await this.userService.getData(ctx.params.id)
    ctx.body = await ctx.render('user/pages/index', {data: result})
  }
}