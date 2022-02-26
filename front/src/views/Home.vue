<template>
	<div id="home">
		<div>
			<h1>Hébergement pour les Ukrainiens en France</h1>
		</div>
		<div id="contact">
			<Intro />
			<Actions />
			<form>
				<div class="group">
					<div>
						<label for="firstName">Prénom</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div>
						<label for="lastName">Nom</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
				</div>
				<div class="group">
					<div>
						<label for="address">Adresse</label>
						<input type="text" name="address" id="address" />
					</div>
				</div>
				<div class="group">
					<div>
						<label for="bedCount">Nombre de lits</label>
						<input type="number" name="bedCount" id="bedCount" />
					</div>
					<div>
						<label for="weekLength">Durée (en semaines)</label>
						<input type="number" name="weekLength" id="weekLength" />
					</div>
				</div>
				<div class="group">
					<div>
						<label for="languages">Langues parlées</label>
						<input type="text" name="languages" id="languages" />
					</div>
					<div>
						<label for="phone">Téléphone</label>
						<input type="phone" name="phone" id="phone" />
					</div>
				</div>
				<div class="group">
					<div>
						<label for="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
				</div>
				<div class="group">
					<div>
						<label for="message">Message (facultatif)</label>
						<textarea type="message" name="message" id="message" />
					</div>
				</div>
				<input type="submit" value="Envoyer la demande d'accueil" />
			</form>
		</div>
	</div>
</template>

<script>
import Intro from "../components/home/Intro.vue";
import Actions from "../components/home/Actions.vue";

export default {
	components: {
		Intro,
		Actions,
	},
};
</script>

<style lang="scss" scoped>
#home {
	color: white;
}

#contact {
	background-color: rgb(253, 542, 225);
	border-radius: 20px;
	padding: 5px 10px 10px 10px;
	margin: auto;
	width: calc(100% - 20px);
	text-align: center;
	color: #020202;

	form {
		width: calc(100% - 30px);
		max-width: 700px;
		background-color: white;
		margin: 40px auto 0 auto;
		border-radius: 20px;
		padding: 10px 15px;

		@media (max-width: 600px) {
			background-color: rgb(253, 542, 225);
			width: 100%;
			padding: 0;
		}

		.group {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: stretch;
			width: 100%;
			margin: 20px 0;

			div {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				flex-grow: 1;
				min-width: 200px;
				padding: 0 15px;
				font-size: 1.1rem;
				margin: 3px 0;

				@media (max-width: 600px) {
					padding: 0 5px;
				}

				input,
				textarea {
					width: calc(100% - 34px);
					border: none;
					margin: 5px 0;
					padding: 0;
					padding: 15px;
					border-radius: 7px;
					border: 2px solid rgb(220, 220, 220);
					font-size: 1.3rem;

					&:focus {
						outline: none;
						border: 2px solid rgb(57, 41, 143);
					}

					@media (max-width: 600px) {
						margin: 0;
					}
				}
			}
		}

		input[type="submit"] {
			max-width: calc(100% - 80px);
			background-color: rgb(77, 56, 194);
			color: white;
			border: none;
			white-space: normal;
			padding: 20px 40px;
			border-radius: 7px;
			font-size: 1.1rem;
			margin-bottom: 30px;
			-webkit-appearance: none;
		}
	}
}
</style>