<template>
  <div class="container">
    <topNav>
      <span slot="center">登录</span>
    </topNav>
    <div class="row no-gutters form-container flex-column justify-content-center align-items-center">
      <form class="login-form" @submit="doSubmit" autocomplete="off">
        <div>
          <input
            type="text"
            class="login-input"
            placeholder="请输入accesstoken"
            v-model="accessToken"
          >
        </div>
        <div>
          <button type="submit" class="btn btn-login">登 录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'

  import topNav from '@/components/topNav/index.vue'
  export default {
    components: { topNav },
    metaInfo: {
      title: '登录'
    },
    data () {
      return {
        accessToken: '',
        errorMsg: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      doSubmit (e) {
        e.preventDefault()
        if (this.validate()) {
          // 调用登录接口
          this.login({
            accessToken: this.accessToken
          })
          .then(() => {
            window.localStorage.setItem('accessToken', this.accessToken)
            this.$router.replace({name: 'my'})
          })
        }
      },
      validate () {
        console.log(this.accessToken)
        if (!this.accessToken.trim()) {
          this.errorMsg = '姓名不能不能为空'
          return false
        }
        this.errorMsg = ''
        return true
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .form-container
    position absolute
    left 0
    top 80px
    right 0
    bottom 0
    background-color #fff

    .login-form
      width 550px
      height 250px
      padding 50px
      text-align center
    .login-input
      width 95%;
      height 70px
      padding-left 10px
      border 1px solid #ddd;/*no*/

    .btn-login
      margin-top 50px
      width 95%
      height 70px
      font-size 18px;/*no*/
</style>
