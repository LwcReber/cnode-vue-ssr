<template>
  <div>
    <!-- header -->
    <v-nav class="head" :list="navs" @changeTab="changeTab"/>

    <!-- content -->
    <ListScroll  class="scroller" :upCallback="loadList" ref="mescroll" warpId="index_scroll" id="index_scroll">
      <div>
        <listItem :data="item" v-for="(item, idx) in datas[tab]" :key="idx"/>
      </div>
    </ListScroll>

    <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import nav from '@/components/nav/index.vue'
  import listItem from '@/components/listItem/index.vue'
  import ListScroll from '@/components/scroll/index.vue'
  import {mapState, mapActions} from 'vuex'
  export default {
    metaInfo: {
      title: '首页'
    },
    components: {listItem, ListScroll, 'v-nav': nav},
    data () {
      return {
        datas: {
          'all': [], 'share': [], 'ask': [], 'good': [], 'dev': []
        },
        navs: [
          {name: '全部', value: ''},
          {name: '精华', value: 'good'},
          {name: '分享', value: 'share'},
          {name: '问答', value: 'ask'},
          {name: '测试', value: 'dev'}
        ],
        curTab: ''
      }
    },
    asyncData ({store}) {

    },
    computed: {
      ...mapState(['topicLists']),
      dataList () {
        return this.topicLists
      },
      tab () {
        let tab = this.curTab
        if (tab === '') {
          tab = 'all'
        }
        return tab
      }
    },
    mounted () {

    },
    methods: {
      ...mapActions([
        'getTopics'
      ]),
      changeTab (value) {
        this.curTab = value
        this.$refs.mescroll.scrollTo(0, 1)
        if (this.datas[this.tab].length === 0) {
          this.$refs.mescroll.resetUpScroll()
        }
      },
      loadList (page) {
        this.getTopics({
          param: {page: page.num, tab: this.curTab, limit: 20},
          cb: (data) => {
            if (page.num === 1) {
              this.datas[this.tab] = []
            }
            this.datas[this.tab] = [...this.datas[this.tab], ...data]
            this.$refs['mescroll'].endSuccess(this.dataList.length)
          }})
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
    background-color #ffffff
    z-index 100
  .scroller
    padding-top 86px
    padding-bottom 100px
</style>
