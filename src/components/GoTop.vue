<template>
  <a href="javascript:void(0)" 
    class="go-top" 
    :class="isVisible ? 'visible' : ''"
    @click="goTop">
    <i class="fa fa-arrow-up"></i>
  </a>
</template>

<script>
import { throttle } from '@/util/util';
export default {
  data () {
    return {
      isVisible: false
    };
  },
  methods: {
    goTop () {
      document.documentElement.scrollTop = 0;
    }
  },
  created () {
    window.addEventListener('scroll', throttle(() => {
      if (document.documentElement.scrollTop > 400) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }));
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
.go-top {
  display: block;
  position: fixed;
  right: 20px;
  bottom: 150px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 48px;
  border-radius: 25px;
  color: #fff;
  background-color: $hbg1;
  font-size: 0.32rem;
  visibility: hidden;
  opacity: 0;
  transition: .5s ease-in-out;
  &.visible {
    visibility: visible;
    opacity: 1;
  }
}
</style>
