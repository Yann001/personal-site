<template>
  <div id="app">
    <!-- header -->
    <page-top></page-top>
    <!-- main -->
    <main class="container">
      <router-view></router-view>
    </main>
    <!-- footer -->
    <page-bottom></page-bottom>
  </div>
</template>

<script>
import pageTop from '@/components/Header';
import pageBottom from '@/components/Footer';
export default {
  name: 'app',
  components: {
    pageTop,
    pageBottom
  }
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: #fff;
  display: block;
  font-size: 100px;
}

body {
  margin: 0;
  padding: 6px;
  min-height: 100vh;
  background-color: transparent;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.16rem;
  color: #494a4a;
}
</style>
