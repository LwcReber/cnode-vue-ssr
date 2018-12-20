// const sha1 = require('sha1')
const axios = require('axios')

// const className = 'todo'

const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1' // 注意字段名 别写错大小写
})

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

const handleRequest = ({status, data, ...rest}) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

module.exports = () => {
  return {
    async getAllTodos (url) {
      return handleRequest(await request.get(url))
    }
    // async addTodo (todo) {
    //   return handleRequest(await request.post(
    //     `/${className}`,
    //     todo,
    //     {headers: getHeadders()}
    //   ))
    // },
    // async updateTodo (id, todo) {
    //   return handleRequest(await request.put(
    //     `/${className}/${id}`,
    //     todo,
    //     {headers: getHeadders()}
    //   ))
    // },
    // async deleteTodo (id) {
    //   return handleRequest(await request.delete(
    //     `/${className}/${id}`,
    //     {headers: getHeadders()}
    //   ))
    // },
    // async deleteComleted (ids) {
    //   const requests = ids.map(id => {
    //     return {
    //       method: 'DELETE',
    //       path: `/mcm/api/${className}/${id}`
    //     }
    //   })
    //   return handleRequest(await request.post(
    //     '/batch', // 批量处理多个请求
    //     {requests},
    //     {headers: getHeadders()}
    //   ))
    // }
  }
}
