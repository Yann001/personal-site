<template>
  <div id="record-you" class="record">
    <div class="head">
      <h3>记录你的每一刻</h3>
    </div>
    <div class="body">
      <div class="had">
        <div class="thing" v-for="thing in things" :key="thing._id">
          <div class="item time">
            <span>{{ thing.date }}&nbsp;&nbsp;</span>
            <span>{{ thing.startTime }}</span>
            <span>至{{ thing.endTime }}</span>
          </div>
          <div class="item desc">
            <div class="content">{{ thing.done }}</div>
            <div class="feel">
              <div class="feel-box">
                <span class="feel-icon" :class="'l' + thing.feel"></span>
              </div>
            </div>
          </div>
          <div class="operate">
            <div class="btn-box">
              <a class="btn-edit"></a>
            </div>
            <div class="btn-box">
              <a class="btn-delete"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <button v-show="!isAddNew" class="btn add" @click="toggleForm">添加</button>
        <button v-show="isAddNew" class="btn cancel" @click="toggleForm">取消</button>
      </div>
      <div class="new" v-show="isAddNew">
        <form>
          <div class="form-group">
            <label for="date">日期</label>
            <input type="date" name="date" class="date" v-model="date">
          </div>
          <div class="form-group">
            <label for="start-time">开始</label>
            <input type="time" name="startTime" class="start-time" v-model="startTime">
          </div>
          <div class="form-group">
            <label for="end-time">结束</label>
            <input type="time" name="endTime" class="end-time" v-model="endTime">
          </div>
          <div class="form-group">
            <label for="done">你做了啥</label>
            <textarea class="done" v-model="done" cols="3" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="feel">感觉如何</label>
            <ul class="feel" @click="changeFeel">
              <li class="item">
                <span class="level l1" :class="feel == 1 ? 'select' : ''" data-level="1"></span>
              </li>
              <li class="item">
                <span class="level l2" :class="feel == 2 ? 'select' : ''" data-level="2"></span>
              </li>
              <li class="item">
                <span class="level l3" :class="feel == 3 ? 'select' : ''" data-level="3"></span>
              </li>
              <li class="item">
                <span class="level l4" :class="feel == 4 ? 'select' : ''" data-level="4"></span>
              </li>
              <li class="item">
                <span class="level l5" :class="feel == 5 ? 'select' : ''" data-level="5"></span>
              </li>
            </ul>
          </div>
          <div class="submit">
            <div class="btn-box">
              <button type="button" class="btn cancel" @click="toggleForm">取消</button>
            </div>
            <div class="btn-box">
              <button type="button" class="btn save" @click="save">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addRecord, getRecord } from '../../service/record/getData';
