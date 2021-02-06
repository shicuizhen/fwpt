<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Bottom from '@/components/Bottom'
export default {
  name: 'App',
  components: {
    Nav,
    Bottom
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
