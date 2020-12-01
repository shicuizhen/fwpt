<template>
  <div class="question">
    <div class="top">
      <a href="">我要提问</a>
      <ul class="sort cen2">
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="cen2">
      <div class="left">
        <p>平台最新问题</p>
        <div class="sort_xlk">
          <a href="" >选择分类</a>
          <i @click="icon_down()" class="el-icon-arrow-down" :class="{hidden : downState}" aria-hidden="true"></i>
          <i @click="icon_up()" class="el-icon-arrow-up" :class="{hidden : state}" aria-hidden="true"></i>
          <ul :class="{xlk : true, hidden : state}">
            <!--          <span class="el-icon-caret-top" aria-hidden="true"></span>-->
            <li>全部</li>
            <li>生活类问题</li>
            <li>学习类问题</li>
            <li>退出</li>
          </ul>
        </div>
        <input type="text" value="搜索" onfocus="if (value == '搜索'){value =''}" onblur="if (value ==''){value='搜索'}">
        <div class="no_solve butt">
          仅看未解决&nbsp;
          <el-button type="success" icon="el-icon-check" circle></el-button>
        </div>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  data: function () {
    return {
      downState: false,
      state: true,
      inp_val: '搜索'
    }
  },
  methods: {
    icon_down () {
      this.downState = true
      this.state = false
    },
    icon_up () {
      this.downState = false
      this.state = true
    }
  }
}
</script>

<style scoped>
  /*上部top---开始*/
  .top{
    position: relative;
    height: 150px;
    width: 100%;
    background-color: #BBD8FF;
  }
  .top>a{
    position: absolute;
    top: 30px;
    left: 35%;
    height: 36px;
    line-height: 36px;
    width: 86px;
    text-align: center;
    background-color: #fff;
    color: #525252;
    font-size: 14px;
  }
  .top>a:hover{
    color: #BBD8FF;
  }
  /*分类轮播*/
  .top .sort{
    position: absolute;
    top: 98px;
    /*margin: 0 4.3%;*/
    width: 100%;
  }
  .sort li{
    float: left;
    background-color: #FFFFFF;
    height: 90px;
    width: 17.1%;
    margin-right: 1.3%;
    border: 1px solid #C1C1C1;
    display: inline-block;
  }
  .sort li:nth-child(5){
    margin-right: 0;
  }
  .sort a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .sort li span{
    font-size: 12px;
    margin-top: 8px;
    margin-left: 15px;
    display: inline-block;
  }
  .sort li span:nth-child(1){
    color: #90CE94;
  }
  .sort li span:nth-child(4){
    float: right;
    padding-right: 15px;
  }
  .sort li p{
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  /*上部top结束*/
  /*搜索部分search---开始*/
  .left{
    position: relative;
    height: 42px;
    background-color: #D3EBD5;
    margin-top: 52px;
  }
  .left p{
    /*margin-left: 15px;*/
    margin-left: 1.2%;
    line-height: 42px;
  }
  /*下拉框*/
  .sort_xlk>a{
    position: absolute;
    /*left: 150px;*/
    left: 11.8%;
    top: 0;
    line-height: 42px;
    font-size: 14px;
  }
  .sort_xlk>i{
    position: absolute;
    /*left: 210px;*/
    left: 16.6%;
    top: 15px;
    font-size: 12px;
    font-weight: bold;
  }
  .hidden{
    display: none;
  }
  .xlk{
    background-color: #F5F5F5;
    position: absolute;
    top: 38px;
    /*left: 136px;*/
    left: 10.7%;
    width: 90px;
  }
  .xlk li{
    text-align: center;
    border: 1px solid #C6C6C6;
    color: #101010;
    line-height: 32px;
    font-size: 12px;
  }
  .xlk li:hover{
    background-color: #F9F9F9;
  }
  .xlk li:hover{
    font-weight: bold;
  }
  /*搜索框*/
  .left input{
    height: 22px;
    width: 180px;
    position: absolute;
    top: 9px;
    left: 240px;
    outline: #fff;
    border: 1px solid #fff;
    color: #888888;
    font-size: 12px;
    padding: 0 5px;
  }
  /*仅看未解决*/
  /*.no_solve */
  .no_solve .el-button.is-circle {
    border-radius: 50%;
    padding: 2px;
  }
  .no_solve{
    position: absolute;
    top: 12px;
    right: 26px;
    font-size: 14px;
  }
  /*搜索部分search---结束*/
  /*中间部分center---开始*/
  /*中间部分center---结束*/
</style>
