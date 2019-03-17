<template>
  <div>
    <v-nav :rigBor="true" barWidth="64" class="head" :list="navs" @changeTab="changeTab"/>

    <div>
      <div v-if="curVal == 'new'">
        <listItem :data="item" v-for="(item, index) in newMsgList" :key="index" />
        <p v-if="newMsgList.length == 0" class="noData">暂无数据</p>
      </div>

      <div v-if="curVal == 'old'">
        <listItem :data="item" v-for="(item, index) in oldMsgList" :key="index"/>
        <p v-if="oldMsgList.length == 0" class="noData">暂无数据</p>
      </div>

    </div>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import nav from '@/components/nav/index.vue'
  import listItem from './component/listItem.vue'
  import { mapState, mapActions } from 'vuex'
  export default {
    components: {'v-nav': nav, listItem},
    data () {
      return {
        curVal: 'new',
        // newMsgList: [{}],
        // oldMsgList: [{}],
        navs: [
          {name: '新消息', value: 'new'},
          {name: '已读消息', value: 'old'}
        ]
      }
    },
    computed: {
      ...mapState(['user', 'msgData']),
      newMsgList () {
        if (this.msgData.data) {
          return this.msgData.data.hasnot_read_messages || []
        }
        return []
      },
      oldMsgList () {
        if (this.msgData.data) {
          return this.msgData.data.has_read_messages || []
        }
        return []
      }
    },
    created () {
      if (typeof window !== 'undefined') {
        const accessToken = window.localStorage.getItem('accessToken')
        if (accessToken) {
          this.getMsgList(accessToken)
        }
      }
    },
    methods: {
      ...mapActions(['getMsgList']),
      changeTab (value) {
        this.curVal = value
      }
    }
  }
</script>

<style scoped lang="stylus" >
  .noData
    text-align center
    margin 80px

</style>
