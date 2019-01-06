<template>
  <div class="item">
    <div class="item-top row no-gutters align-items-center btmBor1px">
      <img class="logo" src="http://img5.imgtn.bdimg.com/it/u=832192736,1053576081&fm=26&gp=0.jpg" alt="">
      <div>
        谁谁回复了你的主题
      </div>
    </div>
    <div class="item-content two-line">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis rerum sunt incidunt maxime sit dolorem consequuntur, eaque omnis a tempore culpa blanditiis, laboriosam distinctio rem illo repellat eius facilis?
    </div>
    <div class="item-time topBor1px">
      2018-9-12 10:22
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
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
