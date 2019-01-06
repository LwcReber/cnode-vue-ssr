<template>
  <div>
    <section>
      <div class="row no-gutters align-items-center">
        <img class="logo" src="http://img5.imgtn.bdimg.com/it/u=832192736,1053576081&fm=26&gp=0.jpg" alt="">
        <div>
          <div>
            用户名
          </div>
          <div>
            积分：9
          </div>
        </div>
      </div>
    </section>

    <div></div>

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
  .logo
    width 120px
    height 120px
    margin-right 100px
    margin-left 15px
    border-radius 50%
</style>
