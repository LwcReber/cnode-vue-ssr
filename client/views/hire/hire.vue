<template>
  <div>
    <ListScroll  class="scroller"  :upCallback="loadList" ref="mescroll" warpId="hire_scroll" id="hire_scroll">
      <div>
        <listItem v-for="(item, idx) in dataList" :key="idx"/>
      </div>
    </ListScroll>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import listItem from '@/components/listItem/index.vue'
  import ListScroll from '@/components/scroll/index.vue'

  export default {
    metaInfo: {
      title: '招聘'
    },
    components: {listItem, ListScroll},
    data () {
      return {
        dataList: []
      }
    },
    methods: {
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
  .scroller
    padding-bottom 92px

</style>
