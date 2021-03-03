<template>
  <div class="lost center">
    <div style="height: 18px;background-color:#fff;"></div>
    <div class="lunbo" >
      <a href="/lost_publish">发布信息</a>
      <svg t="1613185669871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4561" width="200" height="200"><path d="M260.7 431.1h60.4v258.2h-60.4zM634.3 795.5l-190.9-88.4c-8.1-3.7-13.2-11.5-13.2-19.9V442.4c0-8.5 5.1-16.2 13.2-19.9l190.9-88.4c15.6-7.2 33.9 3.5 33.9 19.9v421.5c0 16.5-18.3 27.2-33.9 20z" fill="#25B195" p-id="4562"></path><path d="M290.5 709.4h-50.3c-26.6 0-48.2-21.6-48.2-48.2V407.8c0-26.6 21.6-48.2 48.2-48.2h50.3c26.6 0 48.2 21.6 48.2 48.2v253.4c-0.1 26.6-21.7 48.2-48.2 48.2z m-50.4-317.7c-8.9 0-16.1 7.2-16.1 16.1v253.4c0 8.9 7.2 16.1 16.1 16.1h50.3c8.9 0 16.1-7.2 16.1-16.1V407.8c0-8.9-7.2-16.1-16.1-16.1h-50.3zM644 815c-7.1 0-14.2-1.4-20.8-4.1l-236.8-98.6c-17.7-7.4-29.1-23.6-29.1-41.3V398.1c0-17.8 11.4-34 29.1-41.3l236.8-98.6c16.5-6.9 35.7-5.1 50.3 4.7 12.9 8.6 20.3 22 20.3 36.6v470.1c0 14.7-7.4 28-20.3 36.6-8.7 5.8-19.1 8.8-29.5 8.8z m0-519.6c-1.6 0-3.2 0.3-4.9 1L402.3 395c-2.7 1.1-3.6 2.7-3.6 3.1V671c0 0.4 0.9 2 3.6 3.1l236.8 98.6c4.3 1.8 8.9 0.8 11.5-0.9 0.9-0.6 1.9-1.6 1.9-2.2V299.5c0-0.7-1-1.6-1.9-2.2-1.6-1.1-4-1.9-6.6-1.9zM718.4 517h149.1v41.9H718.4zM725.412 383.092L830.84 277.663l29.628 29.628L755.039 412.72zM755.047 663.173l105.429 105.429-29.628 29.628L725.42 692.8z" fill="#595857" p-id="4563"></path></svg>
      <h3>
        最新播报：
      </h3>
      <div class="marquee-box">
        <ul class="marquee-ul" id="marquee-ul" v-if="socketPush">
          <li class="marquee-list" v-for='(value,key) in socketPush' v-bind:key="key" v-html="value" :id="key==2?'marquee':''"></li>
        </ul>
      </div>
    </div>
    <div class="search">
      <div class="key-search">
        <input v-model="search_key" type="text" value="搜索" onfocus="if (value == '搜索'){value =''}" onblur="if (value ==''){value='搜索'}">
        <p @click="search()" class="search_but">搜索</p>
        <p>大家都在找：</p>
        <ul>
          <li><a @click="toSearch('身份证')">身份证</a></li>
          <li><a @click="toSearch('学生证')">学生证</a></li>
          <li><a @click="toSearch('银行卡')">银行卡</a></li>
        </ul>
      </div>
      <div class="sort-search">
<!--        <table border="1" width="100%" height="16em" cellpadding="0" align="center">-->
<!--          <tr>-->
<!--            <td>1</td>-->
<!--            <td>学院路</td>-->
<!--            <td>90</td>-->
<!--            <td>20</td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>2</td>-->
<!--            <td>学院路</td>-->
<!--            <td>90</td>-->
<!--            <td>20</td>-->
<!--          </tr>-->
<!--        </table>-->
      </div>
    </div>
<!--    ===============================-->
    <div class="bread">
      <!--面包屑-->
<!--
      <ul class="fl sui-breadcrumb">
        <li><span>全部结果:</span></li>
        <li ><a href="#">手机</a></li>
        <li ><span>手机通讯</span></li>
      </ul>
-->
      <!--已选择过滤项-->
<!--
      <ul class="tags-choose">
        <li class="tag">
          品牌:<span style="color: red">apple</span>
          <i class="sui-icon icon-tb-close"></i>
        </li>
        <li class="tag">
          内存:<span style="color: red">4G</span>
          <i class="sui-icon icon-tb-close"></i>
        </li>
      </ul>
      <div class="clearfix"></div>

