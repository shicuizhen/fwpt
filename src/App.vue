<template>
  <div id="app">
    <div class="nav">
      <div class="cen nav_cen">
        <p>sjzxyshfwpt</p>
        <ul>
          <li><a href="">后台管理</a></li>
          <li><a href="">个人中心</a></li>
          <li><a href=""><span class="el-icon-bell" aria-hidden="true"></span></a></li>
          <li><a href="">游客，请登录！</a></li>
        </ul>
      </div>
    </div>
    <div class="menu">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first">
          <Home></Home>
        </el-tab-pane>
        <el-tab-pane label="问题咨询" name="second">
          <Question></Question>
        </el-tab-pane>
        <el-tab-pane label="失物招领" name="third">
          <Lost></Lost>
        </el-tab-pane>
        <el-tab-pane label="心情话板" name="fourth">
          <Mood></Mood>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import Question from './views/question/Question'
import Home from './views/Home'
import Lost from './views/Lost'
import Mood from './views/Mood'
export default {
  name: 'App',
  components: { Mood, Lost, Home, Question },
  data: function () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
  /**
  菜单栏样式
  */
  .menu{
    margin-top: 52px;
    height: 46px;
    background-color: #FFFFFF;
    padding: 0 10px;
  }
  .menu .el-tabs__nav-scroll {
    padding-left: 10px;
  }
  .menu .el-tabs__item {
    height: 46px;
    line-height: 55px;
    font-size: 16px;
    color: #303030;
  }
  .menu .el-tabs__header {
    margin: 0 0 10px;
  }
  .menu .el-tabs__item:hover {
    color: #4baf50;
    cursor: pointer;
  }
  .menu .el-tabs__item.is-active {
    color: #4baf50;
  }
  .menu .el-tabs__active-bar {
    height: 3px;
    background-color: #4baf50;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    box-shadow: 0px 3px 0px 0px #94CE53;
  }
  /*
  view样式-路由跳转
  */
  //.view{
  //  height: 512px;
  //  width: 100%;
  //  background-color: rgba(141,214,224,0.2);
  //  overflow: hidden;
  //}
  /**
 当前页面样式
  */
  .nav{
    //position定位是依据于浏览器的位置
    //使用定位使当前元素超过上一级固定的中间位置区域
    position: fixed;
    left: 0;
    top: 0;
    height: 52px;
    width: 100%;
    background-color: #000000;
    z-index: 999
  }
  .nav div{
    height: 52px;
    position: relative;
  }
  .nav p{
    position: absolute;
    left: 25px;
    top: 0;
    width: 50%;
    line-height: 52px;
    color: #F9F9F9;
    font-size: 22px;
  }
  .nav ul{
    position: absolute;
    right: 25px;
    top: 0;
    height: 52px;
  }
  .nav li a{
    line-height: 52px;
    color: #F9F9F9;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
  }
  .nav li:nth-child(3) a{
    font-size: 16px;
  }
</style>
