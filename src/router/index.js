import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home.vue'
import Index from 'components/index.vue'
import CourseSystem from 'components/courseSystem.vue'
import TechMode from 'components/techMode.vue'
import About from 'components/about.vue'
import Apply from 'components/apply.vue'

Vue.use(Router)

export default () => {
	return new Router({
		// mode: 'history',
	  routes: [
	    {
	      path: '',
	      redirect: '/index'
	    },
	    {
	    	path: '/home',
	    	component: Home,
	    	children: [
	    		{
	    			path: '',
	      		component: Index
	    		},
	    		{
			    	path: '/index',
			    	component: Index
			    },
			    {
			    	path: '/courseSystem',
			    	component: CourseSystem
			    },
			    {
			    	path: '/techMode',
			    	component: TechMode
			    },
			    {
			    	path: '/about',
			    	component: About
			    }
	    	]
	    },
	    {
	    	path: '/apply',
	    	component: Apply
	    }
	  ]
	})
}

