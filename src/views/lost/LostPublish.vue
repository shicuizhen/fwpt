<template>
  <div class="lost_publish center">
    <div class="lunbo" >
      <a href="http://localhost:8080/lost_publish">发布信息</a>
      <svg t="1613185669871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4561" width="200" height="200"><path d="M260.7 431.1h60.4v258.2h-60.4zM634.3 795.5l-190.9-88.4c-8.1-3.7-13.2-11.5-13.2-19.9V442.4c0-8.5 5.1-16.2 13.2-19.9l190.9-88.4c15.6-7.2 33.9 3.5 33.9 19.9v421.5c0 16.5-18.3 27.2-33.9 20z" fill="#25B195" p-id="4562"></path><path d="M290.5 709.4h-50.3c-26.6 0-48.2-21.6-48.2-48.2V407.8c0-26.6 21.6-48.2 48.2-48.2h50.3c26.6 0 48.2 21.6 48.2 48.2v253.4c-0.1 26.6-21.7 48.2-48.2 48.2z m-50.4-317.7c-8.9 0-16.1 7.2-16.1 16.1v253.4c0 8.9 7.2 16.1 16.1 16.1h50.3c8.9 0 16.1-7.2 16.1-16.1V407.8c0-8.9-7.2-16.1-16.1-16.1h-50.3zM644 815c-7.1 0-14.2-1.4-20.8-4.1l-236.8-98.6c-17.7-7.4-29.1-23.6-29.1-41.3V398.1c0-17.8 11.4-34 29.1-41.3l236.8-98.6c16.5-6.9 35.7-5.1 50.3 4.7 12.9 8.6 20.3 22 20.3 36.6v470.1c0 14.7-7.4 28-20.3 36.6-8.7 5.8-19.1 8.8-29.5 8.8z m0-519.6c-1.6 0-3.2 0.3-4.9 1L402.3 395c-2.7 1.1-3.6 2.7-3.6 3.1V671c0 0.4 0.9 2 3.6 3.1l236.8 98.6c4.3 1.8 8.9 0.8 11.5-0.9 0.9-0.6 1.9-1.6 1.9-2.2V299.5c0-0.7-1-1.6-1.9-2.2-1.6-1.1-4-1.9-6.6-1.9zM718.4 517h149.1v41.9H718.4zM725.412 383.092L830.84 277.663l29.628 29.628L755.039 412.72zM755.047 663.173l105.429 105.429-29.628 29.628L725.42 692.8z" fill="#595857" p-id="4563"></path></svg>
      <h3>
        最新播报：
      </h3>
      <div class="marquee-box">
        <ul class="marquee-ul" id="marquee-ul" v-if="socketPush">
          <li class="marquee-list" v-for='(value,key) in socketPush' v-bind:key="key" v-html="value.str" :id="key==2?'marquee':''"></li>
        </ul>
      </div>
    </div>

    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <h3>失物招领-发布信息</h3>
      <el-form-item class="form_type" label="信息类型" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio label="1">招领启事</el-radio>
          <el-radio label="0">寻物启事</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="物品种类" prop="kindId">
        <el-select v-model="form.kindId" placeholder="请选择物品种类">
          <el-option :label=item.name :value=item.id v-for="item in kind_ids" v-bind:key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="物品名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="丢失时间" prop="lostTime">
        <el-col :span="11">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.lostTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="丢失地点" prop="palceId">
        <el-select v-model="form.palceId" placeholder="请选择地点">
          <el-option :label=item.name :value=item.id v-for="item in place_ids" v-bind:key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="具体位置" prop="position">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="详细描述" prop="description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="telephone">
        <el-input type="tel" v-model.number="form.telephone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="form.email"></el-input>
      </el-form-item>
