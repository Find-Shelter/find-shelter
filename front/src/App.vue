<template>
	<div>
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Footer,
		Header,
	},
};
</script>

<style lang="scss">
body,
html {
	background-color: rgb(57, 41, 143);
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
}

#app {
	max-width: 1150px;
	margin: auto;
	padding: 5px 10px;
}
</style>