// 将访问的路径给到 vue-router
import createApp from './app.js'

// 暴露 express 使用
export default context => {
	return new Promise((resolve, reject) => {
		let { app, router } = createApp(context)
		router.push(context.url)
		router.onReady(() => {
			// 对访问路路径做处理
			let matchedComponents = router.getMatchedComponents()
			if(!matchedComponents){
				return reject({code: 404})
			}
			resolve(app)
		})
	})
}