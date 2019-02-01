<template>
  <div>
    <section class="top">
      <div class="taCen" @click="goLogin">
        <div>
          <img class="logo" :src="userInfo.avatar_url" alt="">
        </div>
        <div class="name">
          {{userInfo.loginname || '请登陆'}}
        </div>
        <div class="count">
          积分：{{userInfo.score || 0}}
        </div>
      </div>
    </section>

    <section>
      <div>
        <div @click="toRouter('/my-Collect')">
          <Item icon="icon-collect" title="我的收藏">
            <span slot="right-info">100</span>
          </Item>
        </div>
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
  import {
    mapState, mapActions
  } from 'vuex'
  export default {
    components: {Item},
    data () {
      return {
      }
    },
    computed: {
      ...mapState(['user', 'userInfo'])
    },
    mounted () {
      if (this.user.loginname) {
        this.getUserInfo({loginName: this.user.loginname})
      }
    },
    methods: {
      ...mapActions(['getUserInfo']),
      goLogin () {
         if (this.user.loginname) {
          return
        }
        this.$router.push('/login')
      },
      toRouter (route) {
        if (!this.user.loginname) {
          this.$router.push('/login')
          return
        }
        this.$router.push(route)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .top
    background url('../../../assets/images/bg.jpg') 100% no-repeat
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
