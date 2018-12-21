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
    async getTopics ({page, tab, limit, mdrender}) {
      return handleRequest(await request.get('/topics', {params: {page, tab, limit, mdrender: mdrender || false}}))
    },
    async getTopicsDetail ({id}) {
      return handleRequest(await request.get(`/topic/${id}`, {params: {mdrender: false, accesstoken: ''}}))
    },
    async createTopics (params) {
      // 把主题归类写死为dev的测试环境
      return handleRequest(await request.post('/topics', {...params, tab: 'dev'}))
    },
    async collectTopic (params) {
      return handleRequest(await request.post('/topic_collect/collect', params))
    },
    async uncollectTopic (params) {
      return handleRequest(await request.post('/topic_collect/de_collect', params))
    },
    async getCollectTopics ({loginname}) {
      return handleRequest(await request.get(`/topic_collect/${loginname}`))
    },
    async createReplies (params) {
      let para = {accesstoken: '', content: ''}
      const {topic_id, accesstoken, content} = params
      para.accesstoken = accesstoken
      para.content = content
      // 如果回复的是别人的评论，则请求添加reply_id属性
      if (params.reply_id) {
        para.reply_id = params.reply_id
      }
      return handleRequest(await request.post(`/topic/${topic_id}/replies`, para))
    },
    async repliesAction (params) {
      const {reply_id, accesstoken} = params
      return handleRequest(await request.post(`/reply/${reply_id}/ups`, {accesstoken}))
    },
    async getUser (params) {
      return handleRequest(await request.get(`/user/${loginname}`))
    },
    async checkUser (params) {
      return handleRequest(await request.post('/accesstoken', params))
    },
    async getMsgCount ({accesstoken}) {
      return handleRequest(await request.get(`/message/count`, {params: {accesstoken}}))
    },
    async getAllMsg ({accesstoken, mdrender}) {
      return handleRequest(await request.get('/messages', {params: {accesstoken, mdrender: mdrender || true}}))
    },
    async msgMarkAll(params) {
      return handleRequest(await request.post('/message/mark_all', params))
    },
    async msgMarkOne({msg_id, accesstoken}) {
      return handleRequest(await request.post(`/message/mark_one/${msg_id}`, {accesstoken}))
    }
  }
}
