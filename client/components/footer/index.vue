<template>
  <div id="footer">
    <div class="row no-gutters taCen list align-items-center">
      <div class="col" :class='pathName == "home" ? "active" : ""' @click="toRoute('home')">
        <div>
          <i class="iconfont icon-home"></i>
        </div>
        <div>首页</div>
      </div>

      <div class="col" :class='pathName == "hire" ? "active" : ""' @click="toRoute('hire')">
        <div>
          <i class="iconfont icon-hire"></i>
        </div>
        <div>招聘</div>
      </div>

      <div class="col">
        <div>
          <i class="iconfont add icon-publish"></i>
        </div>
      </div>

      <div class="col">
        <div>
          <i class="iconfont icon-message"></i>
        </div>
        <div>消息</div>
      </div>

      <div class="col">
        <div>
          <i class="iconfont icon-my"></i>
        </div>
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      pathName () {
        return this.$route.name
      }
    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {
      toRoute (name) {
        this.$router.push({name})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #footer
    position fixed
    bottom 0
    left 0
    right 0
    box-sizing border-box
    border-top 1px solid #ddd; /*no*/
    background-color #fff
    z-index 999
    .list
      height 100px
    .add
      color themeColor
      font-size 30px; /*no*/
    .active
      color themeColor

</style>
