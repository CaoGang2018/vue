<template>
	<div id="app">
		<HeadPage></HeadPage>
		<router-view></router-view>
	</div>
</template>

<script>
	import HeadPage from './components/main'
	import FootPage from './components/footer'
export default {
  name: 'App',
  components: {
	 HeadPage: HeadPage,
	 foot: FootPage
  }
}
</script>