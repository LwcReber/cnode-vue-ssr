<template>
  <div>
    <v-nav :rigBor="true" barWidth="64" class="head" :list="navs" @changeTab="changeTab"/>

    <div>
      <div v-if="curVal == 'new'">
        <listItem :data="item" v-for="(item, index) in newMsgList" :key="index"/>
      </div>

      <div v-if="curVal == 'old'">
        <listItem :data="item" v-for="(item, index) in newMsgList" :key="index"/>
      </div>

    </div>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import nav from '@/components/nav/index.vue'
  import listItem from './component/listItem.vue'
  export default {
    components: {'v-nav': nav, listItem},
    data () {
      return {
        curVal: 'new',
        newMsgList: [{}],
        oldMsgList: [{}],
        navs: [
          {name: '新消息', value: 'new'},
          {name: '已读消息', value: 'old'}
        ]
      }
    },
    methods: {
      changeTab (value) {
        this.curVal = value
      }
    }
  }
</script>

<style scoped>

</style>
