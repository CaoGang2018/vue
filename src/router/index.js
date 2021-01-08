import Vue from 'vue'
import Router from 'vue-router'
import StoryPage from '@/views/Story'
import BlogPage from '@/views/Blog'
import HomePage from '@/views/home'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/story',
		name: 'story',
		component:StoryPage
	},
	{
		path: '/blog',
		name: 'blog',
		component:BlogPage
	}
  ]
});
