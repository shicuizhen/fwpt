<template>
  <div class="question">
    <div class="top">
      <a href="">我要提问</a>
      <div class="sort_lbt center">
        <ul class="sort" :style="{transform:'translateX('+currentOffset*226+'px)'}">
          <li v-for = "(item) in quesSort" v-bind:key="item.name">
            <a href="">
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
        <p>平台最新问题</p>
        <div class="sort_xlk">
          <span>选择分类</span>
          <i @click="icon_down()" class="el-icon-arrow-down" :class="{hidden : downState}" aria-hidden="true"></i>
          <i @click="icon_up()" class="el-icon-arrow-up" :class="{hidden : state}" aria-hidden="true"></i>
          <ul :class="{xlk : true, hidden : state}">
            <span class="el-icon-caret-top" aria-hidden="true"></span>
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
<!--1.问题信息展示========================================================================-->
        <ul class="ques_detail">
          <li v-for = "(item, index) in quesInformation"
              v-bind:key="index" :qid="item.id"
              @click="toQuesDetail(item.id)">
<!--            :onclick="() => toQuesDetail(item.id)">-->
            <div class="det_show">
              <h3>{{item.title}}</h3>
              <div>
                <img src="../../assets/images/1.jpeg" alt="">
<!--                <img src="file:///F:/images/1.jpeg" alt="">-->
<!--                <img src="require('../../assets/images/'+'F:/图片/8180.jpg')"  width="112" height="112">-->
                <span>{{item.createBy}}</span>
                <span>{{ item.createTime }}前发布</span>
                <span>{{ item.sortName }}</span>
                <i class="icon iconfont" style="color: #000000;right: 18px;">&#xe638;</i>
                <p class="likeShow">{{ item.replyNum }}</p>
              </div>
              <p>{{ item.content }}</p>
              <!--button对应的是class="reply"部分-->
              <button class="reply_btn" @click.stop="reply_btn(item.id, index)">回答</button>
              <!--div展开对应的是ul class="reply_detail"-->
              <a @click.stop="reply_detail(item.id, index)" class="open">
                <span>展开</span>
                <svg t="1612623150622" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4154" width="200" height="200"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z" p-id="4155"></path></svg>
              </a>
            </div>
<!--   点击回答问题按钮出现-----开始----======================================================-->
            <!--以下部分一开始不存在，点击后才显示-->
            <div class="reply" v-if="currentLiIndex.writeReplay === index">
              <span class="el-icon-caret-top" aria-hidden="true"></span>
              <textarea @scroll="areaOnScroll()" rows="5"
                        v-model="reply_data"
                        onfocus="if (value == '写下你关于这个问题的想法吧'){value =''}"
                        onblur="if (value ==''){value='写下你关于这个问题的想法吧'}"
                        @click.stop=""
              ></textarea>
<!--              <div :onclick="submitReply(item.id)">提交</div>-->
              <button @click.stop="submitReply(item.id)">提交</button>
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
            <ul class="reply_detail" v-if="currentLiIndex.replay === index">
              <li v-for="(item2) in quesReply" v-bind:key="item2.id">
                <div class="det_show">
                  <p>{{ item2.content }}</p>
                  <div>
                    <img class="reply_img" src="../../assets/images/1.jpeg" alt="">
                    <span>{{ item2.createBy }}</span>
                    <span>{{ item2.createTime }}前发布</span>
                    <p class="likeShow" v-if="item2.likeNum>0">{{ item2.likeNum }}</p>
                    <a @click.stop="hasExisted(item2.id) ? delLikeNum(item2.id) : addLikeNum(item2.id)">
                      <i id="likeIcon" class="icon iconfont" :class="hasExisted(item2.id) ? 'likeRed' : 'likeNo'">&#xe61e;</i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="all_sort">
          <h3>所有分类</h3>
          <ul>
            <li v-for = "(item, index) in quesSort" v-bind:key="item.name">
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
            <li v-for = "(item) in hotQues" v-bind:key="item.id">
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
    <div class="bottom"></div>
  </div>
