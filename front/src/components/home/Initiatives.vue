<template>
  <div id="initiatives">
    <h1>{{ $t("initiatives.title") }}</h1>
    <ul>
      <li v-for="ini of initiatives" :key="ini.name">
        <a :href="ini.url" target="_blank">
          <figure>
            <img :src="require(`@/assets/initiatives/${ini.img}`)" />
            <figcaption>
              <h2>{{ ini.name }}</h2>
              <p>{{ ini.description[$i18n.locale] }}</p>
            </figcaption>
          </figure>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import initiatives from "../../config/initiatives-list.json";

export default {
  data() {
    return {
      initiatives: initiatives.data,
    };
  },
};
</script>

<style lang="scss" scoped>
#initiatives {
  max-width: 700px;
  margin: 30px auto;

  h1 {
    font-size: 2rem;
    margin: 10px auto;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      background: white;
      margin: 10px 0;
      color: #020202;
      border-radius: 10px;
      width: 100%;

      @media screen and (min-width: 650px) {
        max-width: 300px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      figure {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        width: calc(100% - 20px);
        border-radius: 7px;
        overflow: hidden;

        h2 {
          padding-top: 5px;
          font-size: 1.2rem;
          margin: 0;
        }

        img {
          width: auto;
          height: 150px;
        }

        p {
          margin: 0;
        }
      }
    }
  }
}
</style>