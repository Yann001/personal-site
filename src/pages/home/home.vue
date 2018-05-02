<template>
  <div class="home">
    <ul class="list">
      <li class="item" v-for="page in pages" :key="page.id">
        <router-link class="link" :to="page.router">
          <img :src="page.cover" class="cover" alt="">
          <!-- <h1 class="title">{{ page.title }}</h1> -->
          <div class="desc">
            <h1 class="title">{{ page.title }}</h1>
            <p class="detail">{{ page.detail }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [{
        id: 0,
        title: '博客',
        cover: '../../../static/images/t1.jpeg',
        detail: '程序猿的一些学习笔记，希望能有帮助到你的内容，包括一些前端知识，Node知识以及机器学习知识，还有一些感想。',
        router: '/blog/index'
      }, {
        id: 1,
        title: '设计',
        cover: '../../../static/images/t2.jpeg',
        detail: '这里可能会有一些设计的小项目或作品',
        router: '/design/index'
      }, {
        id: 2,
        title: '游戏',
        cover: '../../../static/images/t3.jpeg',
        detail: '楼主开发的一些小游戏，你可以点进来试玩以下或者获取源代码。',
        router: '/game/index'
      }, {
        id: 3,
        title: '摄影',
        cover: '../../../static/images/t4.jpeg',
        detail: '这里可能有许多楼主拍的美美哒皂片儿^_^',
        router: '/photograph/index'
      }, {
        id: 4,
        title: '代购',
        cover: '../../../static/images/t5.jpeg',
        detail: '假如自己在做代购，你可以来这里看看我在代购哪些商品。',
        router: '/purchase/index'
      }, {
        id: 5,
        title: '关于',
        cover: '../../../static/images/t6.jpeg',
        detail: '想要更多地了解我的话，不妨来这里看看！',
        router: '/about'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // background: url(../../assets/images/hbg.jpeg);
    opacity: 0.5;
    z-index: -1;
  }
  .list {
    list-style: none;
    padding: 0 30px;
    .item {
      width: 100%;
      display: inline-block;
      margin-bottom: 20px;
      &:hover {
        box-shadow: -3px 5px 10px 2px #713131;
        border-radius: 2px;
      }
      .link {
        display: block;
        text-decoration: none;
        position: relative;
        .cover {
          width: 100%;
          border-radius: 3px;
          float: left;
          opacity: 0.6;
        }
        .desc {
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          width: 100%;
          padding: 10px 15px;
          float: left;
          .title {
            margin: 0;
            margin-bottom: 2%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .home {
    .list {
      .item {
        width: 50%;
        min-height: 180px;
        .link {
          .cover {
            width: 45%;
          }
          .desc {
            position: relative;
            width: 55%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .home {
    .list {
      .item {
        width: 30%;
      }
    }
  }
}
</style>
