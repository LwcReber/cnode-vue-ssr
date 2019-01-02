<template>
  <div>
    <!-- header -->
    <v-header class="head" @changeTab="changeTab"/>

    <!-- content -->
    <ListScroll  class="scroller"  :upCallback="loadList" ref="mescroll" warpId="index_scroll" id="index_scroll">
      <div>
        <listItem v-for="(item, idx) in dataList" :key="idx"/>
      </div>
    </ListScroll>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './component/header.vue'
  import listItem from '@/components/listItem/index.vue'
  import ListScroll from '@/components/scroll/index.vue'
  export default {
    metaInfo: {
      title: '首页'
    },
    components: {'v-header': header, listItem, ListScroll},
    data () {
      return {
        dataList: []
      }
    },
    methods: {
      changeTab (value) {
        console.log(value)
      },
      loadList (page) {
        setTimeout(() => {
          for (let index = 0; index < 10; index++) {
            this.dataList.push({})
          }
          this.$refs['mescroll'].endSuccess(this.dataList.length)
        }, 1500)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .head
    position fixed
    top 0
    left 0
    right 0
    height 72px
    background-color #ffffff
    z-index 100
  .scroller
    padding-top 72px
    padding-bottom 92px
</style>
