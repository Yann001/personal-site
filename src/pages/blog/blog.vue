<template>
  <div class="blog-list">
    <article class="item" v-for="blog in blogs" :key="blog.id">
      <h1 class="title">
        <router-link class="link" :to="'/blog/read/' + blog.id">{{ blog.title }}</router-link>
      </h1>
      <time class="time"><i class="fa fa-calendar"></i> {{ blog.updateTime }}</time>
      <span class="read"><i class="fa fa-eye"></i> {{ blog.readCount }}</span>
      <p class="abstract">{{ blog.abstract }}</p>
      <ul class="tag-list">
        <li class="name"><i class="fa fa-tags"></i></li>
        <li class="tag" v-for="tag in blog.tags" :key="tag">
          <router-link class="link" :to="'/blog/tag/' + tag">{{ tag }}</router-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [{
        id: 0,
        title: '测试文章--静态数据',
        abstract: `纽约时间比加州时间早三个小时， 
                   New York is 3 hours ahead of California, 
                   但加州时间并没有变慢。 
                   but it does not make California slow. 
                   有人22岁就毕业了， 
                   Someone graduated at the age of 22, 
                   但等了五年才找到好的工作！ 
                   but waited 5 years before securing a good job! 
                   有人25岁就当上CEO， 
                   Someone became a CEO at 25, 
                   却在50岁去世。 
                   and died at 50. 
                   也有人迟到50岁才当上CEO， 
                   While another became a CEO at 50, 
                   然后活到90岁。`,
        type: {
          id: 0,
          name: '前端'
        },
        tags: ['前端', '博客搭建', 'Vue', 'MVVM', 'MongoDB'],
        updateTime: '2018-04-24',
        readCount: 233
      }, {
        id: 1,
        title: '测试文章1--静态数据',
        abstract: `and lived to 90 years. 
                   有人依然单身， 
                   Someone is still single, 
                   同时也有人已婚。 
                   while someone else got married. 
                   奥巴马55岁就退休， 
                   Obama retires at 55, 
                   川普70岁才开始当总统。 
                   but Trump starts at 70. 
                   世上每个人本来就有自己的发展时区。 
                   Absolutely everyone in this world works based on their Time Zone. 
                   身边有些人看似走在你前面， 
                   People around you might seem to go ahead of you, 
                   也有人看似走在你后面。 
                   some might seem to be behind you. 
                   但其实每个人在自己的时区有自己的步程。 
                   But everyone is running their own RACE, in their own TIME. 
                   不用嫉妒或嘲笑他们。 
                   Don’t envy them or mock them. 
                   他们都在自己的时区里，你也是！`,
        type: {
          id: 0,
          name: '前端'
        },
        tags: ['博客搭建', 'Vue', 'MVVM'],
        updateTime: '2018-04-24',
        readCount: 233
      }, {
        id: 2,
        title: '测试文章2--静态数据',
        abstract: `They are in their TIME ZONE, and you are in yours! 
                   生命就是等待正确的行动时机。 
                   Life is about waiting for the right moment to act. 
                   所以，放轻松。 
                   So, RELAX. 
                   你没有落后。 
                   You’re not LATE. 
                   你没有领先。 
                   You’re not EARLY. 
                   在命运为你安排的属于自己的时区里，一切都准时。 
                   You are very much ON TIME, and in your TIME ZONE Destiny set up for you.`,
        type: {
          id: 0,
          name: '前端'
        },
        tags: ['Vue', 'MVVM', 'MongoDB'],
        updateTime: '2018-04-24',
        readCount: 233
      }, {
        id: 3,
        title: '测试文章3--静态数据',
        abstract: `It’s been a while since I’ve written seriously, 
                  but since I started working on my new ‘Art directing for the web’ book, 
                  I’ve got the bug. So when Smashing Magazine asked me to write for them 
                  again, I couldn’t resist. My latest article, on ‘Art Directing 
                  For The Web With CSS Grid Template Areas’ was published today and I’m very 
                  pleased with how it turned out. You can read it here.`,
        type: {
          id: 0,
          name: '前端'
        },
        tags: ['博客搭建', 'MVVM', 'MongoDB'],
        updateTime: '2018-04-24',
        readCount: 233
      }]
    };
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
    .tag-list {
      list-style: none;
      padding: 0;
      .name {
        display: inline-block;
        margin-right: 10px;
      }
      .tag {
        display: inline-block;
        height: 0.22rem;
        margin: 2px 15px;
        padding: 0.05rem 0.1rem;
        border-radius: 1px 2px 2px 1px;
        position: relative;
        cursor: pointer;
        &::before {
          content: ' ';
          width: 0;
          height: 0;
          position: absolute;
          top: 0;
          left: -32px;
          border-width: 16px;
          border-style: solid;
          border-color: transparent;
        }
        &::after {
            content: '';
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 0 0 1px rgba(0,0,0,.3);
            position: absolute;
            top: 14px;
            left: -5px;
        }
        &:nth-child(n+1) {
          background-color: #9c200a;
          &::before {
            border-right-color: #9c200a;
          }
        }
        &:nth-child(n+2) {
          background-color: #037a5d;
          &::before {
            border-right-color: #037a5d;
          }
        }
        &:nth-child(n+3) {
          background-color: #96086b;
          &::before {
            border-right-color: #96086b;
          }
        }
        &:nth-child(n+4) {
          background-color: #5f6905;
          &::before {
            border-right-color: #5f6905;
          }
        }
        &:nth-child(n+5) {
          background-color: #1504ad;
          &::before {
            border-right-color: #1504ad;
          }
        }
        .link {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}
</style>

