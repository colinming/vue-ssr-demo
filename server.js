const devServer = require('./build/dev-server.js')
const express = require('express')
const app = express()
const vueRenderer = require('vue-server-renderer')
const path = require('path')

app.get('*', async (req, res) => {
	res.status(200)
	res.setHeader('Content-Type', 'text/html;charset=utf-8;')

	devServer((serverBundle, clientBundle, template) => {
		let renderer = vueRenderer.createBundleRenderer(serverBundle, {
			template, 
			clientManifest: clientBundle.data,
			runInNewContext: false
		})

		renderer.renderToString({
			url: req.url
		})
		.then(html => {
			res.end(html)
			// console.log(html)
		})
		.catch(err => console.log(err))
	})
})

app.listen(5000, () => {
	console.log('服务启动成功')
})