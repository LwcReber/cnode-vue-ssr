<template>
  <div class="tag-content" :style="[baseStyles, styles]">
    <slot>{{cnt}}</slot>
  </div>
</template>

<script>

  export default {
    props: {
      styles: {
        type: Object
      },
      cnt: String,
      colorIndex: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      baseStyles () {
        return {
          backgroundColor: this.colorList[this.colorIndex || 0]
        }
      },
    },
    mounted () {

    },
    data () {
      return {
        colorList: ["#6bb3e6", '#eee']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tag-content
    width 100px
    height 50px
    text-align center
    background-color: #E5E5E5
    box-sizing border-box
    line-height 50px
    font-size 14px;/*no*/
    color #fff
</style>
