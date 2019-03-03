<template>
  <div>
    <ListScroll  class="scroller"  :upCallback="loadList" ref="mescroll" warpId="hire_scroll" id="hire_scroll">
      <div>
        <listItem :data="item" v-for="(item, idx) in datas" :key="idx"/>
      </div>
    </ListScroll>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import listItem from '@/components/listItem/index.vue'
  import ListScroll from '@/components/scroll/index.vue'
  import {mapState, mapActions} from 'vuex'

  export default {
    metaInfo: {
      title: '招聘'
    },
    components: {listItem, ListScroll},
    data () {
      return {
        datas: [],
        tab: 'job'
      }
    },
    computed: {
      ...mapState(['hireList']),
      dataList () {
        return this.hireList
      }
    },
    asyncData ({store}) {
      return store.dispatch('getTopics', {param: {page: 1, tab: 'job', limit: 20}, type: 1})
    },
    mounted () {
      if (this.dataList.length > 0) {
        this.datas = [...this.dataList]
      } else {
        this.$refs.mescroll.resetUpScroll()
      }
    },
    methods: {
      ...mapActions([
        'getTopics'
      ]),
      loadList (page) {
        this.getTopics({
          param: {page: page.num, tab: this.tab, limit: 20, type: 1},
          cb: (data) => {
            if (page.num === 1) {
              this.datas = []
            }
            this.datas = [...this.datas, ...data]
            this.$refs['mescroll'].endSuccess(this.datas.length)
          }})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .scroller
    padding-bottom 92px

</style>
