import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: process.env.VUE_ENV === 'server' ? 'http://127.0.0.1:3333/' : '/'
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
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      if (resp.status === 401) {
        // 传给actions处理
        reject(createError(401, 'need auth'))
      } else if (resp.status === 400) {
        reject(createError(400))
      }
    })
  })
}

export default {
  // 主题列表
  getTopics ({page, tab, limit = 10, mdrender}) {
    return handleRequest(request.get('/api/topics', { params: { page, tab, limit, mdrender } }))
  }
  // // 主题详情
  // getTopicDetail (id, accesstoken) {
  //   return handleRequest(request.get('/api/topicDetail', {id, accesstoken}))
  // },
  // login (username, password) {
  //   return handleRequest(request.post('/user/login', {username, password}))
  // },
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
