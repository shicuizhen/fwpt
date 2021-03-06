<template>
  <div class="mood center">
    <!--    <div class="select_mood">-->
    <!--      <ul class="icon_font">-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-caihong"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-ziyuan1"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-leidian"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-xue"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-xiaoyu"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-tianqi-yintian"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-tianqi3"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-tianqi4"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <svg class="icon" aria-hidden="true">-->
    <!--            <use xlink:href="#icon-taiyang"></use>-->
    <!--          </svg>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <div class="jdt">-->
    <!--        <el-progress :percentage="percentage" :color="customColor"></el-progress>-->
    <!--        <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>-->
    <!--        <el-progress :percentage="percentage" :color="customColors"></el-progress>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="block">
      <svg style="font-size: 100px" t="1614870627160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7013" width="200" height="200"><path d="M133 909.5c0-24.6 169.7-44.5 379-44.5s379 19.9 379 44.5S721.3 954 512 954s-379-19.9-379-44.5z" fill="#EDEDEE" p-id="7014"></path><path d="M444.9 224.7c192.4-35.8 377.4 91.2 413.2 283.6L800 519.1c-29.8-160.4-184-266.2-344.4-236.3-160.4 29.8-266.2 184-236.3 344.4l-58 10.8c-35.8-192.5 91.2-377.5 283.6-413.3z" fill="#7CD0A4" p-id="7015"></path><path d="M455.7 282.8c160.4-29.8 314.5 76 344.4 236.3L742 529.9C718.2 401.6 594.8 317 466.5 340.8 338.2 364.7 253.6 488 277.4 616.3l-58.1 10.8c-29.7-160.3 76.1-314.5 236.4-344.3z" fill="#FED572" p-id="7016"></path><path d="M466.5 340.8C594.8 317 718.2 401.6 742 529.9l-58 10.8C666.1 444.5 573.6 381 477.3 398.9c-96.2 17.9-159.7 110.4-141.8 206.6l-58.1 10.8c-23.8-128.2 60.9-251.6 189.1-275.5z" fill="#FC7968" p-id="7017"></path><path d="M477.3 398.9C573.6 381 666.1 444.5 684 540.7l-58.1 10.8C614 487.4 552.3 445.1 488.1 457c-64.1 11.9-106.5 73.6-94.5 137.7l-58.1 10.8c-17.9-96.2 45.6-188.7 141.8-206.6z" fill="#63A3FB" p-id="7018"></path><path d="M294.5 502c29.3 0 53.7 20.8 59.4 48.4l0.4 3.6 2.7-0.3c35.9 0 65 29.1 65 65.1 0 36-29.1 65.1-65 65.1-3.9 0-7.8-0.3-11.5-1l-3.4 4.1c-11.8 11.8-28 19.1-46 19.1-9 0-17.5-1.8-25.3-5.1l-7.7-4.2-2.8 3.4c-11 11-26.1 17.8-42.9 17.8s-31.9-6.8-42.9-17.8l-7.2-8.7-7.7 3c-5.7 1.8-11.7 2.7-18 2.7-33.5 0-60.6-27.2-60.6-60.7s27.1-60.7 60.6-60.7c4.2 0 8.3 0.4 12.2 1.2l5.8 1.8 1.8-5.9c9.2-21.8 30.7-37 55.9-37 4.2 0 8.3 0.4 12.2 1.2l8.8 2.7 0.3-1c9.3-21.5 30.8-36.8 55.9-36.8zM729.5 419c-29.3 0-53.7 20.8-59.4 48.4l-0.4 3.6-2.7-0.3c-35.9 0-65 29.1-65 65.1 0 36 29.1 65.1 65 65.1 3.9 0 7.8-0.3 11.5-1l3.4 4.1c11.8 11.8 28 19.1 46 19.1 9 0 17.5-1.8 25.3-5.1l7.7-4.2 2.8 3.4c11 11 26.1 17.8 42.9 17.8 16.7 0 31.9-6.8 42.9-17.8l7.2-8.7 7.7 3c5.7 1.8 11.7 2.7 18 2.7 33.5 0 60.6-27.2 60.6-60.7S915.9 493 882.4 493c-4.2 0-8.3 0.4-12.2 1.2l-5.8 1.8-1.8-5.9c-9.2-21.8-30.7-37-55.8-37-4.2 0-8.3 0.4-12.2 1.2l-8.8 2.7-0.3-1c-9.4-21.7-30.9-37-56-37z" fill="#A3DFFD" p-id="7019"></path></svg>
      <div class="show">
        <div class="barrages-drop">
          <vue-baberrage
            :isShow="barrageIsShow"
            :barrageList="barrageList"
            :maxWordCount="maxWordCount"
            :throttleGap="throttleGap"
            :loop="barrageLoop"
            :boxHeight="boxHeight"
            :messageHeight="messageHeight"
          >
          </vue-baberrage>
        </div>
      </div>
      <div class="pub">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
          <h3>发布今日心情</h3>
          <el-form-item label="说点什么" prop="content">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nick">
            <el-input v-model="form.nick"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import '../../assets/fonts/iconfont.js'
