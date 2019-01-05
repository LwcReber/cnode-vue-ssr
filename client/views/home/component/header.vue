<template>
  <div class="list">
    <div class="tab row no-gutters taCen align-items-center">
      <div class="col listItem" :style="{width: tabWidth+'px'}" @click="changTab(index)" v-for="(item, index) in list" :key="item.value">
        <div class="content">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="bar" :style="{width: barWidth+'px', left: barLeft}"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        barWidth: 32, // tab底部红色线的宽度
        curIndex: 0,
        list: [
          {name: '全部', value: ''},
          {name: '精华', value: 'good'},
          {name: '分享', value: 'share'},
          {name: '问答', value: 'ask'},
          {name: '测试', value: 'dev'}
        ]
      }
    },
    computed: {
      tabWidth () {
        if (typeof window !== 'undefined') {
          return window.innerWidth / this.list.length
        } else {
          return 0
        }
      },
      barLeft () { // 红线的位置
        return (this.tabWidth * this.curIndex + (this.tabWidth - this.barWidth) / 2) + 'px'
      }
    },
    methods: {
      changTab (index) {
        if (this.curIndex === index) return
        this.curIndex = index
        this.$emit('changeTab', this.list[index].value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tab
    height 80px
  .list
    font-size 16px; /*no*/
    background-color #fff
    border-bottom 1px solid #ddd; /*no*/
    .listItem
      height 60px
      line-height 60px

  .content
    display inline-block
    white-space nowrap
    height 100%

  .bar
    position: relative;
    height: 2px; /*no*/
    transition: left 300ms;
    background-color themeColor

</style>
