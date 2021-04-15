<template>
  <div class="main">
    <Nav></Nav>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'
export default {
  name: 'Main',
  components: {
    Nav,
    Bottom
  }
}
</script>

<style scoped>

</style>
