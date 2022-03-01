<template>
  <select v-model="$i18n.locale">
    <option :value="locale.code" v-for="locale in locales" :key="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>

<script>
import { getSupportedLocales } from "@/util/i18n/supported-locales";

export default {
  data: () => ({ locales: getSupportedLocales() }),
};
</script>