export default {
  data () {
    return {
      things: [],
      isAddNew: false,
      date: '',
      startTime: '',
      endTime: '',
      done: '',
      feel: 4
    };
  },
  created () {
    async function initData (vm) {
      let self = vm;
      let res = await getRecord('00000');
      self.things = formatThing(res.data);
    }
    initData(this);
    const formatThing = (things) => {
      let ret = [];
      things.forEach((item) => {
        item.date = new Date(item.date).toDateString();
        ret.push(item);
      });
      return ret;
    };
  },
  methods: {
    toggleForm: function () {
      this.isAddNew = !this.isAddNew;
    },
    changeFeel: function (e) {
      let level = e.target.dataset.level;
      if (level) {
        this.feel = level;
      }
    },
    save: async function () {
      console.log('save');
      let data = {
        userId: '00000',
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        done: this.done,
        feel: this.feel
      };
      let res = await addRecord(data);
      if (res && res.code === 1) {
        alert('添加成功');
        this.things.push(res.data);
        this.done = '';
        this.toggleForm();
      } else {
        console.info(res);
        alert('添加失败，请重试');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/button.css';
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
        position: relative;
        padding-right: 44px;
        margin-bottom: 20px;
        min-height: 65px;
        .item {
          margin-bottom: 5px;
        }
        .time {
          display: flex;
          border-left: 2px solid #ff3e3e;
          padding-left: 5px;
        }
        .desc {
          display: flex;
          padding-left: 10px;
          .content {
            width: 80%;
          }
          .feel {
            width: 20%;
            .feel-box {
              position: relative;
              top: 50%;
              left: 50%;
              margin-top: -10px;
              margin-left: -10px;
              width: 20px;
              height: 20px;
              .feel-icon {
                display: block;
                width: 100%;
                height: 100%;
              }
              .feel-icon.l1 {
                background: url('../../assets/images/feel1_a.png') no-repeat;
                background-size: 20px 20px;
              }
              .feel-icon.l2 {
                background: url('../../assets/images/feel2_a.png') no-repeat;
                background-size: 20px 20px;
              }
              .feel-icon.l3 {
                background: url('../../assets/images/feel3_a.png') no-repeat;
                background-size: 20px 20px;
              }
              .feel-icon.l4 {
                background: url('../../assets/images/feel4_a.png') no-repeat;
                background-size: 20px 20px;
              }
              .feel-icon.l5 {
                background: url('../../assets/images/feel5_a.png') no-repeat;
                background-size: 20px 20px;
              }
            }
          }
        }
        .operate {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          .btn-box {
            height: 50%;
            .btn-edit {
              display: block;
              width: 24px;
              height: 24px;
              background: url('../../assets/images/edit.png') no-repeat;
              background-size: 24px 24px;
            }
            .btn-edit:hover {
              background: url('../../assets/images/edit_a.png') no-repeat;
              background-size: 24px 24px;
            }
            .btn-delete {
              display: block;
              width: 24px;
              height: 24px;
              background: url('../../assets/images/dustbin.png') no-repeat;
              background-size: 24px 24px;
            }
            .btn-delete:hover {
              background: url('../../assets/images/dustbin_a.png') no-repeat;
              background-size: 24px 24px;
            }
          }
        }
      }
    }
    .btn-box {
      margin-bottom: 10px;
      .btn {
        width: 60px;
        height: 30px;
      }
    }
    .new {
      .form-group {
        margin-bottom: 5px;
        line-height: 1.5;
        label {
          display: inline-block;
          width: 70px;
        }
        input {
          border: 1px solid #ccc;
          border-radius: 2px;
          width: 50%;
        }
        .done {
          display: block;
          width: 50%;
          margin-top: 5px;
        }
        .feel {
          list-style: none;
          margin: 5px 0 0 0;
          padding: 0;
          display: flex;
          .item {
            display: block;
            width: 35px;
            text-align: center;
            .level {
              display: inline-block;
              width: 30px;
              height: 30px;
            }
            .l1 {
              background: url('../../assets/images/feel1.png') no-repeat;
              background-size: 30px 30px;
            }
            .l1.select {
              background: url('../../assets/images/feel1_a.png') no-repeat;
              background-size: 30px 30px;
            }
            .l2 {
              background: url('../../assets/images/feel2.png') no-repeat;
              background-size: 30px 30px;
            }
            .l2.select {
              background: url('../../assets/images/feel2_a.png') no-repeat;
              background-size: 30px 30px;
            }
            .l3 {
              background: url('../../assets/images/feel3.png') no-repeat;
              background-size: 30px 30px;
            }
            .l3.select {
              background: url('../../assets/images/feel3_a.png') no-repeat;
              background-size: 30px 30px;
            }
            .l4 {
              background: url('../../assets/images/feel4.png') no-repeat;
              background-size: 30px 30px;
            }
            .l4.select {
              background: url('../../assets/images/feel4_a.png') no-repeat;
              background-size: 30px 30px;
            }
            .l5 {
              background: url('../../assets/images/feel5.png') no-repeat;
              background-size: 30px 30px;
            }
            .l5.select {
              background: url('../../assets/images/feel5_a.png') no-repeat;
              background-size: 30px 30px;
            }
          }
        }
      }
      .submit {
        display: flex;
        .btn-box {
          width: 50%;
          padding: 2px 10px;
          text-align: center;
          .btn {
            width: 100%;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
