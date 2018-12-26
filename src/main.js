/* node 环境用 require, webpack 下用 import */ 
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import createRouter from './router'
import http from 'assets/js/api.js'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'assets/css/cover.css'
import { globalData } from 'assets/js/tools.js'

Vue.use(ElementUI)

// import "assets/css/reset.css"


// 全局配置
Vue.prototype.http = http
Vue.prototype.tools = globalData
window.eventBus = new Vue()

// 设置页面 title
Vue.directive('title', {
	inserted: (el, binding) => {
		document.title = el.dataset.title
	}
})


// 请求配置
axios.defaults.baseURL = 'https://miniprogram.sikegroup.com/admin_t/public/index.php/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
	}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
	// console.log(res.data)
	if(res.data.code == '9999'){ // 未登录
		sessionStorage.clear()
		router.push('/signin')
	}
	// 对响应数据做点什么
	return res;
	}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});





new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})