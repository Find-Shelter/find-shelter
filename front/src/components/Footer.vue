<template>
  <footer>
    <i18n-t keypath="footer.main" tag="p">
      <template #url1>
        <a href="https://github.com/fabrahaingo/find-shelter" target="_blank">{{
          $t("footer.url1")
        }}</a>
      </template>
      <template #url2>
        <a href="mailto:suggestion@find-shelter.com" target="_blank">{{
          $t("footer.url2")
        }}</a>
      </template>
    </i18n-t>
    <p class="discord">
      <a href="https://discord.gg/bCEzJFc9Bc">
        <img
          src="../../../img/logo_discord.png"
          alt="logo discord"
          target="_blank"
        />
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
    transform: scale(1.05);
  }
}
</style>