<!--      <el-form-item label="邮箱" prop="email">-->
<!--        <el-input type="email" v-model.number="form.email"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import '../../assets/css/lost.css'
// isvalidEmail
import { isvalidPhone } from '../../config/validate'
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入电话号码'))
  } else if (!isvalidPhone(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
// var validEmail = (rule, value, callback) => {
//   if (!value) {
//     callback(new Error('请输入邮箱'))
//   } else if (!isvalidEmail(value)) {
//     callback(new Error('请输入正确格式的邮箱信息'))
//   } else {
//     callback()
//   }
// }
export default {
  name: 'LostPublish',
  data () {
    return {
      form: {
        type: -1,
        kindId: null,
        id: null,
        name: '', // 物品名称
        lostTime: '',
        placeId: 1, // 丢失/拾遗地点id,对应位置表
        position: '', // 丢失/拾遗详细位置
        description: '',
        username: '', // 失物或拾主姓名
        telephone: '',
        email: '',
        createBy: localStorage.getItem('id'), // 当前用户的id，跳转到该页面的时候传进来的
        // stateId默认为0
        stateId: 0
      },
      rules: {
        type: [
          { required: true, message: '请选择信息类型', trigger: 'change' }
        ],
        kindId: [
          { required: true, message: '请选择物品种类', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入物品名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        lostTime: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        palceId: [
          { required: true, message: '请选择地点', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请输入具体位置', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请填写相关物品描述', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请填写您的姓名', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, trigger: 'blur', validator: validPhone } // 这里需要用到全局变量
          // { required: true, message: '请填写您的手机号码', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写您的邮箱', trigger: 'blur' }
          // { required: true, trigger: 'blur', validator: validEmail }
        ]
      },
      socketPush: [],
      kind_ids: [],
      place_ids: [],
      typeName: '丢失',
      findList: {},
      claimList: {}
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

    loadKindIds () {
      var _this = this
      axios({
        method: 'get',
        url: 'http://localhost:8180/lostKind/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.kind_ids = resp.data.data
        }
      }).catch(error => error)
    },
    loadPlaceIds () {
      var _this = this
      axios({
        method: 'get',
        url: 'http://localhost:8180/lostPlace/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.place_ids = resp.data.data
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
    // ===========================================================================
    getFile (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    // 自定义弹框
    openAlert () {
      console.log('自定义弹框')
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.form.lostTime = this.dateFormat(this.form.lostTime).toString()
          console.log(this.form)
          axios({
            method: 'post',
            url: 'lostInformation/add',
            data: this.form,
            header: {
              'Content-Type': 'multipart/form-data',
              charset: 'UTF-8'
            }
          }).then(resp => {
            if (resp.data.code === 200) {
              this.form = {
                type: 0,
                kindId: null,
                id: null,
                name: '', // 物品名称
                lostTime: '',
                placeId: 1, // 丢失/拾遗地点id,对应位置表
                position: '', // 丢失/拾遗详细位置
                description: '',
                username: '', // 失物或拾主姓名
                telephone: '',
                email: '',
                createBy: localStorage.getItem('id'), // 当前用户的id，跳转到该页面的时候传进来的
                // stateId默认为0
                stateId: 0
              }
            }
            this.$router.push({
              path: '/lost'
            })
          }).catch(error => error)
        } else {
          return false
        }
      })
    },
    loadlunboData () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/lunbodata'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.socketPush = resp.data.data
          console.log('_this.socketPush:')
          console.log(_this.socketPush)
        }
      }).catch(error => error)
    }
  },
  created () {
    if (localStorage.getItem('id') == null) {
      this.openAlert()
    }
  },
  // 页面加载时触发的函数
  mounted: function () {
    this.initWebSocket()
    this.loadKindIds()
    this.loadPlaceIds()
    // 延时滚动
    setTimeout(() => {
      this.runMarquee()
    }, 3000)
    // 加载轮播滚动中的数据
    this.loadlunboData()
  },
  watch: {
    type: {
      handler: function () {
        if (this.formData.type === 0) {
          this.typeName = '丢失'
        } else if (this.formData.type === 1) {
          this.typeName = '拾遗'
        }
      }
    }
  }
}
</script>

<style scoped>
.lost_publish {
  height: 1000px;
  padding-top: 20px;
  position: relative;
}
.lost_publish form{
  border: 1px solid #C9C9C9;
  padding: 10px;
  background-color: #F0FAF0;
  width: 74%;
  margin: auto;
  margin-top: 26px;
}
.lost_publish form h3{
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
  height: 34px;
  line-height: 34px;
  margin-bottom: 10px;
  /*border-left: 3px solid #BBBBBB;*/
}
.lost_publish form span{
  font-size: 14px;
  display: inline-block;
  width: 72px;
  margin-left: 20px;
}
/*右侧案例*/
.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 23%;
}
.right .zhaohui {
  border: 1px solid #D6D6D6;
  padding: 10px 8px;
}
.right .renling {
  position: relative;
  padding: 10px 8px;
  border: 1px solid #D6D6D6;
  margin-top: 10px;
}

</style>