import Vue from 'vue'
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage'
Vue.use(vueBaberrage)
const axios = require('axios')
export default {
  name: 'Mood',
  data () {
    return {
      mood_data: '发表今日心情',
      form: {
        id: null,
        createTime: '',
        uid: localStorage.getItem('id'),
        nick: '',
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '您还什么都没写呢！', trigger: 'blur' }
        ],
        nick: [
          { required: true, message: '是要匿名嘛？要是不留名我可就自动匿名啦！', trigger: 'blur' },
          { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
        ]
      },
      // 弹幕
      msg: '马优晨就是个辣鸡~',
      barrageIsShow: true,
      messageHeight: 40,
      boxHeight: 280,
      barrageLoop: true,
      maxWordCount: 3,
      throttleGap: 5000,
      barrageList: [],
      // websocket
      websocket: null,
      imgs: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1019207699,3806058069&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3129262305,2392924864&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2359958300,2229951978&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=162702653,2316796194&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2821695739,3437580128&fm=26&gp=0.jpg'
      ]
    }
  },
  destroyed () {
    // 页面销毁时关闭ws连接
    if (this.websocket) {
      this.websocket.close() // 关闭websocket
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      var _this = this
      var form = _this.form
      if (form.nick === '') {
        form.nick = '匿名'
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: 'mood',
            data: form,
            header: {
              'Content-Type': 'multipart/form-data',
              charset: 'UTF-8'
            }
          }).then(resp => {
            if (resp.data.code === 200) {
              this.form = {
                id: null,
                createTime: '',
                uid: localStorage.getItem('id'),
                nick: '',
                content: ''
              }
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    },
    // 初始化weosocket
    initWebSocket () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持WebSocket')
        return false
      }
      var id = localStorage.getItem('id')
      if (id === null) {
        id = '未知用户'
      }
      const wsuri = 'ws://localhost:8180/mood/' + id // websocket地址
      this.websocket = new WebSocket(wsuri)
      this.websocket.onopen = this.websocketonopen
      this.websocket.onmessage = this.websocketonmessage
      this.websocket.onerror = this.websocketonerror
      this.websocket.onclose = this.websocketclose
    },
    // 连接成功
    websocketonopen () {
      console.log('WebSocket连接成功')
    },
    // 接收后端返回的数据
    websocketonmessage (e) {
      console.log('e:')
      console.log(e)
      console.log('后台发过来的数据：')
      console.log(e.data)
      this.barrageList.push({
        id: '',
        avatar: 'https://wx1.sinaimg.cn/large/0079i9Qsly1goa5vywetej308z08aaaq.jpg',
        msg: e.data,
        time: Math.abs(Math.random() * 10) % 10 + 10,
        type: MESSAGE_TYPE.NORMAL,
        barrageStyle: 'red'
      })
    },
    // 连接建立失败重连
    websocketonerror (e) {
      console.log('连接失败的信息：', e)
      this.initWebSocket() // 连接失败后尝试重新连接
    },
    // 关闭连接
    websocketclose (e) {
      console.log('断开连接', e)
    },
    // 输入框
    areaOnScroll () {
      this.mood_data = this.mood_data.slice(0, 130)
      alert('只能输入240个字哦！')
    },
    loadList () {
      var _this = this
      axios({
        method: 'get',
        url: 'mood/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.list = resp.data.data
          console.log('_this.list')
          console.log(_this.list)
          _this.list.forEach((v) => {
            _this.barrageList.push({
              barrageStyle: 'red',
              id: v.id,
              avatar: _this.imgs[v.id % 4],
              msg: v.nick + ':' + v.content,
              time: (v.id * 7) % 10 + 10,
              type: MESSAGE_TYPE.NORMAL
              // barrageStyle: v.barrageStyle
            })
          })
          _this.barrageList.forEach((v) => {
            console.log('barrageList:')
            console.log(v)
          })
        }
      }).catch(error => error)
    }
  },
  mounted () {
    this.loadList()
    this.initWebSocket()
  }
}
</script>

<style scoped>
.mood{
  padding-top: 20px;
}
/*进度条*/
.select_mood{
  width: 70%;
  margin: 0 10%;
  padding: 20px 0;
}
/*icon*/
.icon_font{
  height: 50px;
  padding: 20px;
}
.icon_font svg{
  font-size: 38px;
}
.icon_font svg:hover{
  font-size: 58px;
}
.icon_font li{
  height: 80px;
  width: 80px;
  float: left;
  position: relative;
}
icon_font svg{
  position: absolute;
  left: 50%;
  top: 50%;
}
/*block*/
.block{
  position: relative;
}
.block svg{
  position: absolute;
}
.show{
  display: inline-block;
  height: 300px;
  width: 99%;
  border-top: 2px solid #FFCE54;
  border-bottom: 2px solid #FFCE54;
  position: relative;
}
.show .ybp{
  position: absolute;
  left: 50%;
  top: 60px;
  margin-left: -66px;
}
.block .pub{
  width: 60%;
}
.block h3{
  font-size: 24px;
  padding: 40px 0 20px 0;
  font-family: 隶书;
  color: #7CD0A4;
}
/*弹幕*/
.blue {
  border-radius: 100px;
  background: #e6ff75;
  color: #fff;
}
.green {
  border-radius: 100px;
  background: #75ffcd;
  color: #fff;
}
.mood .block .red {
  border-radius: 100px;
  background: #e68fba;
  color: #fff;
}
.yellow {
  border-radius: 100px;
  background: #dfc795;
  color: #fff;
}
.show .baberrage-stage {
  position: absolute;
  width: 100%;
  height: 312px;
  overflow: hidden;
  top: 0;
  margin-top: 30px;
}
.show .baberrage-item .normal{
  background: red;
}
</style>
