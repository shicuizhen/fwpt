<template>
  <div class="question">
    <div class="top">
      <a href="http://localhost:8080/ques_publish">我要提问</a>
      <div class="sort_lbt center">
        <ul class="sort" :style="{transform:'translateX('+currentOffset*223+'px)'}">
<!--        <ul class="sort" :style="{transform:'translateX('+currentOffset*246+'px)'}">-->
          <li v-for = "(item) in quesSort" v-bind:key="item.name">
            <a @click="toSortDetail (item.id)">
              <span>分类</span>
              <p>{{ item.name }}</p>
              <span>讨论次数&nbsp;{{ item.quesNum }}</span>
              <span>问题数&nbsp;{{ item.quesNum }}</span>
            </a>
          </li>
        </ul>
      </div>
      <svg @click="right" t="1612847143655" class="icon left_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32021" width="200" height="200"><path d="M64 512c0 247.039 200.961 448 448 448s448-200.961 448-448S759.039 64 512 64 64 264.961 64 512zM355.135 501.149c0.033-0.127 0.193-0.256 0.256-0.384 1.536-3.616 3.649-7.072 6.592-10.048 0.033-0.031 0.065-0.031 0.096-0.064s0.031-0.064 0.064-0.096l158.912-159.359c12.48-12.511 32.735-12.576 45.248-0.064 12.511 12.48 12.544 32.735 0.064 45.248L430.079 513.055l137.408 135.904c12.576 12.447 12.673 32.672 0.256 45.248-6.239 6.336-14.496 9.504-22.751 9.504-8.128 0-16.258-3.103-22.497-9.248L362.24 535.968C352.768 526.592 350.399 512.767 355.135 501.149z" p-id="32022" fill="#bfbfbf"></path></svg>
      <svg @click="left" t="1612847179103" class="icon right_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32262" width="200" height="200"><path d="M512 64c-247.039484 0-448 200.960516-448 448S264.960516 960 512 960 960 759.039484 960 512 759.039484 64 512 64zM661.760516 535.967531l-160.25545 158.495686c-6.239161 6.14455-14.368821 9.247789-22.496761 9.247789-8.255235 0-16.512189-3.168606-22.751351-9.504099-12.416396-12.576374-12.320065-32.800753 0.25631-45.248112l137.407768-135.904314-136.287918-136.671523c-12.480043-12.512727-12.447359-32.768069 0.063647-45.248112 12.512727-12.512727 32.768069-12.447359 45.248112 0.063647l158.911974 159.359226c0.032684 0.032684 0.032684 0.063647 0.063647 0.096331s0.063647 0.032684 0.096331 0.063647c2.94326 2.975944 5.055665 6.431824 6.591802 10.047682 0.063647 0.127295 0.223626 0.25631 0.25631 0.383604C673.600645 512.767209 671.231931 526.592447 661.760516 535.967531z" p-id="32263" fill="#bfbfbf"></path></svg>
    </div>
    <div class="center">
      <div class="left">
