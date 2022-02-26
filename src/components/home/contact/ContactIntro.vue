<template>
	<div id="intro_text">
		<h1>Proposez un hébergement</h1>
		<p>
			Remplissez ce formulaire pour poposer une (ou plusieurs) chambres aux
			réfugiés qui en ont besoin. 🤝
		</p>
		<p>
			Vos données ne seront partagées qu'aux associations qui pourront vos
			mettre en relation avec des personnes réfugiées. Vous pouvez trouver la
			liste des ces associations
			<router-link to="/associations">ici</router-link>.
		</p>
	</div>
</template>

<style lang="scss" scoped>
#intro_text {
	max-width: 700px;
	margin: 40px auto;

	h1 {
		margin: 10px auto;
		font-size: 2.3rem;
	}

	> p {
		color: grey;
		font-size: 1.1rem;
		margin: 10px auto;
		text-align: left;
	}

	@media (max-width: 600px) {
		margin: 20px auto;

		> p {
			padding: 0 5px;
		}
	}
}
</style>