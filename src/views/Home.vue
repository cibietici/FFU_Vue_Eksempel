<template>
	<h1>{{ title }}</h1>
	<img :src="image">
	<span>{{ name }}</span>
	<button v-on:click="fetchNew">Get new</button>
</template>

<script>

export default {
	name: 'home',
	data() {
		return {
			title: 'Random user',
			name: '',
			email: '',
			image: ''
		}
	},
	created() {
		this.fetchNew();
	},

	methods: {
		async fetchNew() {
			const url = 'https://randomuser.me/api/';
			const res = await fetch(url);
			const { results }   = await res.json();
			console.log(results);
			this.name = `${results[0].name.first} ${results[0].name.last}`;
			this.image = results[0].picture.large
		}
	}
}
</script>

<style scoped>
button {
 padding: 20px;
 background-color: bisque;
 border-radius: 5px;
}
span {
	font-size: 42px;
}
img {
	width: 280px;
	border-radius: 50%;
	border: 3px solid #000;
}
</style>

