const serverConf = require('./webpack.server.conf')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path') // 读取硬盘上文件
const Mfs = require('memory-fs') // 读取网络文件
const axios = require('axios')

module.exports = (cb) => {
	const webpackComplier = webpack(serverConf)

	var mfs = new Mfs();
	webpackComplier.outputFileSystem = mfs;
	webpackComplier.watch({}, async (error, stats) => {
		if(error){
			return console.log(error);
		}
		stats = stats.toJson();
		stats.errors.forEach(err => {
			console.log(err);
		})
		stats.warnings.forEach(warning => {
			console.log(warning);
		})

		/* 获取 server Bundle json 文件，直接从文件中读取*/
		let serverBundlePath = path.join(
			serverConf.output.path,
			'vue-ssr-server-bundle.json'
		)
		let serverBundle = JSON.parse(mfs.readFileSync(serverBundlePath, "utf-8"))

		/* 获取 client Bundle json 文件，需要从前端地址中获取 */
		let clientBundle = await axios.get('http://localhost:9125/vue-ssr-client-manifest.json')

		/* 获取模板 */
	  let template = fs.readFileSync(path.join(__dirname, '..', 'index.html'), "utf-8")

	  cb(serverBundle, clientBundle, template)

	})

}



