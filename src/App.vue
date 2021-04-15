<template>
  <div id="app">
    <Main v-if="manage === null"></Main>
    <Manage v-if="manage !== null"></Manage>
  </div>
</template>
<script>
import Manage from '@/views/Manage'
import Main from '@/views/Main'
export default {
  name: 'App',
  data: function () {
    return {
      manage: null
    }
  },
  components: {
    Main,
    Manage
  },
  methods: {
  },
  mounted: function () {
    this.manage = JSON.parse(localStorage.getItem('manage'))
  }
}
</script>
<style>
</style>
