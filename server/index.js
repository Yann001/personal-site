// index.js

import express from 'express'
import doneApi from './api/done'

const app = express()

app.use(doneApi)

app.listen(3000)
console.log('listen port 3000')
