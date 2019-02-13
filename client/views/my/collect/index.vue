<template>
  <div>
    <topNav center="我的收藏" />

    <listItem v-for="(item, idx) in collectTopic" :data="item" :key="idx"/>
  </div>
</template>

<script>
  import topNav from '@/components/topNav/index.vue'
  import {
    mapState, mapActions
  } from 'vuex'
  import listItem from '@/components/listItem/index.vue'
  export default {
    components: { topNav, listItem },
    data () {
      return {
        dataList: []
      }
    },
    computed: {
      ...mapState(['collectTopic']),
      loginname () {
        let user = JSON.parse(window.localStorage.getItem('user')) || false
        console.log(user)
        return user.loginname || ''
      }
    },
    mounted () {
      this.getCollectTopics({loginName: this.loginname})
    },
    methods: {
      ...mapActions(['getCollectTopics'])
    }

  }
</script>

<style scoped>

</style>
