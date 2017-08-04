<template>
  <div id="record-you" class="record">
    <div class="head">
      <h3>记录你的每一刻</h3>
    </div>
    <div class="body">
      <form action="">
        <div class="form-group">
          <label for="date">日期</label>
          <input type="date" name="date" id="date" v-model="date">
        </div>
        <div class="form-group">
          <label for="start-time">开始</label>
          <input type="time" name="startTime" id="start-time" v-model="startTime">
          <label for="end-time">结束</label>
          <input type="time" name="endTime" id="end-time" v-model="endTime">
        </div>
        <div class="form-group">
          <label for="done">你做了啥</label>
          <input type="text" name="done" id="done" v-model="done">
        </div>
        <div class="form-group">
          <label for="feel">感觉如何</label>
          <ul id="fell">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div class="submit">
          <button type="button">保存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: '',
        startTime: '',
        endTime: '',
        done: '',
        feel: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record {
    width: 100%;
    height: 100%;
    .head {
      .h3 {
        font-size: 1.5rem;
        font-weight: normal;
      }
    }
  }
</style>
