/* eslint-disable */
/**
 * @fileOverview 实现Index数据模型
 * @author DogJun
 */

/**
 * IndexModel类，获取数据
 * @class
 */
export default class UserService {
  /**
   * @constructor
   * @param {string} app koa2的上下文环境
   */
  constructor(app){}
  /**
   * @description 获取具体的API数据接口
   * @returns {Promise} 返回的异步处理结果
   * @example
   * getData()
   */
  getData (id) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(`获取路由参数id：${id}`)
      }, 1000)
    })
  }
}
