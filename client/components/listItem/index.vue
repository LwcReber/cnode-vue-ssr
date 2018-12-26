<template>
  <div class="listItem">
        <div class="row title no-gutters">
          <div class="col one-line">
            fjasdiopfjasdpoi发泡地方就富士达皮杰泡地方就富士达皮杰泡地方就富士达皮杰
          </div>
          <div class="col-2">
            <div class="tag">
              精华
            </div>
          </div>
        </div>
        <div class="content">
          <div class="two-line">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </div>
        </div>
        <div class="row user no-gutters align-items-center">
          <div class="col-4 row align-items-center no-gutters">
            <img class="logo" src="http://img0.imgtn.bdimg.com/it/u=4199990901,4162160503&fm=26&gp=0.jpg" alt="">
            <span class="name">reber</span>
          </div>
          <div class="col-4 row align-items-center justify-content-center no-gutters">
              <i class="iconfont icon-eyes"></i>
              <span class="count">100</span>
              <i class="iconfont icon-message"></i>
              <span class="count">100</span>
          </div>
          <div class="col-4 taRig">
            1个小时前
          </div>
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
  .listItem
    margin 10px
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
      width 40px
      height 40px
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
