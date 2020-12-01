<template>
  <div id="app">
    <!--顶部标签栏-->
    <div class="nav">
      <div class="cen nav_cen">
        <p>sjzxyshfwpt</p>
        <ul class="bql">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/question">问题咨询</router-link></li>
          <li><router-link to="/lost">失物招领</router-link></li>
          <li><router-link to="/mood">心情话板</router-link></li>
        </ul>
        <a href="">后台管理</a>
        <div class="xlk_content">
          <a href="" >登录</a>
          <ul class="xlk">
            <span class="el-icon-caret-top" aria-hidden="true"></span>
            <li>
              <i class="el-icon-user" aria-hidden="true"></i>
              <a href="">我的主页</a>
            </li>
            <li>
              <i class="el-icon-chat-dot-square" aria-hidden="true"></i>
              <a href="">我的消息</a>
            </li>
            <li>
              <i class="el-icon-setting" aria-hidden="true"></i>
              <a href="">个人设置</a>
            </li>
            <li>
              <i class="el-icon-switch-button" aria-hidden="true"></i>
              <a href="">退出</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  /**中心部分样式*/
  .content{
    margin-top: 56px;
    background-color: #FFFFFF;
  }
  /**当前页面样式*/
  .nav{
    //position定位是依据于浏览器的位置
    //使用定位使当前元素超过上一级固定的中间位置区域
    position: fixed;
    left: 0;
    top: 0;
    height: 56px;
    width: 100%;
    background-color: #000000;
    z-index: 10
  }
  .nav_cen{
    height: 56px;
    position: relative;
  }
  /*标题*/
  .nav_cen p{
    position: absolute;
    left: 25px;
    top: 0;
    width: 50%;
    line-height: 56px;
    color: #F9F9F9;
    font-size: 22px;
  }
  /*中间标签栏bql*/
  .nav .bql{
    position: absolute;
    right: 50%;
    top: 0;
    height: 56px;
  }
  .bql li{
    float: left;
  }
  .bql li a{
    line-height: 56px;
    color: #F9F9F9;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
  }
  /*右侧后台管理按钮*/
  .nav_cen>a{
    position: absolute;
    right: 80px;
    top: 0;
    line-height: 56px;
    color: #F9F9F9;
    font-size: 14px;
  }
  /*登录按钮，个人中心按钮*/
  .nav_cen .xlk_content>a{
    position: absolute;
    right: 36px;
    top: 0;
    color: #F9F9F9;
  }
  /*公共部分---下拉框开始*/
  .xlk_content>a{
    position: absolute;
    right: 0;
    top: 0;
    line-height: 56px;
    font-size: 14px;
  }
  .nav .xlk{
    display: none;
    position: absolute;
    top: 46px;
    right: 10px;
    background-color: #242424;
    width: 82px;
  }
  .xlk span{
    position: absolute;
    top: -11px;
    left: 34px;
    color: #525252;
    font-size: 16px;
  }
  .xlk li{
    -webkit-transition: 1s all;
  }
  .xlk li:hover{
    background-color: #525252;
  }
  .xlk li i{
    color: #fff;
    margin: auto 6px;
    font-size: 12px;
  }
  .xlk li a{
    line-height: 40px;
    color: #F9F9F9;
    font-size: 12px;
  }
  .xlk_content:hover .xlk{
    display: block;
  }
  /*下拉框结束*/
</style>
