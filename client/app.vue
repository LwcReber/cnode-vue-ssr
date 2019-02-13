<template>
  <div id="app">
    <div id="loading" v-show="loading">
      <loading/>
    </div>

    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

import {
  mapState
} from 'vuex'
import loading from './components/loading/loading.vue'
export default {
  metaInfo: {
    title: 'reber\'s todo app'
  },
  components: {
    loading
  },
  computed: {
    ...mapState(['loading'])
  },
  mounted () {
    let user = window.localStorage.getItem('user')
    let userInfo = window.localStorage.getItem('userInfo')

    if (user) {
      this.$store.commit('setUer', JSON.parse(user))
    }
    if (userInfo) {
      this.$store.commit('setUserInfo', JSON.parse(userInfo))
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>

#loading {
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color  rgba(255,255,255, .3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>
