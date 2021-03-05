<template>
  <div class="mood center">
    <div class="select_mood">
      <ul class="icon_font">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caihong"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ziyuan1"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-leidian"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xue"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoyu"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianqi-yintian"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianqi3"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianqi4"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-taiyang"></use>
          </svg>
        </li>
      </ul>
      <div class="jdt">
        <el-progress :percentage="percentage" :color="customColor"></el-progress>
        <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
        <el-progress :percentage="percentage" :color="customColors"></el-progress>
      </div>
    </div>
    <div class="block">
      <svg style="font-size: 100px" t="1614870627160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7013" width="200" height="200"><path d="M133 909.5c0-24.6 169.7-44.5 379-44.5s379 19.9 379 44.5S721.3 954 512 954s-379-19.9-379-44.5z" fill="#EDEDEE" p-id="7014"></path><path d="M444.9 224.7c192.4-35.8 377.4 91.2 413.2 283.6L800 519.1c-29.8-160.4-184-266.2-344.4-236.3-160.4 29.8-266.2 184-236.3 344.4l-58 10.8c-35.8-192.5 91.2-377.5 283.6-413.3z" fill="#7CD0A4" p-id="7015"></path><path d="M455.7 282.8c160.4-29.8 314.5 76 344.4 236.3L742 529.9C718.2 401.6 594.8 317 466.5 340.8 338.2 364.7 253.6 488 277.4 616.3l-58.1 10.8c-29.7-160.3 76.1-314.5 236.4-344.3z" fill="#FED572" p-id="7016"></path><path d="M466.5 340.8C594.8 317 718.2 401.6 742 529.9l-58 10.8C666.1 444.5 573.6 381 477.3 398.9c-96.2 17.9-159.7 110.4-141.8 206.6l-58.1 10.8c-23.8-128.2 60.9-251.6 189.1-275.5z" fill="#FC7968" p-id="7017"></path><path d="M477.3 398.9C573.6 381 666.1 444.5 684 540.7l-58.1 10.8C614 487.4 552.3 445.1 488.1 457c-64.1 11.9-106.5 73.6-94.5 137.7l-58.1 10.8c-17.9-96.2 45.6-188.7 141.8-206.6z" fill="#63A3FB" p-id="7018"></path><path d="M294.5 502c29.3 0 53.7 20.8 59.4 48.4l0.4 3.6 2.7-0.3c35.9 0 65 29.1 65 65.1 0 36-29.1 65.1-65 65.1-3.9 0-7.8-0.3-11.5-1l-3.4 4.1c-11.8 11.8-28 19.1-46 19.1-9 0-17.5-1.8-25.3-5.1l-7.7-4.2-2.8 3.4c-11 11-26.1 17.8-42.9 17.8s-31.9-6.8-42.9-17.8l-7.2-8.7-7.7 3c-5.7 1.8-11.7 2.7-18 2.7-33.5 0-60.6-27.2-60.6-60.7s27.1-60.7 60.6-60.7c4.2 0 8.3 0.4 12.2 1.2l5.8 1.8 1.8-5.9c9.2-21.8 30.7-37 55.9-37 4.2 0 8.3 0.4 12.2 1.2l8.8 2.7 0.3-1c9.3-21.5 30.8-36.8 55.9-36.8zM729.5 419c-29.3 0-53.7 20.8-59.4 48.4l-0.4 3.6-2.7-0.3c-35.9 0-65 29.1-65 65.1 0 36 29.1 65.1 65 65.1 3.9 0 7.8-0.3 11.5-1l3.4 4.1c11.8 11.8 28 19.1 46 19.1 9 0 17.5-1.8 25.3-5.1l7.7-4.2 2.8 3.4c11 11 26.1 17.8 42.9 17.8 16.7 0 31.9-6.8 42.9-17.8l7.2-8.7 7.7 3c5.7 1.8 11.7 2.7 18 2.7 33.5 0 60.6-27.2 60.6-60.7S915.9 493 882.4 493c-4.2 0-8.3 0.4-12.2 1.2l-5.8 1.8-1.8-5.9c-9.2-21.8-30.7-37-55.8-37-4.2 0-8.3 0.4-12.2 1.2l-8.8 2.7-0.3-1c-9.4-21.7-30.9-37-56-37z" fill="#A3DFFD" p-id="7019"></path></svg>
      <div class="write">
        <textarea @scroll="areaOnScroll()"
                  v-model="mood_data"
                  name="txt" clos="700" rows="4" warp="virtual">
        </textarea>
        <span @click="saveMood()" href="" title="放飞心情">
          <svg t="1614868237270" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6362" width="200" height="200"><path d="M933.546667 198.826667c-9.045333-13.653333-21.504-9.045333-22.528-8.874667L102.912 390.997333c-7.509333 1.877333-13.312 7.68-15.36 15.018667-2.048 7.509333 0 15.36 5.461333 20.821333l152.405333 151.552 43.690667 238.933333c0 0.512 1.706667 14.165333 16.042667 16.896 11.946667 2.218667 17.92-3.754667 18.261333-3.925333l97.450667-77.482667 76.288 75.946667c4.608 4.437333 10.752 6.826667 17.066667 6.144 6.314667-0.682667 11.946667-3.925333 15.701333-9.386667l403.968-602.794667C934.4 221.866667 941.226667 210.602667 933.546667 198.826667zM150.016 423.253333l611.84-152.064L268.970667 541.525333 150.016 423.253333zM314.538667 718.677333l-25.429333-139.434667 348.16-190.976L353.621333 595.456c0 0-3.754667 3.072-5.290667 5.12-1.365333 1.877333-2.730667 6.314667-2.730667 6.314667L314.538667 718.677333zM370.858667 675.84l30.890667 37.717333-53.248 42.325333L370.858667 675.84zM509.952 778.581333l-125.098667-153.088 0 0L831.146667 299.349333 509.952 778.581333z" p-id="6363"></path></svg>
        </span>
        <span class="load">加载今日心情进度条</span>
        <div class="jdt_but">
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
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
<!--        仪表盘-->
<!--        <div class="ybp">-->
<!--          <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>-->
<!--          <div>-->
<!--            <el-button-group>-->
<!--              <el-button icon="el-icon-minus" @click="decrease"></el-button>-->
<!--              <el-button icon="el-icon-plus" @click="increase"></el-button>-->
<!--            </el-button-group>-->
<!--          </div>-->
<!--        </div>-->
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
      // 进度条
      percentage: 20,
      // customColor: '#409eff',
      // customColor: '#00FFFF',
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      // 弹幕
      msg: '马优晨就是个辣鸡~',
      barrageIsShow: true,
      messageHeight: 3,
      boxHeight: 150,
      barrageLoop: true,
      maxWordCount: 3,
      throttleGap: 5000,
      barrageList: [],
      moodPush: [],
      // websocket
      websocket: null
    }
  },
  destroyed () {
    // 页面销毁时关闭ws连接
    if (this.websocket) {
      this.websocket.close() // 关闭websocket
    }
  },
  methods: {
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
      this.moodPush.push(e.data)
      this.barrageList.push({
        id: 1,
        avatar: '',
        msg: e.data,
        time: Math.abs(Math.random() * 10),
        type: MESSAGE_TYPE.NORMAL,
        barrageStyle: 'red'
      })
      console.log(Math.abs(Math.random() * 10))
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
    // 进度条
    customColorMethod (percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    increase () {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease () {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    },
    // 输入框
    areaOnScroll () {
      this.mood_data = this.mood_data.slice(0, 130)
      alert('只能输入240个字哦！')
    },
    // 弹幕
    addToList () {
      // const list = [
      //   {
      //     id: 1,
      //     avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
      //     msg: '33333333',
      //     time: 13,
      //     barrageStyle: 'red'
      //   }
      // ]
      const msg = {
        id: 1,
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
        msg: '33333333',
        time: 13,
        barrageStyle: 'red'
      }
      this.barrageList.push({
        id: msg.id,
        avatar: msg.avatar,
        msg: msg.msg,
        time: msg.time,
        type: MESSAGE_TYPE.NORMAL,
        barrageStyle: msg.barrageStyle
      })
    },
    // 获取最新发布的十条心情
    // getMood () {
    // },
    saveMood () {
      var _this = this
      axios({
        method: 'post',
        url: 'mood',
        data: {
          id: null,
          content: _this.mood_data,
          createTime: '',
          nick: '',
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.mood_data = '发表今日心情'
          console.log('成功保存')
        }
      }).catch(error => error)
    }
  },
  mounted () {
    this.addToList()
    // this.initWebSocket()
  }
}
</script>

<style scoped>
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
.show{
  display: inline-block;
  height: 300px;
  width: 48%;
  border: 2px solid #FFCE54;
  border-radius: 20px;
  position: relative;
}
.show .ybp{
  position: absolute;
  left: 50%;
  top: 60px;
  margin-left: -66px;
}
/*write*/
.write{
  display: inline-block;
  height: 300px;
  width: 48%;
  border: 2px solid #000;
  border-radius: 20px;
}
/*write*/
.write{
  float: right;
  background-image: url('../../assets/images/bj.png');
  position: relative;
  /*overflow: hidden;*/
}
.write .load{
  position: absolute;
  bottom: 22px;
  left: 30px;
  color: #404040;
  font-size: 18px;
  font-family: 隶书;
}
.write .jdt_but{
  position: absolute;
  bottom: 18px;
  left: 200px;
}
.write .jdt_but .el-button {
  padding: 8px 20px;
}
.write span svg{
  font-size: 38px;
  color: #6AB2FC;
  position: absolute;
  bottom: 5px;
  right: 20px;
}
.write span svg:hover{
  font-size: 42px;
  right: 15px;
}
.write textarea{
  padding-right: 25px;
  padding-top: 10px;
  line-height: 41px;
  padding-left: 20px;
  background-image: url('../../assets/images/bj.png');
  width: 490px;
  height: 300px;
  border: 0px;
  background-color: #b3d4fc;
  /*resize: none;*/
  /*overflow:hidden;*/
}
.write textarea:focus {
  /*outline: -webkit-focus-ring-color auto 0px;*/
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
.red {
  border-radius: 100px;
  background: #e68fba;
  color: #fff;
}
.yellow {
  border-radius: 100px;
  background: #dfc795;
  color: #fff;
}
.baberrage-stage {
  position: absolute;
  width: 100%;
  height: 212px;
  overflow: hidden;
  top: 0;
  margin-top: 130px;
}
</style>
