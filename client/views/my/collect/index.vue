<template>
  <div>
    <topNav>
      <span slot="center">我的收藏</span>
    </topNav>
    <listItem v-for="(item, idx) in dataList" :key="idx"/>
  </div>
</template>

<script>
  import topNav from '@/components/topNav/index.vue'

  import listItem from '@/components/listItem/index.vue'
  export default {
    components: { topNav, listItem },
    data () {
      return {
        dataList: [{}]
      }
    }
  }
</script>

<style scoped>

</style>
