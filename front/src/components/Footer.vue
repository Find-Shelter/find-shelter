<template>
	<footer>
		<p>
			Ce projet est
			<a href="https://github.com/fabrahaingo/find-shelter" target="_blank">Open Source</a>. N'hésitez pas à contribuer ou 
      <a href="mailto:suggestion@find-shelter.com">suggérer des améliorations</a>
		</p>
    <p class="discord">
      <a href="https://discord.gg/bCEzJFc9Bc">
        <img src="../../../img/logo_discord.png" alt="logo discord" target="_blank">
      </a>
    </p>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	color: white;
	text-align: center;

	a {
		color: white;
		font-weight: 700;
	}

  img {
    height: 4rem;
    width: auto;
  }
}
.discord {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    transition: transform 400ms ease;
  }

  a:hover {
    transform: scale(1.1);
  }
}
</style>