<template>
  <div class="blog-list">
    <article class="item" v-for="blog in blogs" :key="blog.id">
      <h1 class="title">
        <router-link class="link" :to="'/blog/read/' + blog.id">{{ blog.title }}</router-link>
      </h1>
      <time class="time"><i class="fa fa-calendar"></i> {{ blog.updateTime | timeFilter('yyyy-MM-dd') }}</time>
      <span class="read"><i class="fa fa-eye"></i> {{ blog.readCount }}</span>
      <p class="abstract">
        {{ blog.abstract }}
        <router-link class="read-all" :to="'/blog/read/' + blog.id">阅读全文...</router-link>
      </p>
      <tag :tags="blog.tag"></tag>
    </article>
  </div>
</template>

<script>
import Tag from '@/components/Tag';
import { getBlogListByTime } from '@/service/blog/getData';
export default {
  data () {
    return {
      pageIndex: 0,
      pageSize: 10,
      blogs: []
    };
  },
  async created () {
    let res = await getBlogListByTime({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    });
    if (res.result && res.result.code === 200) {
      this.blogs = res.data;
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
$borderColor: #ccc;
$aVisitedColor: #61066e;
.blog-list {
  .item {
    border-bottom: 0.02rem solid $borderColor;
    padding: 0 15px;
    .title {
      .link {
        text-decoration: none;
        color: inherit;
        position: relative;
        &::after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: $hbg2;
          position: absolute;
          left: 0;
          bottom: -4px;
          visibility: hidden;
          transform: scaleX(0);
          transition: .5s ease-in-out;
        }
        &:hover,
        &:active {
          color: $hbg2;
          &::after {
            visibility:visible;
            transform: scaleX(1);
          }
        }
        &:visited {
          color: $aVisitedColor;
        }
      }
    }
    .read {
      display: inline-block;
      margin-left: 20px;
    }
    .abstract {
      .read-all {
        text-decoration: none;
        display: inline-block;
        padding: 0 5px;
        border-radius: 2px;
        color: $hbg2;
        background-color: #ccc;
        &:hover,
        &:active {
          color: $hbg2;
          background-color: #888;
        }
        &:visited {
          color: $aVisitedColor;
        }
      }
    }
  }
}
</style>

