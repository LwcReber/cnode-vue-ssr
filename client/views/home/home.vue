<template>
  <div>
    <!-- header -->
    <section>
      <v-header @changeTab="changeTab"/>
    </section>

    <!-- content -->
    <section>
      <div class="listItem">
        <div class="row title no-gutters">
          <div class="col">
            fjasdiopfjasdpoi发泡地方就富士达皮杰
          </div>
          <div class="col-2">
            精华
          </div>
        </div>
        <div class="content">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div class="row user no-gutters align-items-center">
          <div class="col-8">
            <img class="logo" src="http://img0.imgtn.bdimg.com/it/u=4199990901,4162160503&fm=26&gp=0.jpg" alt="">
            <span>
              <i class="iconfont">&#xe62f;</i>
              <span style="vertical-align:middle">100</span>
            </span>
            <span>
              <i class="iconfont">&#xe61e;</i> 1100
            </span>
          </div>
          <div class="col-4 taRig">
            1个小时前
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <section>
      <v-footer></v-footer>
    </section>
  </div>
</template>

<script>
  import header from './component/header.vue'
  export default {
    metaInfo: {
      title: '首页'
    },
    components: {'v-header': header},
    data () {
      return {

      }
    },
    methods: {
      changeTab (value) {
        console.log(value)
      }
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
      padding 0 10px
      min-height 80px
      border-bottom 1px solid #ddd;/*no*/
    .user
      height 60px
      padding 10px
    .logo
      width 30px
      height 30px
      border-radius 50%
</style>
