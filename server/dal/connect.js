// connect.js

// https://segmentfault.com/a/1190000006123880?_ea=1022680
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.set('debug', true)
const uri = 'mongodb://localhost:27017/test'
mongoose.connect(uri, {}).then(
  () => console.log('数据库连接成功'),
  err => console.log('数据库链接失败: ' + err)
)
