<template>
  <div>
    <topNav :center="title" />

  <!-- 内容 -->
    <div class="main-content" v-html="topicDetail.content"></div>

  <!-- 评论 -->
    <div class="comment">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="">
          <img class="headpic" src="http://img0.imgtn.bdimg.com/it/u=4199990901,4162160503&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="col-7">
          Reber <span class="info">10楼 -- 10分钟前</span>
        </div>
        <div class="col-3 taRig action">
          <i class="iconfont icon-zan activeAction" @click="showDiscuss"></i>10
          <i class="iconfont icon-discuss"></i>
        </div>
      </div>
      <div class="content">
        这些是评论的内容
      </div>
    </div>

  <!-- 是否登录 -->
    <div class="row align-items-center no-login">
      <div class="taCen col-12">
        还没登录 >> <button class="btn btn-login" @click="toLogin">马上登录</button>
      </div>
    </div>

  <!-- 评论功能 -->
    <div class="discuss">
      <textarea ref="discussCnt" class="content" id="" cols="30" rows="5"></textarea>
      <button class="btn btn-bcs" @click="discuss">发布</button>
    </div>


  </div>
</template>

<script>
  import topNav from '@/components/topNav/index.vue'
  import {
    mapState, mapActions
  } from 'vuex'
  export default {
    components: { topNav },
    data () {
      return {
        discussCnt: '',
        maxTitleLen: 20 // 标题最大长度
      }
    },
    computed: {
      ...mapState(['topicDetail']),
      title () {
        let title = this.$route.query.title || ''
        if(title.length > this.maxTitleLen) {
          return title.slice(0, this.maxTitleLen)
        }
        return title
      },
      id () {
        return this.$route.query.id
      },
      accessToken () {
        let accessToken = JSON.parse(window.localStorage.getItem('accessToken')) || false
        return accessToken || ''
      }
    },
    mounted () {
      this.getTopicDetail({id: this.id, accessToken: this.accessToken})

    },
    methods: {
      ...mapActions(['getTopicDetail']),
      showDiscuss () {
        // 如果没有登录则去登录
        // this.toLogin()
        // 展示评论功能
        this.$refs.discussCnt.focus()
      },
      toLogin () {
        this.$router.push({name: 'login'})
      },
      discuss () {
        if (!this.discussCnt.trim()) {
          // notify({
          //   content: '请输入评论内容'
          // })

        }
      // todo 提交数据
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-content
    pading 10px
    max-width 100%

  .comment
    margin-top 200px
    padding 10px 20px
    background-color #fff
    .headpic
      width 80px
      height 80px
      border-radius 50%
    .info
      font-size 12px;/*no*/
      color themeColor
    .action
      color #666

    .activeAction
      color themeColor

    .content
      margin-top 20px

  .no-login
    margin-top 20px
    .btn-login
      width 150px
      height 60px
      border-radius 5px

  .discuss
    margin-top 50px
    padding 20px
    text-align center
    .content
      padding 10px
      width 100%
    .btn-bcs
      margin-top 30px
      width 300px
      height 80px
      border-radius 5px


</style>
