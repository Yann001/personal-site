<template>
  <header class="header">
      <div class="header-inner">
        <div class="header-logo">
          <router-link to="/home" title="I'm YXY.">
            <img src="../assets/images/yxy-logo-white.png" alt="I'm YXY.">
          </router-link>
        </div>
        <ul class="header-list">
          <li class="item" :class="nav.className" v-for="nav in navs" :key="nav.id">
            <router-link class="link" :to="nav.router">{{ nav.name }}</router-link>
          </li>
        </ul>
      </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      navs: [{
        id: 0,
        name: '博客',
        router: '/blog/index',
        className: 'blog'
      }, {
        id: 1,
        name: '设计',
        router: '/design/recordyou',
        className: 'design'
      }, {
        id: 2,
        name: '算法',
        router: '/design',
        className: 'design'
      }, {
        id: 3,
        name: '摄影',
        router: '/photograph',
        className: 'photograph'
      }, {
        id: 4,
        name: '关于',
        router: '/about',
        className: 'about'
      }, {
        id: 5,
        name: '联系',
        router: '/contact',
        className: 'contact'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
.header {
  margin-bottom: 2vh;
  background: $hbg1 url(../assets/images/banner__credits@2x.png) repeat-x 0 100%;
  background-size: 5px 12px;
  .header-inner {
    margin: 0;
    padding: 0;
    height: 163px;
    .header-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      a {
        position: relative;
        display: block;
        width: 180px;
        transition: top 0.15s ease;
          img {
          max-width: 100%;
          border-width: 0;
          vertical-align: center;
        }
      }
    }
  }
  .header-list {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100px;
    .item {
      display: flex;
      align-items: center;
      float: left;
      width: calc(100% / 3);
      height: 50px;
      margin-bottom: 0;
      &:nth-child(odd) {
        background-color: $hbg2;
      }
      &:nth-child(even) {
        background-color: $hbg3;
      }
      &.blog,
      &.design,
      &.algorithm {
        border-bottom: 1px solid rgba(149, 10, 44, 0.5);
      }
      .link {
        display: block;
        text-decoration: none;
        width: 100%;
        line-height: 50px;
        color: #fff;
        border-bottom: 0;
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 768px) {
.header{
  .header-inner {
    margin: 0 44px;
    padding: 0;
    height: 113px;
    .header-logo {
      margin-left: 13%;
      width: 30.5%;
      flex-direction: column;
      align-items: flex-start;
      height: 100px;
      margin-right: -100%;
      a {
        width: 240px;
        left: -56px;
      }
    }
  }
  .header-list {
    // margin: -100px 0 0 46.5%;
    margin-top: -100px;
    margin-left: 46.5%;
    width: 53.5%;
  }
}
}
</style>

