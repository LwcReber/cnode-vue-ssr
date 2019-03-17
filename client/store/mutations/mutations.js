
const state = {}
var copyState = deepClone(state) // 拷贝state对象
function deepClone (obj) {
  var newObj = obj instanceof Array ? [] : {}
  for (var i in obj) {
    newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
  }
  return newObj
}

export default {
  resetState (state) {
    for (var i in copyState) {
      state[i] = copyState[i] // 递归赋值
    }
  },

  updateCount (state, { num, num2 }) {
    state.count = num
  },
  fillTopics (state, list) {
    state.topicLists = [...state.topicLists, ...list]
  },
  fillHires (state, list) {
    state.hireList = [...state.hireList, ...list]
  },
  setUer (state, userInfo) {
    const data = JSON.stringify(userInfo)
    window.localStorage.setItem('user', data)
    state.user = userInfo
  },
  setUserInfo (state, userInfo) {
    const data = JSON.stringify(userInfo)
    window.localStorage.setItem('userInfo', data)
    state.userInfo = userInfo
  },
  updateCollectTopic (state, data) {
    state.collectTopic = data
  },
  uddateTopicDetail (state, data) {
    state.topicDetail = data
  },
  updateMsgList (state, data) {
    state.msgData = data
  },
  addTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, {id, todo}) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1,
      todo
    )
  },
  deleteTodo (state, id) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1
    )
  },
  deleteAllCompleted (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  startLoading (state) {
    state.loading = true
  },
  endLoading (state) {
    state.loading = false
  }
}