</template>
<script>
import '../../assets/css/question.css'
const axios = require('axios')
export default {
  name: 'Question',
  data: function () {
    return {
      downState: false,
      state: true,
      inp_val: '搜索',
      reply_data: '写下你关于这个问题的想法吧',
      showReply: false,
      showReplyDetail: false,
      showCommDetail: false,
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      quesSort: {},
      currentOffset: 0,
      quesInformation: {},
      quesReply: {},
      hotQues: {},
      currentLiIndex: [
        { replay: -1 },
        { comm: -1 },
        { writeReplay: -1 }
      ],
      // 图片上传
      dialogImageUrl: '',
      dialogVisible: false,
      productImgs: [],
      isMultiple: true,
      imgLimit: 3,
      // 图片上传结束
      imgUrlStr: '',
      // 存放点赞后的回答id
      hasLike: [],
      QuesDetailURL: 'http://localhost:8080/question_detail'
    //   onclick="javascript:window.location.href='URL'"
    //   onclick="location='URL'"
    //   onclick="window.location.href='URL?id=11'"
    }
  },
  methods: {
    // 页面上面部分-分类轮播
    right () {
      if (this.currentOffset < 0) {
        this.currentOffset++
      }
    },
    left () {
      if (this.currentOffset === -(this.quesSort.length - 5)) {
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
    // 回答问题的按钮
    reply_btn (id, index) {
      if (this.currentLiIndex.writeReplay !== index) {
        this.showReply = false
      }
      this.$set(this.currentLiIndex, 'writeReplay', index)
      if (this.showReply) {
        this.showReply = false
        this.$set(this.currentLiIndex, 'writeReplay', null)
      } else {
        this.showReply = true
      }
    },
    // 回答问题的输入框
    areaOnScroll () {
      this.reply_data = this.reply_data.slice(0, 200)
      alert('请在4行内输入')
    },
    // 回答信息展示--------点击“展开”按钮
    reply_detail (qid, index) {
      // 如果点击的li不是上一个li，就先将showReplyDetail置false，即收起子li，不然还以为是开着的，点的这一下白点，这一下就成收起了。
      if (this.currentLiIndex.replay !== index) {
        this.quesReply = null
        this.showReplyDetail = false
      }
      this.$set(this.currentLiIndex, 'replay', index)
      // showReplyDetail 代表是否展开回答的li，如果已经展开，就置null收起，并把数据quesReply置null
      if (this.showReplyDetail) {
        this.quesReply = null
        this.showReplyDetail = false
        this.$set(this.currentLiIndex, 'replay', null)
      } else {
        // 在点击“展开”按钮的时候，除了改变回答的显隐状态，也将qid穿进去把数据加载出来
        this.loadQuesReply(qid)
        this.showReplyDetail = true
      }
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
    loadQuesInformation () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.quesInformation = resp.data.data
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
    // 图片上传及预览--------------------开始----------------------------------------
    handleRemove (file, fileList) { // 移除图片
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) { // 预览图片时调用
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeAvatarUpload (file) { // 文件上传之前调用做一些拦截限制
      console.log(file)
      const isJPG = true
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess (res, file) { // 图片上传成功
      console.log('this.imgUrlStr:' + this.imgUrlStr)
      this.imgUrlStr = ';' + res.data
      console.log('this.imgUrlStr----:' + this.imgUrlStr)
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('imageUrl:' + this.imageUrl)
    },
    handleExceed (files, fileList) { // 图片上传超过数量限制
      this.$message.error('上传图片不能超过3张!')
      console.log(files, fileList)
    },
    imgUploadError (err, file, fileList) { // 图片上传失败调用
      console.log(err)
      this.$message.error('上传图片失败!')
    },
    // 图片上传及预览----------结束-------------------------
    // 提交回答
    submitReply (qid) {
      var _this = this
      if ((_this.reply_data === '写下你关于这个问题的想法吧') || (_this.reply_data.trim() === '')) {
        alert('您还没有给出任何建议呢！')
        return
      }
      var jsonData = {
        content: _this.reply_data,
        createBy: 0, // 当前用户id
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
    },
    // 点赞
    // 初始化点赞信息
    initLike (uid) {
      var _this = this
      // 根据当前用户id查询他所有的点赞评论id，并将他的点赞评论id存放到hasLike
      axios({
        method: 'get',
        url: 'quesLike/rid/%7Buid%7D',
        params: {
          uid: 111
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.hasLike = resp.data.data
        }
      }).catch(error => error)
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
    // 新增点赞，将当前回答id存进数组,并调用后台方法，存入当前回答的用户点赞记录
    addLikeNum (rid) {
      console.log('变红===================')
      document.getElementById('likeIcon').className = 'icon iconfont likeRed'
      this.hasLike.push(rid)
      console.log('新增后的this.hasLike:' + this.hasLike)
      axios({
        method: 'post',
        url: 'quesLike',
        data: {
          createTime: '',
          id: null,
          qid: null,
          rid: rid,
          uid: 111
        }
      }).then(resp => {
        if (resp.data.code !== 200) {
          alert('没点上，重新支持一下吧！')
        }
      }).catch(error => error)
    },
    delLikeNum (rid) {
      console.log('变灰----------------------')
      document.getElementById('likeIcon').className = 'icon iconfont likeNo'
      this.hasLike.pop(rid)
      console.log('删除后的this.hasLike:' + this.hasLike)
      axios({
        method: 'post',
        url: 'quesLike/delQuesLike',
        data: {
          createTime: '',
          id: null,
          qid: null,
          rid: rid,
          uid: 111
        }
      }).then(resp => {
        if (resp.data.code !== 200) {
          alert('没点上！')
        }
      }).catch(error => error)
    },
    // 路由跳转
    toQuesDetail (qid) {
      localStorage.setItem('qid', JSON.stringify(qid))
      this.$router.push({
        path: '/question_detail/' + qid
      })
    }
  },
  mounted: function () {
    this.loadHotQues()
    this.loadQuesSort()
    this.loadQuesInformation()
    this.initLike()
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
.icon-fangda,
.icon-shanchu {
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
</style>
