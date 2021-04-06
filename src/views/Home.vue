<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item v-for="item in images" :key="item.img">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
    <div>
      <ul class="h_ques">
        <span>热门问题</span>
        <li @click="toQuesDetail(item.id)"
            v-for = "(item) in hotQues" v-bind:key="item.id">
          <a href="">
            <div>
              <svg t="1612608284273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11976" width="200" height="200"><path d="M859.9104 609.92512l0 45.6c-0.67968 2.21952-1.5104 4.4352-1.9648 6.70464-4.66048 24.09984-7.28448 48.82944-14.31552 72.22016-20.84992 69.02016-59.92064 126.53952-114.6944 173.50016-42.24512 36.2496-89.7856 62.36544-144.1344 75.22048-17.87008 4.23552-36.19456 6.73024-54.32064 10.0352l-45.5744 0c-2.21952-0.6848-4.49024-1.72032-6.75456-1.87008-48.12544-2.9952-93.72544-15.52512-136.50048-37.38496-80.86528-41.18528-139.19488-102.5152-165.83552-190.74048-5.67424-18.8544-8.03968-38.62016-11.9744-57.97504l0-43.50976c1.7152-10.69056 3.2-21.47456 5.21984-32.16 8.61952-46.68544 29.36576-88.0256 56.83968-126.19008 25.91488-35.92064 53.44-70.70464 78.016-107.53536 26.56896-39.95008 39.424-84.2944 31.88992-132.9152-1.4848-9.60512-2.87488-19.20896-4.33536-28.76416 0.98048-0.25088 1.9648-0.45056 2.9504-0.73088 59.31008 62.16064 68.96512 138.46528 60.49408 220.92032 2.17088-2.31936 3.98592-3.93472 5.37088-5.79968 50.33984-68.08448 71.96416-143.29984 55.55456-227.54688-10.42944-53.58976-32.99456-101.76512-70.32448-141.81504C369.3056 61.84576 349.69472 47.65568 331.61984 32l18.65472 0c1.536 0.62976 2.976 1.7152 4.53504 1.86496 32.82048 2.81984 63.65056 12.95488 93.02016 27.2 67.17056 32.51584 121.62048 80.58496 167.17056 139.22048 66.9504 86.27968 110.48448 181.99424 119.10528 292.19968 3.30496 42.06976-0.9856 82.95552-12.19968 123.2896-4.23552 15.27552-10.21056 30.04544-15.68 45.94944 21.72544-9.25056 38.24-23.38944 50.9952-41.7152 38.04032-54.77504 48.67456-115.85536 40.05504-183.38048 2.80064 3.24992 4.23552 4.53504 5.21472 6.14528 22.91456 36.19968 40.05504 74.81472 49.0048 116.78464C855.05024 576.17024 857.11488 593.1648 859.9104 609.92512M501.56544 529.61536c-0.85504 0.60544-1.79072 1.2352-2.67008 1.84064-1.18528 16.64-2.06976 33.30048-3.68 49.93536-2.37056 25.38496-8.44544 49.85984-20.32 72.62464-14.52032 27.87968-38.7904 45.21984-65.69088 59.01056-29.00992 14.9696-47.28448 36.34944-49.65504 70.10048-2.46912 34.70976 7.96544 63.86944 35.94496 85.20064 26.21568 19.96032 56.84096 26.4704 89.3056 25.38496 51.82976-1.6896 90.4448-26.32064 105.92512-78.1952 11.11552-37.23008 9.30048-74.71488 1.86496-112.19456-10.16064-51.37536-28.76544-99.26528-60.60032-141.2352C523.04512 550.36032 511.7504 540.40448 501.56544 529.61536" p-id="11977" fill="#d81e06"></path></svg>
              <span>{{ item.num }}</span>
            </div>
            <p class="tit">{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </a>
        </li>
      </ul>
      <ul class="h_lost" v-if="socketPush">
        <span>失物招领</span>
        <li @click="toLost" v-for='(value,key) in socketPush' v-bind:key="key">
          <p class="tit">{{value.str}}</p>
          <p>地点{{value.place}}</p>
          <p>{{value.time}}</p>
        </li>
      </ul>
      <ul class="h_mood">
        <span>心情话板</span>
        <li @click="toMood()" v-for='(value,key) in barrageList' v-bind:key="key">
          {{ value.msg }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'Home',
  data: function () {
    return {
      refresh: 1,
      images: [
        { img: require('../assets/images/1.jpeg') },
        { img: require('../assets/images/2.jpeg') },
        { img: require('../assets/images/3.jpeg') },
        { img: require('../assets/images/4.jpeg') },
        { img: require('../assets/images/5.jpeg') }
      ],
      hotQues: {},
      socketPush: [],
      barrageList: []
    }
  },
  methods: {
    // 问题咨询
    // 路由跳转
    toQuesDetail (qid) {
      localStorage.setItem('qid', JSON.stringify(qid))
      this.$router.push({
        path: '/question_detail/' + qid
      })
    },
    loadHotQues () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/hotdatas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.hotQues = resp.data.data
          console.log('----------------')
          console.log(_this.hotQues)
        }
      }).catch(error => error)
    },
    // 失物招领
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
    loadMoodList () {
      var _this = this
      axios({
        method: 'get',
        url: 'mood/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.list = resp.data.data
          _this.list.forEach((v) => {
            _this.barrageList.push({
              msg: v.nick + ':' + v.content
            })
          })
        }
      }).catch(error => error)
    },
    // 页面跳转
    toMood () {
      this.$router.push({
        path: '/mood'
      })
    },
    toLost () {
      this.$router.push({
        path: '/lost'
      })
    }
  },
  mounted: function () {
    this.loadHotQues()
    this.loadlunboData()
    this.loadMoodList()
  }
}
</script>
<style>
  .home{
    height: 1200px;
  }
  .home .el-carousel--horizontal {
    overflow-x: hidden;
    overflow: hidden;
  }
  .el-carousel__container{
    height: 512px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home .el-carousel__indicators--outside {
    position: absolute;
  }
  .home .el-carousel__indicators--horizontal {
    bottom: -33px;
    left: 43.8%;
  }
  .home .el-carousel__indicators--outside button {
    background-color: #4BAF50;
  }
/*  问题展示*/
  .h_ques,.h_lost,.h_mood{
    position: relative;
    padding: 60px 2% 0;
  }
  .h_ques{
    height: 100px;
  }
  .h_ques>span,.h_lost>span,.h_mood>span,.h_report>sapn{
    font-family: 幼圆;
    font-size: 16px;
    margin-left: 2.2%;
    position: absolute;
    left: 0;
    top: 30px;
    margin-bottom: 15px;
  }
  .h_ques li,.h_lost li{
    background-color: #F5FAFC;
    float: left;
    width: 18.4%;
    margin-right: 0.6%;
    padding: 10px 0.5%;
  }
  .h_ques li p{
    margin-top: 8px;
    font-size: 14px;
  }
  .h_ques li .tit{
    font-size: 16px;
    font-weight: 600;
    color: #464646;
    font-family: 等线;
  }
  .h_ques li:last-child{
    margin-right: 0;
  }
  .h_ques li:hover{
    box-shadow: 1px 0px 5px #B9D3F7;
  }
/*  失物招领*/
  .h_lost{
    height: 100px;
  }
  .h_lost li{
    background-color: #E3F7EA;
  }
  .h_lost li:hover{
    box-shadow: 1px 0px 5px #74F0E5;
  }
  .h_lost li p{
    line-height: 25px;
    font-size: 14px;
  }
  .h_lost li .tit{
    font-weight: 600;
    font-family: 等线;
    font-size: 16px;
  }
/*  h_mood*/
  .h_mood li{
    padding: 0 8px;
    margin: 8px 0;
    background-color: #FFFAEA;
    line-height: 42px;
    font-size: 14px;
    border-bottom: 0;
  }
  .h_mood li:hover{
    box-shadow: 1px 0px 5px #FFDE8B;
  }
</style>
