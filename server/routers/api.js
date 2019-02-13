// 定义api接口
const Router = require('koa-router')

const apiRouter = new Router({prefix: '/api'})

function isEmptyObj (data) {
  const arr = Object.getOwnPropertyNames(data)
  if (arr.length === 0) {
    return true
  }
  return false
}

const validateUser = async (ctx, next) => {
  if (isEmptyObj(ctx.request.query) && isEmptyObj(ctx.request.body)) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}
// // 所有请求都添加请求登录校验
// apiRouter.use(validateUser)

const successResponse = (data) => {
  return data
}

apiRouter
  // 获取主题列表
  .get('/topics', async (ctx) => {
    const params = ctx.query
    const topics = await ctx.db.getTopics(params)
    ctx.body = successResponse(topics)
  })
  // 获取主题详情
  .get('/topic', async (ctx) => {
    const params = ctx.query
    const topic = await ctx.db.getTopicsDetail(params)
    ctx.body = successResponse(topic)
  })
  // 新建主题
  .post('/create/topic', async (ctx) => {
    const data = await ctx.db.createTopics(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 收藏主题
  .post('/collect/topic', async (ctx) => {
    const data = await ctx.db.collectTopic(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 取消收藏主题
  .post('/uncollect/topic', async (ctx) => {
    const data = await ctx.db.uncollectTopic(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 获取用户收藏的主题
  .get('/getCollects', async (ctx) => {
    const params = ctx.query
    const data = await ctx.db.getCollectTopics(params)
    ctx.body = successResponse(data)
  })
  // 新建评论
  .post('/createReplies', async (ctx) => {
    // 请求数据格式 {topic_id, accesstoken, content，reply_id} 没有reply_id时，发空
    const data = await ctx.db.createReplies(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 为评论点赞或者取消点赞
  .post('/repliesAction', async (ctx) => {
    const data = await ctx.db.repliesAction(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 用户详情
  .get('/getUser', validateUser, async (ctx) => {
    const params = ctx.query
    const data = await ctx.db.getUser(params)
    ctx.body = successResponse(data)
  })
  // 校验用户的accesstoken, 用于登录
  .post('/login', validateUser, async (ctx) => {
    const data = await ctx.db.checkUser(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 获取未读消息数
  .get('/getMsgCount/:accesstoken', async (ctx) => {
    const params = ctx.query
    const data = await ctx.db.getMsgCount(params)
    ctx.body = successResponse(data)
  })
  // 获取已读和未读消息
  .get('/getAllMsg/:accesstoken/:mdrender?', async (ctx) => {
    const {params} = ctx
    const data = await ctx.db.getAllMsg(params)
    ctx.body = successResponse(data)
  })
  // 标记全部消息为已读
  .post('/message/mark_all', async (ctx) => {
    const data = await ctx.db.msgMarkAll(ctx.request.body)
    ctx.body = successResponse(data)
  })
  // 标记单个消息为已读
  .post('/message/mark_one', async (ctx) => {
    const data = await ctx.db.msgMarkOne(ctx.request.body)
    ctx.body = successResponse(data)
  })

module.exports = apiRouter
