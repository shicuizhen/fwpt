<template>
  <my-marquee :lists="lists"></my-marquee>
</template>
<script>
// import LostDetail from './my-marquee'
export default {
  name: 'LostDetail',
  data () {
    return {
      lists: [
        '连雨不知春去',
        '一晴方觉夏深'
      ]
    }
  }
}
</script>

<style scoped>

</style>
