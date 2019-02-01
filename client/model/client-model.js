import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/' // process.env.VUE_ENV === 'server' ? 'http://127.0.0.1:3333/' : '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }

      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data)
    }).catch(err => {
      const resp = err.response
      if (resp.success === false) {
        // 传给actions处理
        reject(createError(400, resp.error_msg))
      } else if (resp.status === 401) {
        reject(createError(401, '请登陆'))
      }
    })
  })
}

export default {
  // 主题列表
  getTopics ({page, tab, limit = 10, mdrender}) {
    return handleRequest(request.get('/api/topics', { params: { page, tab, limit, mdrender } }))
  },
  // // 主题详情
  // getTopicDetail (id, accesstoken) {
  //   return handleRequest(request.get('/api/topicDetail', {id, accesstoken}))
  // },
  login (accesstoken) {
    return handleRequest(request.post('/api/login', { accesstoken }))
  },
  getUserInfo (loginName) {
    return handleRequest(request.get('/api/getUser', {params: { loginName }}))
  }
  // updateTodo (id, todo) {
  //   return handleRequest(request.put(`/api/todo/${id}`, todo))
  // },
  // createTodo (todo) {
  //   return handleRequest(request.post('/api/todo', todo))
  // },
  // deleteTodo (id) {
  //   return handleRequest(request.delete(`/api/todo/${id}`))
  // },
  // deleteAllCompleted (ids) {
  //   return handleRequest(request.post('/api/delete/completed', {ids}))
  // }

}
