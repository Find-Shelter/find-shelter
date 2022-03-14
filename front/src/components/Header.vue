<template>
  <header>
    <router-link to="/">Find Shelter 🇺🇦</router-link>
    <LocaleSwitcher />
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
export default {
  components: { LocaleSwitcher },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 15px 0;

  a {
    color: white;
    text-decoration: none;
  }

  :first-child {
    position: relative;
    font-weight: 700;
    font-size: 1.4rem;

    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: white;
    }
  }

  :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(253, 542, 225);
    color: #020202;
    padding: 5px 15px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.1rem;
  }
}
</style>