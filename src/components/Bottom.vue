<template>
<div class="bottom">
  <div class="ys"></div>
  <ul class="approve">
    <li class="approve_act">
      <span>如遇不实信息请及时举报&nbsp;</span>
      <a href="/report"><svg t="1615040326872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2120" width="200" height="200"><path d="M832 194.56h-614.4c-56.32 0-102.4 46.08-102.4 102.4v409.6c0 56.32 46.08 102.4 102.4 102.4h614.4c56.32 0 102.4-46.08 102.4-102.4v-409.6c0-56.32-46.08-102.4-102.4-102.4z m25.6 51.2l-332.8 256-332.8-256h665.6z m-691.2 460.8v-409.6l230.4 179.2-227.84 245.76c-2.56-5.12-2.56-10.24-2.56-15.36z m40.96 48.64l230.4-245.76 87.04 66.56 84.48-66.56 235.52 245.76H207.36z m675.84-48.64c0 5.12 0 10.24-2.56 15.36l-227.84-245.76 230.4-179.2v409.6z" p-id="2121"></path></svg></a>
    </li>
    <li class="contact">
      <p><a href="http://localhost:8080/">返回首页</a></p>
      <p><a href="" @click="contact()">联系我！</a></p>
    </li>
    <li>
      <p>更多链接</p>
    </li>
    <li class="more">
      <a href="https://user.qzone.qq.com/3317202871?p_skey=eZsJgAuJqXOlycfsFFT05yOFY2lC1XjcrSYoRjzEPJU_&p_skey=eZsJgAuJqXOlycfsFFT05yOFY2lC1XjcrSYoRjzEPJU_&_t_=0.5056334310294486">青春石院</a>
      <a href="https://github.com/shicuizhen/fwpt-server">github</a>
      <a href="https://www.iconfont.cn/search/index?searchType=icon&q=%E5%B1%95%E7%A4%BA&page=2">iconfont</a>
    </li>
    <li class="more">
      <a href="https://www.cnblogs.com/clsl/p/12950791.html">Vue点赞</a>
      <a href="https://blog.csdn.net/qq_33322074/article/details/92026571">Jpa模糊</a>
      <a href="http://localhost:15672/#/">RabbitMQ</a>
    </li>
    <li class="more">
      <a href="https://element.eleme.cn/#/zh-CN">Element</a>
      <a href="https://www.jb51.net/article/172830.htm">Vue弹幕</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Bottom',
  data: function () {
    return {
    }
  },
  methods: {
    approve () {

    },
    contact () {
      alert('如有需要请发送邮件至17692151418@163.com！')
    }
  }
}
</script>

<style scoped>
.bottom{
  position: relative;
  width: 100%;
}
/*底色*/
.ys{
  z-index: 0;
  height: 135px;
  width: 112.8%;
  position: relative;
  left: -6.5%;
  bottom: 0;
  background-color: #E8E8E8;
}
.approve{
  z-index: 10;
  position: absolute;
  bottom: 20px;
  left: 180px;
}
.approve li{
  float: left;
  padding: 10px 30px;
  height: 68px;
}
.approve .approve_act{
  border-right: 1px solid #000;
  padding: 15px 50px;
}
.approve_act span{
  line-height: 68px;
}
.approve_act a svg{
  line-height: 68px;
  vertical-align: bottom;
  margin-bottom: 15px;
}
.approve .contact a{
  color: #3B3B3B;
}
.approve .contact a:hover{
  color: red;
}
.approve .more{
  border-right: none;
}
.approve li span{
  font-size: 14px;
  color: #000;
}
.approve p{
  margin-top: 10px;
  text-align: center;
}
.approve svg{
  color: #d81e06;
  font-size: 38px;
}
.approve p{
  font-size: 14px;
  color: #3B3B3B;
}
.approve a{
  cursor: pointer;
}
/*.more*/
.approve .more{
  padding: 17px 0 0 0;
}
.more a{
  /*float: left;*/
  width: 100px;
  display: block;
  font-size: 12px;
  padding: 5px 0;
  color: #025BFF;
}
.more a:hover{
  color: #d81e06;
}
</style>
