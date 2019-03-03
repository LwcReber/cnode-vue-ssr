<template>
  <div>
    <div @click="hideDisscuss">
      <topNav :center="title" />

      <!-- 主题内容 -->
      <div class="main-content" v-html="topicDetail.content"></div>

      <!-- 评论区 -->
      <div class="comment" v-if="topicDetail.replies && topicDetail.replies.length > 0">
        <div v-for="(item, index) in topicDetail.replies" :key="item.id" class="commentList"
        :class="(index + 1) < topicDetail.replies.length ? 'borderBtm': ''">
          <div class="row no-gutters justify-content-between align-items-center">
            <div class="">
              <img class="headpic" :src="item.author.avatar_url" alt="">
            </div>
            <div class="col-7">
              <div>
                {{item.author.loginname}}
              </div>
              <div>
                <span class="info">{{ index + 1 }}楼 -- {{formatTime(item.create_at)}}</span>
              </div>
            </div>
            <div class="col-3 taRig action">
              <i class="iconfont icon-zan activeAction" @click.stop="upvote(index)"></i>{{item.ups.length}}
              <i class="iconfont icon-discuss" @click.stop="showDiscuss"></i>
            </div>
          </div>
          <div class="content" v-html="item.content"></div>
        </div>
      </div>

      <!-- 是否登录 -->
      <div class="row align-items-center no-login" v-if="!accessToken">
        <div class="taCen col-12">
          还没登录 >> <button class="btn btn-login" @click="toLogin">马上登录</button>
        </div>
      </div>
    </div>

    <!-- 评论功能 -->
    <div class="discuss" v-show="discussStatus">
      <textarea ref="discussCnt" class="content" cols="30" rows="5"></textarea>
      <button class="btn btn-bcs" @click="discuss">发布</button>
    </div>
  </div>
</template>

<script>
  import topNav from '@/components/topNav/index.vue'
  import util from '@/util/util'
  import {
      mapState, mapActions
    } from 'vuex'
  export default {
    components: { topNav },
    data () {
      return {
        accessToken: '',
        discussCnt: '',
        discussStatus: false,
        maxTitleLen: 20 // 标题最大长度
      }
    },
    computed: {
      ...mapState(['topicDetail']),
      title () {
        let title = this.$route.query.title || ''
        if (title.length > this.maxTitleLen) {
          return title.slice(0, this.maxTitleLen)
        }
        return title
      },
      id () {
        return this.$route.query.id
      }
    },
    watch: {
      accessToken (val, old) {
        console.log(val)
      }
    },
    created () {
      if (typeof window !== 'undefined') {
        this.accessToken = window.localStorage.getItem('accessToken') || ''
        console.log(this.accessToken)

        this.getTopicDetail({id: this.id, accessToken: this.accessToken})
      }
    },
    destroyed () {
      this.$store.commit('uddateTopicDetail', {})
    },
    methods: {
      ...mapActions(['getTopicDetail']),
      formatTime (time) {
        const timeStr = util.formatMsgTime(time)
        return timeStr
      },
      hideDisscuss () {
        this.discussStatus = false
      },
      showDiscuss () {
        // 如果没有登录则去登录
        if (!this.accessToken) {
          this.toLogin()
          return
        }
        this.discussStatus = true
        console.log(this.discussStatus)
        this.$nextTick(() => {
          // 展示评论功能
          this.$refs.discussCnt.focus()
        })
      },
      toLogin () {
        this.$router.push({name: 'login'})
      },
      // 点赞
      upvote (index) {

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
    padding 10px

  .comment
    margin-top 100px
    padding 10px 20px
    background-color #fff
    .commentList
      padding 10px 0
      &.borderBtm
        border-bottom 1px solid #ddd;/*no*/

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
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    padding 20px
    width 600px
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
