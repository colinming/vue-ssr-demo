// 服务端 webpack 配置
const webpack = require('webpack');
const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')

// 引入服务端 plugin
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin')

// 提剔除 node_modules 文件（只用加载客户端的 node_moduels）
const webpackNodeExternals = require('webpack-node-externals')

module.exports = merge(base, {
	target: 'node',
	devtool: 'source-map',
	entry: './src/entry-server.js',
	output: {
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	},
	// 去除 node_moduels
	externals: webpackNodeExternals(),
	plugins: [ // 漏掉 s ，一直报错
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"devlopment"',
			'process.env.VUE_ENV': '"server"'
		}),
		new vueSSRServerPlugin()
	]
})
