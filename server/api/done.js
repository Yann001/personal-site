// done.js

// import Db from '../dal/db'
import express from 'express'
import DoneModel from '../dal/doneModel.js'

const router = express.Router()

router.get('/api/record/add', (req, res) => {
  console.log('/api/add')
  let entity = new DoneModel({
    userId: '00000',
    date: new Date(),
    startTime: Date.now(),
    endTime: Date.now() + 1 * 3600 * 3600,
    done: 'coding',
    feel: 4,
    remark: 'none',
    ext: 'none'
  })
  let promise = entity.save()
  promise.then(
    (doc) => {
      console.log('添加成功: ' + doc)
      res.send('添加成功: ' + doc)
    },
    (err) => {
      console.log('添加失败' + err)
      res.send('添加失败' + err)
    })
})

router.get('/api/record/get', (req, res) => {
  console.log('/api/get')
  DoneModel.find((err, doc) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log(doc)
      res.send(doc)
    }
  })
})

export default router
