<template>
<div class="my_page center">
  <div class="my">
    <img src="../../assets/images/3.jpeg" alt="">
    <div class="data">
      <div class="nick">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhaoxiangji"></use>
        </svg>
        <h3>{{ mime.nick }}</h3>
        <svg v-if="mime.sex === 0" class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test2"></use>
        </svg>
        <svg v-if="mime.sex === 1" class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <a href="">编辑个人资料</a>
      </div>
      <div class="name">
        <div>姓名：{{ mime.name }}</div>
        <p>学号：{{ mime.sno }}</p>
        <p>年级：{{ mime.grade }}级</p>
        <p>专业：{{ mime.major }}</p>
        <p>生日：{{ mime.birthday }}</p>
        <p>手机号：{{ mime.phone }}</p>
        <p>邮箱：{{ mime.email }}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'MyPage',
  data () {
    return {
      mime: {}
    }
  },
  methods: {
    loadMy () {
      var _this = this
      axios({
        method: 'post',
        url: 'users/datas/uid',
        params: {
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          console.log(resp.data.data)
          _this.mime = resp.data.data
        }
      }).catch(error => error)
    }
  },
  mounted: function () {
    this.loadMy()
  }
}
</script>

<style scoped>
.my img{
  position: absolute;
  top: 50px;
  left: 10px;
  height: 138px;
  width: 140px;
  border: 1px solid #C9C9C9;
}
.my .data{
  padding-top: 35px;
  padding-left: 200px;
}
.nick{
  padding: 10px 5px;
  position: relative;
  width: 98%;
  border-bottom: 2px solid #BBBBBB;
}
.nick h3{
  display: inline-block;
}
.nick svg{
  /*float: left;*/
  /*background-color: #bd2c00;*/
}
.nick h3{
  font-size: 24px;
  font-weight: 400;
}
.nick a{
  font-size: 12px;
  border: 1px solid #3A3637;
  border-radius: 5px;
  padding: 3px 5px;
  position: absolute;
  top: 18px;
  right: 33px;
}
.name{
  padding: 16px 5px;
  font-size: 13px;
  width: 62%;
}
.name div{
  margin-bottom: 12px;
}
.name p{
  width: 200px;
  float: left;
  font-size: 13px;
  margin-bottom: 12px;
}
</style>
