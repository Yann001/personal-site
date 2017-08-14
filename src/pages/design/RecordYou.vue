<template>
  <div id="record-you" class="record">
    <div class="head">
      <h3>记录你的每一刻</h3>
    </div>
    <div class="body">
      <div class="had">
        <div class="thing" v-for="thing in things" :key="thing._id">
          <div class="item date">{{ thing.date }}</div>
          <div class="item time">
            <span>{{ thing.startTime }}</span>
            <span>至{{ thing.endTime }}</span>
          </div>
          <div class="item desc">
            <span class="content">{{ thing.desc }}</span>
            <span class="feel">{{ thing.feel }}</span>
          </div>
          <div class="operate">
            <button class="edit">编辑</button>
            <button class="delete">删除</button>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <button v-show="!isAddNew" class="add" @click="toggleForm">添加</button>
        <button v-show="isAddNew" class="cancel" @click="toggleForm">取消</button>
      </div>
      <div class="new" v-show="isAddNew">
        <form>
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
            <input type="text" name="done" id="done" v-model="desc">
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
            <button type="button" @click="save">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      things: [{
        _id: '0348759',
        date: '2017-8-14',
        startTime: '16:00',
        endTime: '17:00',
        desc: 'coding',
        feel: '4'
      }],
      isAddNew: false,
      date: '',
      startTime: '',
      endTime: '',
      desc: '',
      feel: ''
    }
  },
  methods: {
    toggleForm: function () {
      this.isAddNew = !this.isAddNew
    },
    save: function () {
      
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
  .body {
    width: 100%;
    .had {
      .thing {
        .item {
          margin-bottom: 5px;
        }
        .date {
          margin-left: 5px;
          border-left: 2px solid #ff3e3e;
        }
        .time {
          display: flex;
          padding-left: 10px;
        }
        .desc {
          display: flex;
          padding-left: 10px;
        }
        .operate {
          display: flex;
        }
      }
    }
  }
}
</style>
