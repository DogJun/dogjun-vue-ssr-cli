import {route, GET} from 'awilix-koa'
import { createBundlerRenderer } from 'vue-server-renderer'
const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
@route('/')
@route('/test')
@route('/about')
@route('/topics')
export default class IndexController {
  constructor ({indexService}) {
    this.indexService = indexService
    this.metaDictionaries = {
      "index": {
        title: 'DogJun',
        meta: '<meta name="keywords" content="ssr">'
      }
    }
  }
  createRenderer (serverbundle, template, clientManifest) {
    return createBundleRenderer(serverbundle, {
      cache: LRU({
        max: 10000
      }),
      runInNewContext: false,
      template,
      clientManifest
    })
  }
  @GET()
  async getIndex (ctx) {
    const rootPath = path.join(__dirname, '..')
    const serverBundle = require('../assets/vue-ssr-server-bundle.json')
    const clientManifest = require('../assets/vue-ssr-client-manifest.json')
    const template = fs.readFileSync(rootPath + '/assets/index.html', 'utf-8')
    const context = { url: ctx.url }
    const ssrrender = this.createRenderer(serverBundle)

    function createSsrStreamPromise () {
      return new Promise((resolve, reject) => {
        if (!ssrrender) {
          return ctx.body = 'waiting for compilation.. refresh in a moment.'
        }
        const ssrStream = ssrrender.renderToStream(context)
        ctx.status = 200
        ctx.type = 'html'
        ssrStream.on('error', err => {
          reject(arr)
        }).pipe(ctx.res)
      })
    }
    await createSsrStreamPromise(context)
  }
}