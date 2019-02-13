export default {
  updateCount (state, { num, num2 }) {
    state.count = num
  },
  fillTopics (state, list) {
    state.topicLists = [...state.topicLists, ...list]
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
