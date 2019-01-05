<template>
  <div>
    <v-nav :rigBor="true" barWidth="64" class="head" :list="navs" @changeTab="changeTab"/>

     <!-- footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import nav from '@/components/nav/index.vue'

  export default {
    components: {'v-nav': nav},
    data () {
      return {
        navs: [
          {name: '新消息', value: 'new'},
          {name: '已读消息', value: 'old'}
        ]
      }
    },
    methods: {
      changeTab (value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped>

</style>
