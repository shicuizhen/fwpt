<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item v-for="item in images" :key="item.img">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data: function () {
    return {
      images: [
        { img: require('../assets/images/1.jpeg') },
        { img: require('../assets/images/2.jpeg') },
        { img: require('../assets/images/3.jpeg') },
        { img: require('../assets/images/4.jpeg') },
        { img: require('../assets/images/5.jpeg') }
      ]
    }
  }
}
</script>
<style>
  .home img{
    object-fit: cover;
  }
  .el-carousel {
    position: relative;
    top: 18px;
  }
  .el-carousel__container{
    height: 512px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home .el-carousel--horizontal {
    overflow-x: visible;
  }
  .home .el-carousel__indicators--outside {
    position: absolute;
  }
  .home .el-carousel__indicators--horizontal {
    bottom: -33px;
    left: 43.8%;
  }
  .home .el-carousel__indicators--outside button {
    background-color: #4BAF50;
  }
</style>
