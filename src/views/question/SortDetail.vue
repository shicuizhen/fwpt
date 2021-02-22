<template>
  <div class="sort_detail center">
    <div style="height: 18px;background-color:#fff;"></div>
    <div class="left">
      <QuesShow></QuesShow>
    </div>
    <div class="right">
      <div class="all_sort">
        <h3>所有分类</h3>
        <ul>
          <li @click="toSortDetail(item.id)"
              v-for = "(item, index) in quesSort" v-bind:key="item.name">
            <a href="" id="get_icon">
              <i v-if="index == 0" class="el-icon-reading"></i>
              <i v-if="index == 1" class="el-icon-magic-stick"></i>
              <i v-if="index == 2" class="el-icon-office-building"></i>
              <i v-if="index == 3" class="el-icon-present"></i>
              <i v-if="index == 4" class="el-icon-camera"></i>
              <i v-if="index == 5" class="el-icon-table-lamp"></i>
              <i v-if="index == 6" class="el-icon-office-building"></i>
              <i v-if="index == 7" class="el-icon-position"></i>
              <i v-if="index == 8" class="el-icon-ship"></i>
              <i v-if="index == 9" class="el-icon-sunrise"></i>
              <i v-if="index == 10" class="el-icon-lollipop"></i>
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
              <p @click="toQuesDetail(item.id)">{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import QuesShow from '@/components/QuesShow'
import '../../assets/css/question.css'
const axios = require('axios')
export default {
  name: 'SortDetail',
  data: function () {
    return {
      hotQues: {},
      state: true,
      downState: false,
      quesSort: {}
    }
  },
  components: {
    QuesShow
  },
  methods: {
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
    toSortDetail (sid) {
      console.log('sid=========:' + sid)
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
    this.sid = this.$route.query.sid
    this.sid = JSON.parse(localStorage.getItem('sid'))
  },
  mounted: function () {
    this.loadQuesSort()
    this.loadHotQues()
  }
}
</script>

<style scoped>
.left {
  width: 76%;
  position: relative;
  height: 0px;
  background-color: #fff;
  margin-top: 0px;
}
.sort_detail .right {
  position: absolute;
  right: 0;
  top: 24px;
  width: 23%;
}
</style>
