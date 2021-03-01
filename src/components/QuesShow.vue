<template>
<div class="ques_show">
  <p>{{this.cur_solve}}问题</p>
  <input type="text" value="关键字" v-model="search_key" onfocus="if (value == '关键字'){value =''}" onblur="if (value ==''){value='关键字'}">
  <span class="search" @click="searchByKey()">搜索</span>
  <div class="no_solve butt">
    {{this.solve}}&nbsp;
    <el-button @click="searchBySolve(1)" v-if="this.solveNum === 1" type="success" icon="el-icon-check" circle></el-button>
    <el-button @click="searchBySolve(2)" v-if="this.solveNum === 2" type="primary" icon="el-icon-check" circle></el-button>
    <el-button @click="searchBySolve(3)" v-if="this.solveNum === 3" type="" icon="el-icon-check" circle></el-button>
  </div>
  <ul class="ques_detail">
    <li v-for = "(item, index) in quesInformation"
        v-bind:key="index" :qid="item.id"
        @click="toQuesDetail(item.id)">
      <!--            :onclick="() => toQuesDetail(item.id)">-->
      <div class="det_show">
        <h3>{{item.title}}</h3>
        <div>
          <img src="../assets/images/1.jpeg" alt="">
          <!--                <img src="file:///F:/images/1.jpeg" alt="">-->
          <!--                <img src="require('../assets/images/'+'F:/图片/8180.jpg')"  width="112" height="112">-->
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
              <img class="reply_img" src="../assets/images/1.jpeg" alt="">
              <span>{{ item2.createBy }}</span>
              <span>{{ item2.createTime }} 发布</span>
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
</template>

<script>
import '../assets/css/question.css'
const axios = require('axios')
export default {
  name: 'quesShow',
  data: function () {
    return {
      cur_solve: '全部',
      solve: '未解决问题',
      solveNum: 1,
      search_key: '关键字',
      reply_data: '写下你关于这个问题的想法吧',
      showReply: false,
      showReplyDetail: false,
      showCommDetail: false,
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      quesInformation: {},
      quesReply: {},
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
    }
  },
  methods: {
    searchBySolve (num) {
      var url = ''
      switch (num) {
        case 1:
          url = 'quesInformation/unfinish'
          this.cur_solve = '未解决'
          this.solve = '已解决问题'
          this.solveNum = 2
          console.log('_this.url:' + url)
          break
        case 2:
          url = 'quesInformation/finish'
          this.cur_solve = '已解决'
          this.solve = '全部问题'
          this.solveNum = 3
          break
        case 3:
          url = 'quesInformation/datas'
          this.cur_solve = '全部'
          this.solve = '未解决'
          this.solveNum = 1
          break
      }
      var _this = this
      if (_this.sid !== null) {
        _this.url = url + '/%7Bsid%7D'
        axios({
          method: 'get',
          url: _this.url,
          params: {
            sid: _this.sid
          }
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.quesInformation = resp.data.data
          }
        }).catch(error => error)
      } else {
        axios({
          method: 'get',
          url: _this.url
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.quesInformation = resp.data.data
          }
        }).catch(error => error)
      }
    },
    openSearchAlert () {
      this.$confirm('您要查询什么呢？请写下关键字吧', '提示', {
        confirmButtonText: '好的',
        cancelButtonText: '稍等',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '请填写关键字，进行查询!'
        })
      })
    },
    searchByKey () {
      // 需要看分类sid=null和solveNum=1 ，只根据key
      // solveNum=1全部
      // solveNum=2未解决0
      // solveNum=3已解决1
      if (this.search_key === '关键字') {
        this.openSearchAlert()
        return
      }
      if (this.sid === null && this.solveNum === 1) {
        axios({
          method: 'post',
          url: 'quesInformation/key',
          params: {
            sid: this.sid,
            finish: this.solveNum - 2,
            key: this.search_key
          }
        }).then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.data)
            this.quesInformation = resp.data.data
            this.search_key = '关键字'
          }
        }).catch(error => error)
      } else {
        axios({
          method: 'post',
          url: 'quesInformation/many_search',
          params: {
            sid: this.sid,
            finish: this.solveNum - 2,
            key: this.search_key
          }
        }).then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.data)
            this.quesInformation = resp.data.data
            this.search_key = '关键字'
          }
        }).catch(error => error)
      }
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
    initLike () {
      var uid = localStorage.getItem('id')
      var _this = this
      // 根据当前用户id查询他所有的点赞评论id，并将他的点赞评论id存放到hasLike
      axios({
        method: 'get',
        url: 'quesLike/rid/%7Buid%7D',
        params: {
          uid: uid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.hasLike = resp.data.data
          console.log('_this.hasLike:' + _this.hasLike)
        }
      }).catch(error => error)
    },
    // 将回答id作为参数传入，判断当前回答id是否在该数组中
    hasExisted (rid) {
      var set = new Set(this.hasLike)
      if (set.has(rid)) {
        console.log('存在' + rid)
        return true
      } else {
        console.log('没有' + rid)
        return false
      }
    },
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
        this.$message({
          type: 'info',
          message: '记得登录哦!'
        })
      })
    },
    // 新增点赞，将当前回答id存进数组,并调用后台方法，存入当前回答的用户点赞记录
    addLikeNum (rid) {
      console.log('add:-rid:' + rid)
      if (localStorage.getItem('id') == null) {
        this.openAlert()
        return
      }
      document.getElementById('likeIcon').className = 'icon iconfont likeRed'
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
        if (resp.data.code === 200) {
          this.initLike()
        } else {
          alert('没点上，重新支持一下吧！')
        }
      }).catch(error => error)
    },
    delLikeNum (rid) {
      console.log('del:-rid:' + rid)
      if (localStorage.getItem('id') == null) {
        this.openAlert()
        return
      }
      document.getElementById('likeIcon').className = 'icon iconfont likeNo'
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
        if (resp.data.code === 200) {
          this.initLike()
        } else {
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
    loadQuesInformationBySid (sid) {
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
    }
  },
  created () {
    this.sid = this.$route.query.sid
    this.sid = JSON.parse(localStorage.getItem('sid'))
  },
  mounted: function () {
    if (this.sid !== null) {
      this.loadQuesInformationBySid(this.sid)
    } else {
      this.loadQuesInformation()
    }
    this.initLike()
  }
}
</script>

<style scoped>

</style>
