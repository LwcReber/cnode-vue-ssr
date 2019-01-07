<template>
  <div class="item row no-gutters align-items-center">
    <div class="col-8">
      <i :class="['iconfont', 'left-icon', icon]"></i>
      <span class="title">{{title}}</span>
    </div>
    <div class="col-4">
        <div class="row no-gutters align-items-center right justify-content-end">
          <slot name="right-info"></slot>
          <i class="iconfont icon-arrowRig"></i>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // icon
      icon: String,
      title: String
    }
  }
</script>

<style lang="stylus" scoped>
  .item
    min-height 100px
    padding-left 15px
    background-color #fff
    border-bottom 1px solid #ddd;/*no*/
    .left-icon
      color themeColor
  .title
    font-size 16px;/*no*/
  .right
    padding-right 15px
</style>
