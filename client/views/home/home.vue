<template>
  <div>
    <!-- header -->
    <section>
      <v-header @changeTab="changeTab"/>
    </section>

    <!-- content -->
    <section>
      <listItem />
    </section>

    <!-- footer -->
    <section>
      <v-footer></v-footer>
    </section>
  </div>
</template>

<script>
  import header from './component/header.vue'
  import listItem from '../../components/listItem/index.vue'
  export default {
    metaInfo: {
      title: '首页'
    },
    components: {'v-header': header, listItem},
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

<style lang="stylus" scoped>

</style>
