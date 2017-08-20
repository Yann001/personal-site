// index.js

import express from 'express'
import doneApi from './api/done'

const app = express()

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Content-Type", "application/json;charset=utf-8")
  next();
})
app.use(doneApi)

app.listen(3000)
console.log('listen port 3000')
