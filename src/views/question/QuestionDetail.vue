<template>
  <div class="question_detail">
<!--    <div class="top"></div>-->
    <div class="center">
      <div class="left detail ques_detail">
        <h3>问答详情</h3>
        <div class="det_show">
          <h3>{{quesInformation.title}}</h3>
          <p>{{quesInformation.content}}</p>
          <div>
            <img :src="imgItem(quesInformation.photo)" alt="">
            <span>{{ quesInformation.createBy }}</span>
            <span>{{ quesInformation.createTime }}前发布</span>
            <span>{{ quesInformation.sortName }}</span>
            <i class="icon iconfont" style="color: #000000;right: 18px;">&#xe638;</i>
            <p class="likeShow">{{ quesInformation.replyNum }}</p>
          </div>
          <p style="height: 15px;"></p>
          <!--button对应的是class="reply"部分-->
          <button class="reply_btn" @click.stop="reply_btn(quesInformation.id)">回答</button>
          <!--div展开对应的是ul class="reply_detail"-->
          <!--        <a @click.stop="reply_detail(quesInformation.id)" class="open">-->
          <!--          <span>展开</span>-->
          <!--          <svg t="1612623150622" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4154" width="200" height="200"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z" p-id="4155"></path></svg>-->
          <!--        </a>-->
        </div>
        <!--   点击回答问题按钮出现-----开始----======================================================-->
        <!--以下部分一开始不存在，点击后才显示-->
        <div class="reply">
          <span class="el-icon-caret-top" aria-hidden="true"></span>
          <textarea @scroll="areaOnScroll()" rows="5"
                    v-model="reply_data"
                    onfocus="if (value == '写下你关于这个问题的想法吧'){value =''}"
                    onblur="if (value ==''){value='写下你关于这个问题的想法吧'}"
                    @click.stop=""
          ></textarea>
          <!--              <div :onclick="submitReply(item.id)">提交</div>-->
          <button @click.stop="submitReply(quesInformation.id)">提交</button>
          <!-- 图片上传及预览=======开始=========================================================-->
          <!--
                        <el-upload
                          action="http://localhost:8180/imgUpload"
                          list-type="picture-card"
                          accept="image/*"
                          :limit="imgLimit"
                          :file-list="productImgs"
                          :multiple="isMultiple"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload"
                          :on-exceed="handleExceed"
                          :on-error="imgUploadError">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="dialogImageUrl">
                        </el-dialog>
                          -->
          <!-- 图片上传及预览=====结束===========================================================-->
        </div>
        <!--    点击回答问题按钮出现-----结束----======================================================-->
        <!--2.回答信息展示----点击“展开”按钮就显示----===========================================================-->
        <ul class="reply_detail">
          <li v-for="(item) in quesReply" v-bind:key="item.id">
            <div class="det_show">
              <p>{{ item.content }}</p>
              <div>
                <img class="reply_img" :src="imgItem(item.photo)" alt="">
                <span>{{ item.createBy }}</span>
                <span>{{ item.createTime }}前发布</span>
                <p class="likeShow" v-if="item.likeNum>0">{{ item.likeNum }}</p>
                <a @click.stop="hasExisted(item.id) ? delLikeNum(item.id) : addLikeNum(item.id)">
                  <i id="likeIcon" class="icon iconfont" :class="hasExisted(item.id) ? 'likeRed' : 'likeNo'">&#xe61e;</i>
                </a>
              </div>
<!--              <div>-->
<!--                <img class="reply_img" :src="imgItem(item2.photo)" alt="">-->
<!--                <span>{{ item2.createBy }}</span>-->
<!--                <span>{{ item2.createTime }} 发布</span>-->
<!--                <p class="likeShow" v-if="item2.likeNum>0">{{ item2.likeNum }}</p>-->
<!--                <a @click.stop="hasExisted(item2.id) ? delLikeNum(item2.id) : addLikeNum(item2.id)">-->
<!--                  <i id="likeIcon" class="icon iconfont" :class="hasExisted(item2.id) ? 'likeRed' : 'likeNo'">&#xe61e;</i>-->
<!--                </a>-->
<!--              </div>-->
            </div>
          </li>
        </ul>
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
    <el-button type="text" @click="openAlert"></el-button>
  </div>
</template>

