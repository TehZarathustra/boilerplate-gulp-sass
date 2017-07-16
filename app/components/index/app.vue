<template>
	<div id="app">
		<img v-bind:src='logoImg'>
		<h1>{{ msg }}</h1>
		<button v-on:click='start'>does it work?</button>
	</div>
</template>

<script>
import logo from './outdated-browser.png'
export default {
	data () {
		return {
			msg: 'Hello world',
			logoImg: logo
		}
	},
	methods: {
		start () {
			alert('it does');
		}
	}
}
</script>

<style scoped lang="sass">
	#app
		width: 800px
		margin: 20px auto
		text-align: center
	button
		padding: 10px
		border-radius: 2px
		background: #fff
		cursor: pointer
		border: none
</style>
