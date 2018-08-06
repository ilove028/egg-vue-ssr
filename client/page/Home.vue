<template>
  <div>
    <h1>This is Home Page.</h1>
    <ul>
      <li v-for="(news, index) of [{ title: 'title1', content: 'content 1' }, { title: 'title2', content: 'content 2' }]" :key="index">
        <div>
          <h1 v-text="news.title"></h1>
          <p v-text="news.content"></p>
        </div>
      </li>
    </ul>  
  </div>
</template>
<script>
  export default {
    asyncData ({ store }) {
      return store.dispath('home/queryHomeNews')
    }
  }
</script>
<style>
  h1 {
    color: red;
  }
</style>
