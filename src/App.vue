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
      <ul>
          <li v-for="(item ,index) in menuLinks" :key="item.content" @click="pushRoute(item.address,index)">
            <a :class="(selected == index) ? 'current' : ''">{{item.content}}</a>
          </li>
      </ul>
    </div>
    <router-view/>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      selected: 0,
      menuLinks: [
        { content: '首页', address: '/home' },
        { content: '问题咨询', address: '/question' },
        { content: '失物招领', address: '/lost' },
        { content: '心情话板', address: '/mood' }
      ]
    }
  },
  methods: {
    pushRoute (address, index) {
      this.$router.push(address)
      this.selected = index
    }
  }
}
</script>
<style lang="scss">
  /**
  菜单栏样式
  */
  .menu{
    margin-top: 56px;
    height: 66px;
    background-color: #FFFFFF;
    padding: 0 10px;
  }
  .menu a{
    color: #101010;
    line-height: 85px;
    margin: 0 16px;
    padding: 5px 2px;
  }
  .menu a:hover{
    color: #6ABD6E;
    transition: all 0.3s ease-out
  }
  .menu .current{
    color: #6ABD6E;
    border-bottom: solid 2px #4BAF50;
    box-shadow: 0px 1px 0px 0px #94CE53;
  }
  /**
 当前页面样式
  */
  .nav{
    //position定位是依据于浏览器的位置
    //使用定位使当前元素超过上一级固定的中间位置区域
    position: fixed;
    left: 0;
    top: 0;
    height: 56px;
    width: 100%;
    background-color: #000000;
    z-index: 999
  }
  .nav div{
    height: 56px;
    position: relative;
  }
  .nav p{
    position: absolute;
    left: 25px;
    top: 0;
    width: 50%;
    line-height: 56px;
    color: #F9F9F9;
    font-size: 22px;
  }
  .nav ul{
    position: absolute;
    right: 25px;
    top: 0;
    height: 56px;
  }
  .nav li a{
    line-height: 56px;
    color: #F9F9F9;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
  }
  .nav li:nth-child(3) a{
    font-size: 16px;
  }
</style>
