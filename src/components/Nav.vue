<template>
  <!--顶部标签栏-->
  <div class="nav">
    <div class="cen nav_cen">
      <p>sjzxyshfwpt</p>
      <ul class="bql" id="bql">
        <li @click="bgColor(1)" :class="{selected:1===this.index}"><router-link to="/home">首页</router-link></li>
        <li @click="bgColor(2)" :class="{selected:2===this.index}"><router-link to="/question">问题咨询</router-link></li>
        <li @click="bgColor(3)" :class="{selected:3===this.index}"><router-link to="/lost">失物招领</router-link></li>
        <li @click="bgColor(4)" :class="{selected:4===this.index}"><router-link to="/mood">心情话板</router-link></li>
      </ul>
      <a href="">后台管理</a>
      <div class="xlk_content">
        <a v-if="this.uid === null" href="/login">登录</a>
        <a v-if="this.uid !== null" style="
           width: 23px;
           height: 23px;display: inline;
           position: absolute;
           right: 40px;
           top: 18px;">
          <img src="../assets/images/1.jpeg" alt="" style="
           width: 23px;
           height: 23px;
           display: inline-block;
           position: absolute;
           right: 0px;
           top: 0px;border-radius: 50%">
        </a>
        <ul class="xlk" v-if="this.uid !== null">
          <span class="el-icon-caret-top" aria-hidden="true"></span>
          <li>
            <i class="el-icon-user" aria-hidden="true"></i>
            <a href="my_page">我的主页</a>
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
            <a href="" @click="exit()">退出</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      index: null,
      login: '登录',
      uid: null
    }
  },
  methods: {
    bgColor (index) {
      this.index = index
    },
    exit () {
      localStorage.setItem('id', null)
      location.reload()
    },
    loadUid () {
      console.log('-----id:' + this.uid)
      this.uid = localStorage.getItem('id')
      console.log('id:' + this.uid)
      // location.reload()
    }
  },
  // mounted: function () {
  //   console.log('index:' + localStorage.getItem('index'))
  //   this.index = localStorage.getItem('index')
  //   console.log(this.index)
  // },
  watch: {
    'localStorage.id' () {
      console.log('内存发生变化:')
      console.log(localStorage.getItem('id'))
    }
  },
  created () {
    this.loadUid()
  }
}
</script>

<style lang="scss">
.selected{
  background-color: #5B5B5B;
}
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
.nav_cen .xlk_content{
  position: relative;
}
.nav_cen .xlk_content>a{
  position: absolute;
  right: 36px;
  top: 0;
  color: #F9F9F9;
}
/*公共部分---下拉框开始*/
.xlk_content>a{
  //position: absolute;
  //right: 0;
  //top: 0;
  line-height: 56px;
  font-size: 14px;
}
.nav .xlk{
  display: none;
  position: absolute;
  top: 50px;
  right: 11px;
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
  //background-color: #525252;
  background-color: #851414;
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