-->
    </div>
    <!--selector-->
    <div class="selector">
      <div class="row">
        <div class="key">查询类型</div>
        <ul class="value">
          <li>
            <a :class="this.searchBy['1'] == '0' ? 'red' : ''"
               @click="addSearchBy(1,0)">寻物信息</a>
          </li>
          <li>
            <a :class="this.searchBy['1'] == '1' ? 'red' : ''"
               @click="addSearchBy(1,1)">招领信息</a>
          </li>
        </ul>
        <div style="clear: both"></div>
      </div>
      <div class="row">
        <div class="key">物品类型</div>
        <ul class="value">
          <li v-for="kind in kindIds" v-bind:key="kind.id">
            <a :class="hasSelected(2, kind.id) ? 'red' : ''"
              @click="addSearchBy(2, kind.id)">{{ kind.name }}</a>
          </li>
        </ul>
        <div style="clear: both"></div>
      </div>
      <div class="row">
        <div class="key">地点</div>
        <ul class="value">
          <li v-for="place in placeIds" v-bind:key="place.id">
            <a :class="hasSelected(3, place.id) ? 'red' : ''" @click="addSearchBy(3,place.id)">{{ place.name }}</a>
          </li>
        </ul>
        <div style="clear: both"></div>
      </div>
      <div class="row">
        <div class="key">时间</div>
        <ul class="value">
          <input type="date" value="2021-01-01" v-model="time1"/>&nbsp;至
          <input type="date" value="2021-01-01" v-model="time2"/>
        </ul>
        <div style="clear: left"></div>
      </div>
    </div>
    <div class="show">
      <div class="title">
        <svg t="1613312678015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5178" width="200" height="200"><path d="M926.65 378.45c-1.87-5.75-9.24-10-20.23-11.56l-204-29.64c-30.35-4.41-66.08-30.37-79.65-57.87L531.51 94.5c-4.91-10-11.2-15.67-17.25-15.67S501.93 84.54 497 94.5l-91.22 184.87c-13.57 27.5-49.31 53.46-79.65 57.87l-204 29.64c-11 1.6-18.36 5.81-20.23 11.56s1.62 13.49 9.57 21.24l147.62 143.9C281 565 294.69 607 289.51 637.23l-34.85 203.18c-1.88 10.94-0.15 19.26 4.74 22.81s13.33 2.63 23.16-2.54L465 764.76c13.57-7.13 31.4-10.7 49.23-10.7s35.65 3.57 49.23 10.7L746 860.69c9.83 5.17 18.27 6.09 23.16 2.54s6.62-11.87 4.74-22.81L739 637.23c-5.18-30.23 8.46-72.23 30.43-93.64l147.62-143.9c7.95-7.75 11.46-15.49 9.6-21.24z m-283 151.28a151.4 151.4 0 0 1-54.32 50.91 156 156 0 0 1-150.19 0 151.4 151.4 0 0 1-54.33-50.92 13 13 0 1 1 22-14c23.17 36.38 63.32 58.11 107.41 58.11s84.24-21.72 107.41-58.1a13 13 0 0 1 22 14z" fill="#95C4FF" p-id="5179" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path><path d="M926.18 409c11.81-11.52 16.38-23.81 12.87-34.62s-14.43-18.03-30.76-20.38l-204-29.64c-26.15-3.8-58.13-27-69.83-50.73l-91.25-184.9c-7.3-14.79-17.58-22.94-28.95-22.94s-21.65 8.15-28.95 22.94l-91.23 184.86c-11.7 23.7-43.67 46.93-69.83 50.73L120.24 354c-16.33 2.37-27.25 9.63-30.76 20.44s1.06 23.1 12.87 34.62L250 552.93c18.93 18.45 31.14 56 26.67 82.09L241.8 838.21c-2.79 16.26 0.74 28.89 9.93 35.57s22.3 6.13 36.9-1.55L471.1 776.3c23.39-12.3 62.92-12.3 86.31 0l182.49 95.94c7.83 4.12 15.24 6.19 21.84 6.19a25.11 25.11 0 0 0 15.07-4.64c9.19-6.68 12.72-19.31 9.93-35.57L751.88 635c-4.47-26 7.75-63.64 26.67-82.09zM739 637.23l34.85 203.19c1.88 10.94 0.15 19.26-4.74 22.81s-13.33 2.63-23.16-2.54l-182.46-95.93c-13.57-7.14-31.4-10.7-49.23-10.7s-35.66 3.57-49.23 10.7l-182.47 95.93c-9.83 5.17-18.27 6.09-23.16 2.54s-6.62-11.87-4.74-22.81l34.85-203.19C294.69 607 281 565 259.08 543.59l-147.62-143.9c-8-7.75-11.44-15.49-9.57-21.24s9.24-10 20.23-11.56l204-29.64c30.35-4.41 66.08-30.37 79.65-57.87L497 94.5c4.91-10 11.2-15.67 17.25-15.67s12.33 5.71 17.25 15.67l91.24 184.87c13.57 27.5 49.31 53.46 79.65 57.87l204 29.64c11 1.6 18.36 5.81 20.23 11.56s-1.62 13.49-9.57 21.24l-147.6 143.91C747.49 565 733.84 607 739 637.23z" fill="#2c2c2c" p-id="5180"></path><path d="M639.69 511.71a13 13 0 0 0-18 4c-23.17 36.38-63.32 58.1-107.41 58.1S430 552.08 406.86 515.7a13 13 0 1 0-22 14 151.4 151.4 0 0 0 54.33 50.92 156 156 0 0 0 150.19 0 151.4 151.4 0 0 0 54.32-50.91 13 13 0 0 0-4.01-18z" fill="#2c2c2c" p-id="5181" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path></svg>
        <h3>信息展示</h3>
      </div>
      <ul class="card">
        <li v-for = "(item) in lostInformation" v-bind:key="item.id">
          <i style="font-weight: 800; color:#FFF743; font-size: 24px;" class="icon iconfont" v-if="item.typeId === 0">&#xe66a;</i>
          <i style="font-weight: 400; color:#71AFFF; font-size: 20px;" class="icon iconfont" v-if="item.typeId === 1">&#xe634;</i>
