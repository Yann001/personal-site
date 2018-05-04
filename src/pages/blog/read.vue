<template>
  <article class="post" id="article">
    <h1 class="title">{{ blog.title }}</h1>
    <time class="time"><i class="fa fa-calendar"></i> {{ blog.updateTime | timeFilter('yyyy-MM-dd') }}</time>
    <span class="read"><i class="fa fa-eye"></i> {{ blog.readCount }}</span>
    <article class="content" v-html="blog.htmlCode"></article>
    <tag :tags="blog.tag"></tag>
    <go-top></go-top>
  </article>
</template>

<script>
import Tag from '@/components/Tag';
import GoTop from '@/components/GoTop';
import { getBlog } from '@/service/blog/getData';
const AnchorJS = require('anchor-js');
export default {
  data () {
    return {
      blog: {}
    };
  },
  components: {
    Tag,
    GoTop
  },
  async created () {
    let blogId = this.$route.params.id;
    let res = await getBlog({id: blogId});
    if (res.result && res.result.code === 200) {
      this.blog = res.data;
    } else {
      console.log(res);
      alert('您要查看的博文不存在！');
    }
  },
  mounted () {
    const anchors = new AnchorJS();
    anchors.add('h1,h2,h3,h4');
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
.post {
  padding: 10px 15px;
  .title {
    color: $hbg1;
  }
  .read {
    display: inline-block;
    margin-left: 20px;
  }
  .content {
    border-width: 2px 0px;
    margin-top: 10px;
    padding: 10px 0;
    border-style: solid;
  }
}
</style>
