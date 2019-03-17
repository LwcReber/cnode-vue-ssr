<template>
  <div class="item">
    <div class="item-top row no-gutters align-items-center btmBor1px">
      <img class="logo" :src="data.author.avatar_url" alt="">
      <div>
        {{data.author.loginname}}回复了你的主题
      </div>
    </div>
    <div class="item-content two-line" v-html="data.reply.content">
    </div>
    <div class="item-time topBor1px">
      {{time}}
    </div>
  </div>
</template>

<script>
  import util from '@/util/util'

  export default {
    props: {
      data: Object
    },
    computed: {
      time () {
        const timeStr = util.formatMsgTime(this.data.reply.create_at)
        return timeStr
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .item
    margin 20px
    padding 0 20px
    background-color #fff
    border-radius 10px
    .item-top, .item-time
      padding 10px
    .item-content
      margin 10px

  .logo
    width 90px
    height 90px
    border-radius 50%
    margin-right 20px
</style>