<!--          <svg t="1613353417192" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17018" width="200" height="200"><path d="M553 222.3v-32c0-28-16.7-48-40-48-20 0-40 20-40 48v32" fill="#f4ea2a" p-id="17019" data-spm-anchor-id="a313x.7781069.0.i26" class="selected"></path><path d="M563 222.3h-20v-32c0-22.4-12.3-38-30-38s-30 20-30 38v32h-20v-32c0-15.6 5.3-30.2 15-41.1 9.5-10.7 22.2-16.9 35-16.9 29 0 50 24.4 50 58v32z" fill="#6D5346" p-id="17020"></path><path d="M473 402.3v60" fill="#FFF061" p-id="17021"></path><path d="M463 402.3h20v60h-20z" fill="#6D5346" p-id="17022"></path><path d="M553 462.3v-60" fill="#FFF061" p-id="17023"></path><path d="M543 402.3h20v60h-20z" fill="#6D5346" p-id="17024"></path><path d="M473 389.6v492.7h80V389.6" fill="#f4ea2a" p-id="17025" data-spm-anchor-id="a313x.7781069.0.i24" class="selected"></path><path d="M563 892.3H463V389.6h20v482.7h60V389.6h20z" fill="#6D5346" p-id="17026"></path><path d="M771.7 402.3H213l32.5-90.9-32.5-89.1h558.7L893 311.4z" fill="#d81e06" p-id="17027" data-spm-anchor-id="a313x.7781069.0.i22" class=""></path><path d="M775 412.3H198.8l36-100.9-36.1-99.1H775l134.8 99-134.8 101z m-547.8-20h541.2l107.9-80.9-107.8-79.1H227.3l28.8 79-28.9 81z" fill="#6D5346" p-id="17028"></path><path d="M254.3 462.3H813l-32.5 80 32.5 80H254.3l-121.3-80z" fill="#d81e06" p-id="17029" data-spm-anchor-id="a313x.7781069.0.i23" class=""></path><path d="M827.8 632.3H251.3l-136.5-90 136.5-90h576.5l-36.5 90 36.5 90z m-570.5-20h540.8l-28.4-70 28.4-70H257.3l-106.1 70 106.1 70z" fill="#6D5346" p-id="17030"></path></svg>-->
          <h3>{{ item.type2 }}</h3>
          <h4>{{ item.createBy }}{{ item.type1 }}{{ item.name }}</h4>
          <p>描述：{{ item.description }}</p>
          <p>类型：{{ item.kindId }}-{{ item.name }}</p>
          <p>时间：{{ item.lostTime }}</p>
          <p>地点：{{ item.placeId }}</p>
          <p>联系方式：{{ item.telephone }}</p>
        </li>
        <div style="clear: both"></div>
      </ul>
    </div>
  </div>
