const mongoose = require('mongoose')
const db = mongoose.createConnection('localhost', 'test')
// https://segmentfault.com/a/1190000006123880?_ea=1022680
db.on('error', console.error.bind(console, 'db connect error(数据库连接错误)'))
db.once('open', () => {
  // 一次打开记录
})

class Dal {
  constructor (modelName, model) {
    this._model = model
    this._modelName = modelName
  }
  add1 (model, callback) {
    let Schema = new mongoose.Schema(model)
    let Model = db.model(this._modelName, Schema)
    let Entity = new Model(model)
    Entity.save(callback)
  }
  add2 (model, callback) {
    let Schema = new mongoose.Schema(model)
    let Model = db.model(this._modelName, Schema)
    Model.create(model, callback)
  }
  get (conditions, callback) {
    let Schema = new mongoose.Schema()
    let Model = db.model(this._modelName, Schema)
    Model.find(conditions, (err, data) => callback(err, data))
  }
  getById (id, callback) {
    let Schema = new mongoose.Schema()
    let Model = db.model(this._modelName, Schema)
    Model.findById(id, (err, data) => callback(err, data))
  }
  getOne (conditions, callback) {
    let Schema = new mongoose.Schema()
    let Model = db.model(this._modelName, Schema)
    Model.findOne(conditions, (err, data) => callback(err, data))
  }
  update1 () {
    this.Model.findById(this._model['_id'], (err, schema) => {
      if (err) { } // reslove eslint error(handle-callback-error)
      for (var key in schema) {
        if (schema.hasOwnProperty(key)) {
          if (key !== '_id') {
            schema[key] = this.model[key]
          }
        }
      }
      schema.save((err) => console.info(err))
    })
  }
  update2 () {
    this.Model.findById(this._model['_id'], (err, schema) => {
      if (err) { } // reslove eslint error(handle-callback-error)
      let _id = schema._id
      delete schema._id
      this.Model.update({_id: _id}, schema, (err) => console.info(err))
    })
  }
}

module.exports = Dal
