import { createApp } from './main.js'

export default context => {
  return new Promise ((resolve, reject) => {
    const {app, router, store} = createApp
    router.push(context.url)
    router.onReady(() => {
      const matchComponents = router.getMatchedComponents()
      Promise.all(matchComponents.map((Component) => {
        if (Component.asyncData) {
          return Component.asyncData({
            store
          })
        }
      }))
      .then(() => {
        context.state = store.state
        resolve(app)
      })
      .catch(reject)
    }, reject)
  })
}