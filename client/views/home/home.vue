<template>
  <div>
    <!-- header -->
    <section>
      <v-header />
    </section>

    <!-- content -->
    <div></div>

    <!-- footer -->
    <div></div>
  </div>
</template>

<script>
  import header from './component/header.vue'
  export default {
    components: {'v-header': header},
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
