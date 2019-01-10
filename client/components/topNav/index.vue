<template>
  <div class="row no-gutters nav align-items-center">
      <div class="col-2">
        <slot name="left">
          <i @click="goback" class="iconfont icon-back"></i>
        </slot>
      </div>
      <div class="col-8 title">
        <slot name="center"></slot>
      </div>
      <div class="col-2">
        <slot slot="right"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      left: String
    },
    data () {
      return {

      }
    },
    methods: {
      goback  () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav
    height 80px
    background-color themeColor
    color #fff
  .title
    text-align center
  .icon-back
    padding-left 10px
</style>
