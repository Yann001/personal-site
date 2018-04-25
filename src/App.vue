<template>
  <div id="app">
    <!-- header -->
    <page-top></page-top>
    <main class="container">
      <router-view></router-view>
    </main>
    <footer role="site-info">
      <h2>Let's design something fabulous together</h2>
    </footer>
  </div>
</template>

<script>
import pageTop from '@/components/Header';
export default {
  name: 'app',
  components: {
    pageTop
  }
};
</script>

<style scoped>
  /*@import 'assets/css/normalize.css';*/
  @import 'assets/css/main.css';
</style>
