<template>
  <div class="list">
    <div class="tab row no-gutters taCen align-items-center">
      <div :class="['col', 'listItem', (rigBor && ( index !== list.length - 1 )) ? 'rigBor': '' ]"
        :style="{ width: tabWidth + 'px' }"
        @click="changTab(index)" v-for="(item, index) in list" :key="item.value">
        <div class="content" :class="curIndex == index ? 'active': ''">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="bar" :style="{width: barWidth + 'px', left: barLeft}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array,
      rigBor: {
        type: Boolean,
        default: false
      },
      // tab底部高亮线的宽度
      barWidth: {
        type: [Number, String],
        default: 32
      }
    },
    data () {
      return {
        curIndex: 0
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
      barLeft () { // 下划线的位置
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

     .rigBor
      border-right 1px solid #ccc

  .content
    display inline-block
    white-space nowrap
    height 100%
    color #aaa
    &.active
      color: themeColor


  .bar
    position: relative;
    height: 2px; /*no*/
    transition: left 300ms;
    background-color themeColor

</style>
