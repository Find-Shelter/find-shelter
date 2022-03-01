<template>
  <div id="disclaimer">
    <h1>{{ $t("headline") }}</h1>
    <p v-html="$t('border_crossing')" />
    <p v-html="$t('welcome')" />
    <p v-html="$t('ninety_days')" />
    <p v-html="$t('data_protection')" />
  </div>
</template>

<style lang="scss" scoped>
#disclaimer {
  max-width: 700px;
  margin: 30px auto;

  h1 {
    font-size: 2rem;
    margin: 10px auto;
  }
}
</style>