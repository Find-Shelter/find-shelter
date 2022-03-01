<template>
  <footer>
    <p>
      {{ $t("footer.main_1") }}
      <a href="https://github.com/fabrahaingo/find-shelter" target="_blank"
        >Open Source</a
      >. {{ $t("footer.main_2") }}
      <a href="mailto:suggestion@find-shelter.com">
        {{ $t("footer.link") }}
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
}
</style>