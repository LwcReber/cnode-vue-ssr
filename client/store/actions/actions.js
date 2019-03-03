import model from 'model'
import bus from '../../util/bus'

const handleError = (err) => {
  console.log(err)
  if (err.code === 401) {
    // 使用新vue对象，事件总线，触发一个事件
    bus.$emit('auth')
  }
}
// 在actions可以处理数据的错误，请求失败等处理

export default {
  updateCountAxync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  getTopics ({ commit }, {param, cb, type = 0}) {
    console.log(type)
    return model.getTopics(param)
      .then(({data}) => {
        if (type === 0) {
          commit('fillTopics', data)
        } else {
          commit('fillHires', data)
        }
        cb && cb(data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  getTopicDetail ({ commit }, param) {
    return model.getTopicDetail(param)
      .then(({data}) => {
        commit('uddateTopicDetail', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  getCollectTopics ({ commit }, {loginName}) {
    return model.getCollectTopic(loginName)
      .then(({data}) => {
        commit('updateCollectTopic', data)
      })
      .catch(err => {
        handleError(err)
      })
  },

  addTodo ({commit}, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('endLoading')
        commit('addTodo', data)
        // notify({
        //   content: '你又多了一件事要做'
        // })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateTodo ({commit}, {id, todo}) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('endLoading')
        commit('updateTodo', {id, todo: data})
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteTodo ({commit}, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('endLoading')
        commit('deleteTodo', id)
        // notify({
        //   content: '你又少了一件事要做'
        // })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteAllCompleted ({commit, state}) {
    commit('startLoading')
    const ids = state.todos.filter(t => t.completed).map(t => t.id)

    model.deleteAllCompleted(ids)
      .then(() => {
        commit('endLoading')
        commit('deleteAllCompleted')
        // notify({
        //   content: '清理一下。。。 '
        // })
      }).catch(err => {
        handleError(err)
      })
  },
  login ({commit}, { accessToken }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(accessToken)
        .then(data => {
          commit('setUer', data)
          commit('endLoading')
          // notify({content: '登录成功'})
          resolve()
        }).catch(err => {
          commit('endLoading')
          // notify({
          //   content: '抱歉，登录失败，请确认用户名或者密码是否正确'
          // })
          handleError(err)
          reject(err)
        })
    })
  },
  getUserInfo ({commit}, {loginName}) {
    return new Promise((resolve, reject) => {
      model.getUserInfo(loginName)
        .then(({data}) => {
          commit('setUserInfo', data)
          resolve()
        }).catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
