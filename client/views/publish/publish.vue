<template>
  <div class="container">
    <div class="row no-gutters form-item align-items-center">
      <div class="col-2 form-title">主题</div>
      <div class="col-10">
        <select name="" class="type" v-model="form.type">
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
          <option value="dev">测试</option>
        </select>
      </div>
    </div>
    <div class="row no-gutters form-item align-items-center">
      <div class="col-2 form-title">标题</div>
      <div class="col-10">
        <input class="title" v-model="form.title" type="text" placeholder="标题字数10字以上">
      </div>
    </div>
    <div class="row  no-gutters">
      <div class="col-12">
        <textarea class="content" v-model="form.content" placeholder="请输入发布内容" id="" cols="30" rows="10"></textarea>
      </div>
    </div>

    <div class="submit row no-gutters justify-content-center">
      <button @click="submit">提交</button>
    </div>
     <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: '发布'
    },
    data () {
      return {
        form: {
          type: 'share',
          title: '',
          content: ''
        }
      }
    },
    methods: {
      submit () {
        console.log(this.form)
        if (this.form.title.length < 10) {
          window.alert('请输入标题,10字以上')
          return
        }
        if (this.form.content.length === 0) {
          window.alert('请输入发布内容')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    padding 10px

  .form-item
    box-sizing border-box
    height 80px
    border-bottom 1px solid #ddd /*no*/
    .form-title
      font-weight bold
      font-size 16px;/*no*/
    .type, .title
      padding: 5px
      width 100%
      height 50px

  .content
    margin-top 20px
    width 100%
    padding 10px
    border-radius 5px/*no*/

  .submit
    margin-top 200px
    button
      width 300px
      height 80px
      line-height 80px
      color #fff
      border-radius 10px
      font-size 16px;/*no*/
      background-color themeColor
</style>
