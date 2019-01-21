<template>
  <div class="listItem" @click="toDetail">
        <div class="row title no-gutters">
          <div class="col one-line">
            {{data.title}}
          </div>
          <div class="col-2">
            <tag v-if="data.tab && data.tab !== 'dev'" :cnt="tags[data.tab]"/>
          </div>
        </div>
        <div class="content">
          <div class="two-line">
            {{data.content}}
          </div>
        </div>
        <div class="row user no-gutters align-items-center">
          <div class="col-1 row align-items-center no-gutters">
              <img class="logo" :src="data.author.avatar_url" alt="">
          </div>
          <div class="col-2 row align-items-center no-gutters ">
              <div class="name one-line">{{data.author.loginname}}</div>
          </div>
          <div class="col-5 row align-items-center justify-content-center no-gutters">
              <i class="iconfont icon-eyes"></i>
              <span class="count">{{data.visit_count}}</span>
              <i class="iconfont icon-message"></i>
              <span class="count">{{data.reply_count}}</span>
          </div>
          <div class="col-4 taRig">
            {{time}}
          </div>
        </div>
      </div>
</template>

<script>
  import util from '@/util/util'
import tag from '../tag/index.vue'
  export default {
    components: {tag},
    props: {
      data: Object
    },
    data () {
      return {
        tags: {'share': '分享', 'good': '精华', 'job': '招聘', 'ask': '问答'}
      }
    },
    computed: {
      time () {
        let timeStamp = (new Date(this.data.create_at)).valueOf()
        const timeStr = util.formatMsgTime(timeStamp)
        return timeStr
      }
    },
    methods: {
      toDetail () {
        this.$router.push({name: 'detail', query: {id: 1}})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .listItem
    margin 25px 20px
    box-sizing border-box
    background-color #fff
    border-radius 3px;/*no*/
    .title
      height 100px
      line-height 100px
      padding 0 10px;
      font-size 16px; /*no*/
      border-bottom 1px solid #ddd;/*no*/
    .content
      margin 5px 10px
      height 80px
      border-bottom 1px solid #ddd;/*no*/
    .user
      height 60px
      padding 10px
    .name
      padding-left 10px
    .logo
      width 20px; /*no*/
      height 20px; /*no*/
      border-radius 50%
    .count
      padding 0 10px

  .tag
    box-sizing border-box
    text-align center
    width 100px
    height 50px
    line-height 50px
    font-size 14px;/*no*/
    color #fff
    background-color #659
</style>
