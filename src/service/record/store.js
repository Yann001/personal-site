import fetch from '../../config/fetch'

const addRecord = (data) => fetch('/api/record/add', data)

const getRecord = (userId, condition = null) => fetch('/api/record/get', {
  userId,
  condition
})

export {
  addRecord,
  getRecord
}