<script>
import '../../assets/css/question.css'
import { exportImgUrl } from '@/main'
const axios = require('axios')
export default {
  name: 'QuestionDetail',
  data () {
    return {
      downState: false,
      reply_data: '写下你关于这个问题的想法吧',
      quesInformation: {},
      quesReply: {},
      currentLiIndex: [
        { replay: -1 },
        { comm: -1 },
        { writeReplay: -1 }
      ],
      quesSort: {},
      hotQues: {},
      // 存放点赞后的回答id
      hasLike: []
    }
  },
  methods: {
    // 自定义弹框
    openAlert () {
      this.$confirm('您还没有登录，请登录', '提示', {
        confirmButtonText: '好的',
        cancelButtonText: '稍等',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '请填写学号信息，进行登录!',
          beforeClose: this.$router.push({ path: '/login' })
        })
      }).catch(() => {
        this.$router.go(-1)
      })
    },
    openReplyAlert () {
      this.$confirm('您还没有写任何东西呢', '提示', {
        confirmButtonText: '去回答',
        cancelButtonText: '稍等',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '请写下您的想法!'
        })
      }).catch(() => {
        // this.$router.go(-1)
      })
    },
    loadQuesInformation (qid) {
      console.log('questiondetail---qid:' + qid)
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/data/%7Bqid%7D',
        params: {
          qid: qid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.quesInformation = resp.data.data
          console.log('_this.quesInformation:' + _this.quesInformation)
        }
      }).catch(error => error)
    },
    // 加载分类信息
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
    // 加载热门问题
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
    // 加载回答信息============================
    loadQuesReply (qid) {
      var _this = this
      axios({
        method: 'get',
        url: 'quesReply/data/%7Bqid%7D',
        params: {
          qid: qid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.quesReply = resp.data.data
        }
      }).catch(error => error)
    },
    // 回答问题的按钮
    reply_btn (id) {
      if (this.showReply) {
        this.showReply = false
      } else {
        this.showReply = true
      }
    },
    // 回答问题的输入框
    areaOnScroll () {
      this.reply_data = this.reply_data.slice(0, 200)
      this.$alert('请在4行内输入', '提示', {
        confirmButtonText: '确定'
      })
    },
    // 将回答id作为参数传入，判断当前回答id是否在该数组中
    hasExisted (rid) {
      var set = new Set(this.hasLike)
      if (set.has(rid)) {
        console.log('存在')
        return true
      } else {
        console.log('没有')
        return false
      }
    },
    // 提交回答
    submitReply (qid) {
      var uid = localStorage.getItem('id')
      var _this = this
      if ((_this.reply_data === '写下你关于这个问题的想法吧') || (_this.reply_data.trim() === '')) {
        this.openReplyAlert()
        return
      }
      var jsonData = {
        content: _this.reply_data,
        createBy: uid, // 当前用户id
        qid: qid,
        createTime: null,
        id: null
      }
      axios({
        method: 'post',
        url: 'quesReply',
        data: jsonData
      }).then(resp => {
        if (resp.data.code !== 200) {
          alert('出现了一点小问题，请重新给出建议！')
        }
      }).catch(error => error)
      this.reply_data = ''
      location.reload()
      alert('提交成功！')
      // this.$alert('这是一段内容', '标题名称', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info'
      //       // message: `action: ${ action }`
      //     })
      //   }
      // })
    },
    // 新增点赞，将当前回答id存进数组,并调用后台方法，存入当前回答的用户点赞记录
    addLikeNum (rid) {
      if (localStorage.getItem('id') == null) {
        this.openAlert()
        return
      }
      document.getElementById('likeIcon').className = 'icon iconfont likeRed'
      this.hasLike.push(rid)
      axios({
        method: 'post',
        url: 'quesLike',
        data: {
          createTime: '',
          id: null,
          qid: null,
          rid: rid,
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code !== 200) {
          this.$alert('没点上，重新支持一下吧', '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(error => error)
    },
    delLikeNum (rid) {
      if (localStorage.getItem('id') == null) {
        this.$alert('未登录', '提示', {
          confirmButtonText: '确定'
        })
        return
      }
      document.getElementById('likeIcon').className = 'icon iconfont likeNo'
      this.hasLike.pop(rid)
      axios({
        method: 'post',
        url: 'quesLike/delQuesLike',
        data: {
          createTime: '',
          id: null,
          qid: null,
          rid: rid,
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code !== 200) {
          this.$alert('没点上，别取消了吧', '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(error => error)
    },
    // 路由跳转
    toQuesDetail (qid) {
      localStorage.setItem('qid', JSON.stringify(qid))
      this.$router.push({
        path: '/question_detail/' + qid
      })
    },
    toSortDetail (sid) {
      localStorage.setItem('sid', JSON.stringify(sid))
      this.$router.push({
        path: '/sort_detail/' + sid
      })
    },
    imgItem (photo) {
      if (photo !== '' && photo !== null) {
        var str = photo.replace(exportImgUrl, '')
        return require('@/assets/' + str)
      }
      return null
    }
  },
  created () {
    if (localStorage.getItem('id') == null) {
      this.openAlert()
    }
    this.qid = this.$route.query.qid
    this.qid = JSON.parse(localStorage.getItem('qid'))
  },
  mounted: function () {
    this.loadHotQues()
    this.loadQuesSort()
    this.loadQuesInformation(this.qid)
    this.loadQuesReply(this.qid)
  }
}
</script>

<style scoped>
.question_detail{
  height: 1100px;
  margin-top: 0;
  padding-top: 10px;
}
.question_detail .left{
  width: 75%;
  position: relative;
  height: 42px;
  background-color: #FFFFFF;
  margin-top: 22px;
}
.ques_detail>h3{
  border-left: 3px solid #BBB;
  padding-left: 10px;
  color: #525252;
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  margin-bottom: 25px;
}
</style>