</template>
<script>
import '../../assets/css/lost.css'
const axios = require('axios')
export default {
  name: 'Lost',
  data: function () {
    return {
      search_key: '',
      time1: null,
      time2: null,
      lostInformation: {},
      socketPush: [],
      kindIds: {},
      placeIds: {},
      searchBy: {
        1: null,
        2: null,
        3: null
      },
      websock: null
    }
  },
  destroyed () {
    // 页面销毁时关闭ws连接
    if (this.websock) {
      this.websock.close() // 关闭websocket
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
      const wsuri = 'ws://localhost:8180/webSocket/' + id // websocket地址
      console.log('wsuri:' + wsuri)
      this.websock = new WebSocket(wsuri)
      this.websock.onopen = this.websocketonopen
      this.websock.onmessage = this.websocketonmessage
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
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
      this.socketPush.push(e.data)
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

    // 对热门搜索进行搜索
    toSearch (key) {
      this.search_key = key
      this.search()
    },
    addSearchBy (type, value) {
      if (this.searchBy[type] !== null) {
        // 不为空，就说明已经有选中的，判断当前选中的value和已经存在的是不是一样，
        if (this.searchBy[type] !== value) {
          // 如果不同就重新赋值
          this.$set(this.searchBy, type, value)
        } else {
          // 如果相同，就置为null，
          this.$set(this.searchBy, type, null)
        }
      } else {
        // 当前条件还没有选，赋初值
        this.$set(this.searchBy, type, value)
      }
    },
    hasSelected (key, value) {
      if (this.searchBy[key] !== null && this.searchBy[key] === value) {
        return true
      } else {
        return false
      }
    },
    search () {
      console.log('time1:' + this.time1)
      console.log('time2:' + this.time2)
      axios({
        method: 'post',
        // url: 'lostInformation/getSearch',
        url: 'lostInformation/mybatisSearch',
        data: {
          id: 0,
          type: this.searchBy[1],
          kind_id: this.searchBy[2],
          place_id: this.searchBy[3],
          lost_time1: this.time1,
          lost_time2: this.time2,
          pageNo: 5,
          pageSize: 5,
          search_key: this.search_key
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.lostInformation = resp.data.data.content
          console.log('=======================')
          console.log(resp.data.data)
          // _this.lostInformation = resp.data.data
          this.searchBy = {
            1: null,
            2: null,
            3: null
          }
          this.time1 = null
          this.time2 = null
        }
      }).catch(error => error)
    },
    loadLostInformation () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.lostInformation = resp.data.data
        }
      }).catch(error => error)
    },
    // 轮播图
    runMarquee () {
      // 文字宽度，ul盒子，位移
      var width, marquee, disx
      width = document.getElementById('marquee-ul').getBoundingClientRect().width - 300
      marquee = document.getElementById('marquee-ul')
      disx = 0 // 位移距离
      // 设置位移
      setInterval(() => {
        disx-- // disx-=1; 滚动步长
        if (-disx >= width) { // 如果位移超过文字宽度，则回到起点
          disx = 30 // marquee-list中li的margin值
        }
        // marquee.style.transform = 'translateX(' + disx + 'px)'
        marquee.style.left = disx + 'px'
      }, 30) // 滚动速度
    },
    loadlunboData () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/lunbodata'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.socketPush = resp.data.data
        }
      }).catch(error => error)
    },
    loadKindId () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostKind/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.kindIds = resp.data.data
        }
      }).catch(error => error)
    },
    loadPlaceId () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostPlace/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.placeIds = resp.data.data
        }
      }).catch(error => error)
    }
  },
  // 页面加载时触发的函数
  mounted: function () {
    // 延时滚动
    setTimeout(() => {
      this.runMarquee()
    }, 3000)
    this.loadLostInformation()
    // 加载轮播滚动中的数据
    this.loadlunboData()
    // 加载搜索数据
    this.loadKindId()
    this.loadPlaceId()
  },
  created () {
    this.initWebSocket()
  }
}
</script>
<style>
.row .value .red{
  color: #D81E06;
}
.row .value .blue{
  color: blue;
}
.search_but{
  border: 1px solid #767676;
  padding: 0px 5px;
  /*color: #fff;*/
  /*background-color: #000000;*/
}
.search_but:hover{
  cursor: pointer;
  border: 1px solid #000000;
  color: #000;
  background-color: #F1F1F1;
  /*border: 1px solid #767676;*/
}
.key-search li{
  cursor: pointer;
}
</style>
