<template>
  <div id="intro_text">
    <h1>{{ $t("offer_housing") }}</h1>
    <p v-html="$t('rooms')" />
    <p>
      {{ $t("data_protection_form") }}
      <router-link to="/legal">ici</router-link>.
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