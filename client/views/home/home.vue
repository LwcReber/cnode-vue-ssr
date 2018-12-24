<template>
  <div>
    <!-- header -->
    <section>
      <v-header @changeTab="changeTab"/>
    </section>

    <!-- content -->
    <div></div>

    <!-- footer -->
    <section>
      <v-footer></v-footer>
    </section>
  </div>
</template>

<script>
  import header from './component/header.vue'
  export default {
    metaInfo: {
      title: '首页'
    },
    components: {'v-header': header},
    data () {
      return {

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
