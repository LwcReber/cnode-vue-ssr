const createDb = require('../../server/db/db')

const db = createDb()

// 服务端渲染做一些获取数据的操作
export default {
  getTopics (param) {
    return db.getTopics(param)
  }
}
