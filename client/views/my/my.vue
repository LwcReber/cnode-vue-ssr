<template>
  <div>
    <section class="top">
      <div class="taCen">
        <div>
          <img class="logo" src="http://img5.imgtn.bdimg.com/it/u=832192736,1053576081&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="name">
          Reber
        </div>
        <div class="count">
          积分：9
        </div>
      </div>
    </section>

    <section>
      <div>
        <Item icon="icon-collect" title="收藏主题">
          <span slot="right-info">100</span>
        </Item>
        <Item icon="icon-about" title="关于cnode"/>
        <Item icon="icon-aboutme" title="关于我"/>
      </div>
    </section>
     <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Item from './component/item.vue'
  export default {
    components: {Item}
  }
</script>

<style lang="stylus" scoped>
  .top
    background url('../../assets/images/bg.jpg') 100% no-repeat
  .logo
    margin 20px 0
    width 200px
    height 200px
    border-radius 50%
  .name
    font-size 20px;/*no*/
    color #000
    font-weight bold
  .count
    font-size 16px;/*no*/
    padding-bottom 50px
    color #222
</style>
