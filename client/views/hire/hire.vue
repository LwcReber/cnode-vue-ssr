<template>
  <div>
    <section>
      <listItem/>
    </section>
    <!-- footer -->
    <section>
      <v-footer></v-footer>
    </section>
  </div>
</template>

<script>
  import listItem from '@/components/listItem/index.vue'
  export default {
    metaInfo: {
      title: '招聘'
    },
    components: {listItem},
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