<!--1.问题信息展示========================================================================-->
        <QuesShow></QuesShow>
      </div>
      <div class="right">
        <div class="all_sort">
          <h3>所有分类</h3>
          <ul>
            <li @click="toSortDetail(item.id)"
              v-for = "(item, index) in quesSort" v-bind:key="item.name">
              <a href="" id="get_icon">
                <i v-if="index === 0" class="el-icon-reading"></i>
                <i v-if="index === 1" class="el-icon-magic-stick"></i>
                <i v-if="index === 2" class="el-icon-office-building"></i>
                <i v-if="index === 3" class="el-icon-present"></i>
                <i v-if="index === 4" class="el-icon-camera"></i>
                <i v-if="index === 5" class="el-icon-table-lamp"></i>
                <i v-if="index === 6" class="el-icon-office-building"></i>
                <i v-if="index === 7" class="el-icon-position"></i>
                <i v-if="index === 8" class="el-icon-ship"></i>
                <i v-if="index === 9" class="el-icon-sunrise"></i>
                <i v-if="index === 10" class="el-icon-lollipop"></i>
                <p>{{ item.name }}</p>
                <i class="el-icon-right"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="hot_ques">
          <h3>热门问题</h3>
          <ul>
            <li @click="toQuesDetail(item.id)"
              v-for = "(item) in hotQues" v-bind:key="item.id">
              <a href="">
                <div>
                  <svg t="1612608284273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11976" width="200" height="200"><path d="M859.9104 609.92512l0 45.6c-0.67968 2.21952-1.5104 4.4352-1.9648 6.70464-4.66048 24.09984-7.28448 48.82944-14.31552 72.22016-20.84992 69.02016-59.92064 126.53952-114.6944 173.50016-42.24512 36.2496-89.7856 62.36544-144.1344 75.22048-17.87008 4.23552-36.19456 6.73024-54.32064 10.0352l-45.5744 0c-2.21952-0.6848-4.49024-1.72032-6.75456-1.87008-48.12544-2.9952-93.72544-15.52512-136.50048-37.38496-80.86528-41.18528-139.19488-102.5152-165.83552-190.74048-5.67424-18.8544-8.03968-38.62016-11.9744-57.97504l0-43.50976c1.7152-10.69056 3.2-21.47456 5.21984-32.16 8.61952-46.68544 29.36576-88.0256 56.83968-126.19008 25.91488-35.92064 53.44-70.70464 78.016-107.53536 26.56896-39.95008 39.424-84.2944 31.88992-132.9152-1.4848-9.60512-2.87488-19.20896-4.33536-28.76416 0.98048-0.25088 1.9648-0.45056 2.9504-0.73088 59.31008 62.16064 68.96512 138.46528 60.49408 220.92032 2.17088-2.31936 3.98592-3.93472 5.37088-5.79968 50.33984-68.08448 71.96416-143.29984 55.55456-227.54688-10.42944-53.58976-32.99456-101.76512-70.32448-141.81504C369.3056 61.84576 349.69472 47.65568 331.61984 32l18.65472 0c1.536 0.62976 2.976 1.7152 4.53504 1.86496 32.82048 2.81984 63.65056 12.95488 93.02016 27.2 67.17056 32.51584 121.62048 80.58496 167.17056 139.22048 66.9504 86.27968 110.48448 181.99424 119.10528 292.19968 3.30496 42.06976-0.9856 82.95552-12.19968 123.2896-4.23552 15.27552-10.21056 30.04544-15.68 45.94944 21.72544-9.25056 38.24-23.38944 50.9952-41.7152 38.04032-54.77504 48.67456-115.85536 40.05504-183.38048 2.80064 3.24992 4.23552 4.53504 5.21472 6.14528 22.91456 36.19968 40.05504 74.81472 49.0048 116.78464C855.05024 576.17024 857.11488 593.1648 859.9104 609.92512M501.56544 529.61536c-0.85504 0.60544-1.79072 1.2352-2.67008 1.84064-1.18528 16.64-2.06976 33.30048-3.68 49.93536-2.37056 25.38496-8.44544 49.85984-20.32 72.62464-14.52032 27.87968-38.7904 45.21984-65.69088 59.01056-29.00992 14.9696-47.28448 36.34944-49.65504 70.10048-2.46912 34.70976 7.96544 63.86944 35.94496 85.20064 26.21568 19.96032 56.84096 26.4704 89.3056 25.38496 51.82976-1.6896 90.4448-26.32064 105.92512-78.1952 11.11552-37.23008 9.30048-74.71488 1.86496-112.19456-10.16064-51.37536-28.76544-99.26528-60.60032-141.2352C523.04512 550.36032 511.7504 540.40448 501.56544 529.61536" p-id="11977" fill="#d81e06"></path></svg>
                  <span>{{ item.num }}</span>
                </div>
                <p>{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    <div class="bottom"></div>-->
  </div>
</template>
<script>
import QuesShow from '@/components/QuesShow'
import '../../assets/css/question.css'
const axios = require('axios')
export default {
  name: 'Question',
  data: function () {
    return {
      hotQues: {},
      state: true,
      downState: false,
      currentOffset: 0,
      quesSort: {}
    }
  },
  components: {
    QuesShow
  },
  methods: {
    // 页面上面部分-分类轮播
    right () {
      if (this.currentOffset < 0) {
        this.currentOffset++
      }
    },
    left () {
      if (this.currentOffset === -(this.quesSort.length - 5) + 1) {
        return
      }
      this.currentOffset = this.currentOffset - 1
    },
    // 选择分类下拉框
    icon_down () {
      this.downState = true
      this.state = false
    },
    icon_up () {
      this.downState = false
      this.state = true
    },
    // axios----------加载后台数据------------------------
    loadHotQues () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/hotdatas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.hotQues = resp.data.data
        }
      }).catch(error => error)
    },
    loadQuesSort () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesSort/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.quesSort = resp.data.data
        }
      }).catch(error => error)
    },

    reloadDetailBySort (sid) {
      console.log('sid:' + sid)
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/datas/%7Bsid%7D',
        params: {
          sid: sid
        }
      }).then(resp => {
        if (resp.data.code === 401) {
          alert('目前该分类下无问题')
          this.$router.back()
        } else if (resp.data.code === 200) {
          _this.quesInformation = resp.data.data
        }
      }).catch(error => error)
    },
    toSortDetail (sid) {
      localStorage.setItem('sid', JSON.stringify(sid))
      this.$router.push({
        path: '/sort_detail/' + sid
      })
    },
    // 路由跳转
    toQuesDetail (qid) {
      localStorage.setItem('qid', JSON.stringify(qid))
      this.$router.push({
        path: '/question_detail/' + qid
      })
    }
  },
  created () {
    localStorage.setItem('sid', null)
  },
  mounted: function () {
    this.loadHotQues()
    this.loadQuesSort()
  }
}
</script>
<style>
/*回答点赞*/
.reply_detail .det_show .likeRed{
  color: red;
}
.reply_detail .det_show .likeNo{
  color: #555;
}
.reply_detail .showReplyDetailCla{
  visibility: visible;
  background-color: #00ffff;
}
/*------图片预览-------*/
.gallery-window-map{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
}
.house-pic-item {
  position: relative;
  display: inline-block;
  margin-right: 13px;
  width: 120px;
  height: 90px;
  background-color: #e3e3e3;
}
.pic-box {
  width: 100%;
  text-align: center;
}
.icon-zengjia {
  position: relative;
  top: 12px;
  font-size: 26px;
  color: #b2b2b2;
}
.btn-tit {
  height: 38px;
  line-height: 38px;
  font-size: 12px;
  color: #999;
}
.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(34, 34, 34, 0.6);
}
.font-btn {
  display: inline-block;
  height: 40px;
  width: 50%;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.font-btn:last-child {
  position: relative;
}
.icon-fangda,.icon-shanchu {
  font-size: 22px;
  color: #fff;
}
.line {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  top: 10px;
  width: 1px;
  height: 20px;
  background: #fff;
}
.sort{
  overflow: hidden;
}
</style>
