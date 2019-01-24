const createDb = require('../../server/db/db')

const db = createDb()

// 服务端渲染做一些获取数据的操作
export default {
  getTopics () {
    return db.getTopics({page: 1, tab: '', limit: 20})
  }
}
