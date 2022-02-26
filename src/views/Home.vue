<template>
	<div id="home">
		<Disclaimer />
		<div id="contactSection">
			<ContactIntro />
			<ContactActions />
			<ContactForm />
		</div>
	</div>
</template>

<script>
import Disclaimer from "../components/home/Disclaimer.vue";
import ContactIntro from "../components/home/contact/ContactIntro.vue";
import ContactActions from "../components/home/contact/ContactActions.vue";
import ContactForm from "../components/home/contact/ContactForm.vue";

export default {
	components: {
		Disclaimer,
		ContactIntro,
		ContactActions,
		ContactForm,
	},
};
</script>

<style lang="scss" scoped>
#home {
	color: white;
}

#contactSection {
	background-color: rgb(253, 542, 225);
	border-radius: 20px;
	padding: 5px 10px 10px 10px;
	margin: auto;
	width: calc(100% - 20px);
	text-align: center;
	color: #020202;
}
</style>