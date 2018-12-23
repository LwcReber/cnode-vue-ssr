<template>
  <div class="row no-gutters taCen align-items-center list">
    <div class="col listItem" v-for="item in list" :key="item.value">
      <div class="content" :class="item.active == true ? 'active' : ''">
         {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {name: '全部', value: '', active: true},
          {name: '精华', value: 'good', active: false},
          {name: '分享', value: 'share', active: false},
          {name: '问答', value: 'ask', active: false},
          {name: '测试', value: 'dev', active: false}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    .listItem
      height 60px
      line-height 60px

  .content
    display inline-block
    height 100%
    &.active:after
      content ''
      border-bottom 2px solid red; /*no*/

</style>
