<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <div class="header-inner">
        <div class="header-logo">
          <a href="#" title="UK website design, North Wales">
            <img src="./assets/images/navigation__logo.png" alt="Stuff & Nonsense. UK website design, North Wales">
          </a>
        </div>
        <ul class="header-list">
          <li class="link-design">
            <router-link to="/design/recordYou">设计</router-link>
            <!-- <a href="">设计</a> -->
          </li>
          <li class="link-blog">
            <a href="#">博客</a>
          </li>
          <li class="link-component">
            <a href="#">插件</a>
          </li>
          <li class="link-algorithm">
            <a href="#">算法</a>
          </li>
          <li class="link-about">
            <a href="#">关于</a>
          </li>
          <li class="link-contact">
            <a href="#">联系</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <footer role="site-info">
        <h2>Let's design something fabulous together</h2>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  /*@import 'assets/css/normalize.css';*/
  @import 'assets/css/main.css';
</style>
