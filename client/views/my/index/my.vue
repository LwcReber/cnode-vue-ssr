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
            <span slot="right-info">{{collectTopic.length || 0}}</span>
          </Item>
        </div>
        <Item icon="icon-about" title="关于cnode"/>
        <Item icon="icon-aboutme" title="关于我"/>
      </div>
    </section>

    <button @click="signout" class="btn btn-signout">退出当前账号</button>

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
      ...mapState(['user', 'userInfo', 'collectTopic'])
    },
    watch: {
      'user.loginname' () {
        if (this.user.loginname) {
          this.getUserInfo({loginName: this.user.loginname})
          this.getCollectTopics({loginName: this.user.loginname})
        }
      }
    },

    methods: {
      ...mapActions(['getUserInfo', 'getCollectTopics']),
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
      },
      signout () {
        window.localStorage.clear()
        this.$store.commit('resetState')
        this.$router.replace('/login')
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

  .btn-signout
    margin 40px auto
    display block
    width 300px
    height 60px
    border-radius 5px
</style>
