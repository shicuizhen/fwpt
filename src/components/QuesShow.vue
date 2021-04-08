<template>
  <div class="ques">
    <div v-if="this.sortName" class="sort_name">当前分类：{{this.sortName}}</div>
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
        <li v-for = "(item, index) in quesInformationPage"
            v-bind:key="index" :qid="item.id"
            @click="toQuesDetail(item.id)">
          <div class="det_show">
            <h3>{{item.title}}</h3>
            <div>
              <img :src="imgItem(item.photo)" alt="">
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
          </div>
          <!--    点击回答问题按钮出现-----结束----======================================================-->
          <!--2.回答信息展示----点击“展开”按钮就显示----===========================================================-->
          <ul class="reply_detail" v-if="currentLiIndex.replay === index">
            <li v-for="(item2) in quesReply" v-bind:key="item2.id">
              <div class="det_show">
                <p>{{ item2.content }}</p>
                <div>
                  <img class="reply_img" :src="imgItem(item2.photo)" alt="">
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
    <el-button @click="getPage(index-1)">上一页</el-button>
    <span style="padding: 0 20px; font-size: 14px;color: #ADADAD">共有{{this.pageNum}}页；当前为第{{this.index+1}}页</span>
    <el-button @click="getPage(index+1)">下一页</el-button>
  </div>
</template>

<script>
import '../assets/css/question.css'
import { exportImgUrl } from '../main'
const axios = require('axios')
export default {
  name: 'quesShow',
  data: function () {
    return {
      sortName: null,
      cur_solve: '全部',
      solve: '未解决问题',
      solveNum: 1,
      search_key: '关键字',
      reply_data: '写下你关于这个问题的想法吧',
      showReply: false,
      showReplyDetail: false,
      showCommDetail: false,
      index: 0,
      pageNum: 0,
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      quesInformation: {},
      quesInformationPage: {},
      quesReply: {},
      currentLiIndex: [
        { replay: -1 },
        { comm: -1 },
        { writeReplay: -1 }
      ],
      // 存放点赞后的回答id
      hasLike: []
    }
  },
  methods: {
    imgItem (photo) {
      if (photo !== '' && photo !== null) {
        var str = photo.replace(exportImgUrl, '')
        return require('@/assets/' + str)
      }
      return null
    },
    getPageNum () {
      if (this.quesInformation.length / 5 === 0) {
        this.pageNum = this.quesInformation.length / 5
      } else {
        this.pageNum = Math.ceil(this.quesInformation.length / 5)
      }
      console.log('this.pageNum')
      console.log(this.pageNum)
    },
    getPage (index) {
      console.log('index:' + index)
      console.log('this.pageNum:' + this.pageNum)
      if (index >= 0 && index < this.pageNum) {
        this.index = index
        this.quesInformationPage = this.quesInformation.slice(index * 5, index * 5 + 5)
      } else {
        console.log('bufuhe')
      }
    },
    searchBySolve (num) {
      var url = ''
      switch (num) {
        case 1:
          url = 'quesInformation/unfinish'
          this.cur_solve = '未解决'
          this.solve = '已解决问题'
          this.solveNum = 2
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
      _this.url = url
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
            _this.quesInformationPage = _this.quesInformation.slice(0, 5)
            _this.index = 0
            _this.getPageNum()
          }
        }).catch(error => error)
      } else {
        axios({
          method: 'get',
          url: _this.url
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.quesInformation = resp.data.data
            _this.quesInformationPage = _this.quesInformation.slice(0, 5)
            _this.index = 0
            _this.getPageNum()
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
            this.quesInformationPage = this.quesInformation.slice(0, 5)
            this.index = 0
            this.getPageNum()
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
            this.quesInformationPage = this.quesInformation.slice(0, 5)
            this.index = 0
            this.getPageNum()
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
    // 提交回答
    submitReply (qid) {
      var _this = this
      if ((_this.reply_data === '写下你关于这个问题的想法吧') || (_this.reply_data.trim() === '')) {
        alert('您还没有给出任何建议呢！')
        return
      }
      var jsonData = {
        content: _this.reply_data,
        createBy: localStorage.getItem('id'), // 当前用户id
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
      alert('提交成功')
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
          _this.quesInformationPage = _this.quesInformation.slice(0, 5)
          _this.index = 0
          _this.getPageNum()
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
          _this.quesInformationPage = _this.quesInformation.slice(0, 5)
          _this.index = 0
          _this.getPageNum()
          _this.sortName = resp.data.data[0].sortName
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
.ques_show{
  position: relative;
}
.sort_name{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  margin: 5px 0 20px 5px;
  padding-left: 8px;
  font-weight: 600;
  font-size: 18px;
  font-family: YouYuan;
  color: #000;
  border-left: 3px solid #67C23A;
}
</style>
