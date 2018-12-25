<template>
  <div class="row no-gutters taCen align-items-center list">
    <div class="col listItem" @click="changTab(index)" v-for="(item, index) in list" :key="item.value">
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
    },
    methods: {
      changTab (index) {
        this.list.map((item) => {
          item.active = false
        })
        this.list[index].active = true
        this.$emit('changeTab', this.list[index].value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    font-size 16px; /*no*/
    padding-bottom 10px
    background-color #fff
    border-bottom 1px solid #ddd; /*no*/
    .listItem
      height 60px
      line-height 60px

  .content
    display inline-block
    height 100%
    &.active:after
      content ''
      display block
      border-bottom 2px solid #444; /*no*/

</style>
