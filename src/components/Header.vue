<template>
   <header>
      <router-link to="/">Find Shelter</router-link>
   </header>
</template>

<style lang="scss" scoped>
header {
   margin: 10px 0 15px 5px;
}

a {
   position: relative;
   color: white;
   text-decoration: none;
   font-weight: 700;
   font-size: 1.4rem;

   &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: white;
   }
}
</style>