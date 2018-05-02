<template>
  <ul class="tag-list">
    <li class="name"><i class="fa fa-tags"></i></li>
    <li class="tag" v-for="tag in tags" :key="tag">
      <router-link class="link" :to="'/blog/tag/' + tag">{{ tag }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>

