<template>
  <div>
    <div ref="mescroll" class="mescroll">
      <!--内容...-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入mescroll的vue组件
// 引入mescroll.min.js和mescroll.min.css
// import './mescroll.min.css';
// import './test.css';

// import MeScroll from 'mescroll.js'
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  data() {
    return {
      mescroll: null, // mescroll实例对象

      dataList: [] // 列表数据
    };
  },
  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter(); // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    });
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave(); // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next();
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      // 创建MeScroll对象
      // this.mescroll = new MeScroll(this.$refs.mescroll, { // 在mounted初始化mescroll,确保此处配置的ref有值
      //   // down:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则down可不用写了)
      //   up: {
      //   callback: this.upCallback
      // }
      // })
    }
  }
};
</script>

<style scoped>
</style>
