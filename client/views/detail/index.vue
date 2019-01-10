<template>
  <div>
    <topNav>
      <span slot="center">标题标题</span>
    </topNav>


    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci laudantium, dolorem veniam quam molestiae voluptatum veritatis labore ullam laboriosam, unde quidem nobis blanditiis. Ea, voluptatibus nobis. Porro, aspernatur. Delectus?
    </div>

    <div>
      <div class="row no-gutters">
        <img class="headpic" src="http://img0.imgtn.bdimg.com/it/u=4199990901,4162160503&fm=26&gp=0.jpg" alt="">
        <div>
          Reber
        </div>
        <div>
          <i class="iconfont icon-my"></i>
          <i class="iconfont icon-my"></i>
        </div>
      </div>
      <div>
        这些是评论的内容
      </div>
    </div>
  </div>
</template>

<script>
  import topNav from '@/components/topNav/index.vue'

  export default {
    components: { topNav },
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .headpic
    width 100px
    height 100px
    border-radius 50%
</style>
