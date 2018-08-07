<template>
  <div>
    <h1>This is Home Page.</h1>
    <ul>
      <li v-for="(news, index) of news" :key="index">
        <div>
          <h1 v-text="news.title"></h1>
          <p v-text="news.content"></p>
        </div>
      </li>
    </ul>  
  </div>
</template>
<script>
  import home from '../store/module/home';

  export default {
    asyncData ({ store }) {
      store.registerModule('home', home);
      return store.dispatch('home/queryHomeNews')
    },
    computed: {
      news () {
        return this.$store.state.home.news.data;
      }
    },
    destroyed () {
      this.$store.unregisterModule('home');
    }
  }
</script>
<style>
  h1 {
    color: red;
  }
</style>
