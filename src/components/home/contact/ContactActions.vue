<template>
	<div id="actions">
		<div>
			<i class="fa-solid fa-phone"></i>
			<a href="tel:+33632151139">+33 6 32 15 11 39</a>
		</div>
		<div>
			<i class="fa-solid fa-envelope"></i>
			<a href="mailto:contact@find-shelter.com">contact@find-shelter.com</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#actions {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	flex-wrap: wrap;
	justify-content: space-around;
	max-width: 700px;
	margin: auto;

	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 250px;
		margin: 5px auto;
		padding: 20px 10px;
		border-radius: 20px;
		transition: all 0.2s ease;

		a {
			color: black;
			text-decoration: none;
			font-weight: 500;
		}

		i {
			font-size: 1.6rem;
			margin: 15px auto;
			color: rgb(57, 41, 143);
		}

		&:hover {
			background-color: white;
			transition: all 0.2s ease;
		}

		// add media query for device which do not support hover
		@media (hover: none) {
			background-color: white;
		}

		@media (max-width: 600px) {
			max-width: none;
		}
	}

	&:nth-child(1) {
		flex-grow: 1;
	}

	&:nth-child(2) {
		flex-grow: 1;
	}
}
</style>