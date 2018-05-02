<template>
  <footer class="footer">
    <p>
      Powered & Designed by <a href="http://www.imyxy.com">YXY</a>
      <br>
      Copyright© 2017-{{ currentYear }} YXY
      <br>
      鄂ICP备17029227号
    </p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  margin: 4vh 0 0;
  padding: 4vh 22px 2vh;
  background: #ba0d37 url(../assets/images/contentinfo@2x.png) repeat-x 0 0;
  background-size: 6px 12px;
  color: #ccc;
  text-align: center;
  a {
    text-decoration: none;
    color: #2222bb;
  }
}
</style>

