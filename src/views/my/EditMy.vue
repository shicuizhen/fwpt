<template>
  <div class="edit_my">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <h3>{{ form.name }}信息修改</h3>
      <el-form-item label="学号" prop="sno">
        <el-input v-model="form.sno"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nick">
        <el-input v-model="form.nick"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <div class="form-group">
          <div class="control-form">
            <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M)</p>
            <ul class="upload-imgs">
              <li v-if="imgLen>=1 ? false : true">
                <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                <a class="add">
                  <i class="iconfont icon-plus"></i><p>点击上传</p>
                </a>
              </li>
              <li v-for='(value, key) in imgs' v-bind:key="key">
                <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
              </li>
            </ul>
          </div>
        </div>
      </el-form-item>
      <el-form-item class="form_type" label="性别" v-model="sex" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-col :span="11">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="年级" prop="grade">
        <el-select v-model="form.grade" placeholder="请选择年级">
          <el-option :label=item.name :value=item.name v-for="item in grades" v-bind:key="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-select v-model="form.major" placeholder="请选择专业">
          <el-option :label=item.name :value=item.name v-for="item in majors" v-bind:key="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditMy',
  data () {
    return {
      sexs: {
        0: '男',
        1: '女'
      },
      grades: [
        { name: '17' },
        { name: '18' },
        { name: '19' },
        { name: '20' }
      ],
      majors: [
        { name: '软件工程' },
        { name: '1' },
        { name: '2' },
        { name: '3' }
      ],
      form: {},
      rules: {
        sno: [
          { required: true, message: '请填写学号信息', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11位', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度为2-4位', trigger: 'blur' }
        ],
        nick: [
          { required: true, message: '请填写昵称', trigger: 'blur' },
          { min: 1, max: 8, message: '长度为1-8位', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请选择出生年月日', trigger: 'change' }
        ],
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请选择专业', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请填写您的手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请填写您的邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6位', trigger: 'blur' }
        ]
      },
      // 图片上传
      imageUrl: '',
      // 图片上传，回显
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      // 图片base64编码
      baseData: '',
      baseResultUrl: ''
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.form.photoAddress = this.baseResultUrl
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.form.lostTime = this.dateFormat(this.form.lostTime).toString()
          console.log(this.form)
          axios({
            method: 'post',
            url: 'users',
            data: this.form
          }).then(resp => {
            if (resp.data.code === 200) {
              console.log('-============================')
              const redirect = decodeURIComponent('/my_page')
              this.$router.push({ path: redirect })
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    },
    // 加载当前用户数据
    loadMy () {
      var _this = this
      axios({
        method: 'post',
        url: 'users/datas/uid',
        params: {
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.form = resp.data.data
        }
      }).catch(error => error)
    },
    // 图片上传
    addImg (event) {
      var _this = this
      var reader = new FileReader()
      const inputDOM = this.$refs.inputer
      // 通过DOM取文件数据
      this.fil = inputDOM.files
      // 使用该对象读取file文件
      reader.readAsDataURL(this.fil[0])

      // 校验图片
      const oldLen = this.imgLen
      const len = this.fil.length + oldLen
      if (len > 1) {
        alert('最多可上传1张')
        return false
      }
      for (let i = 0; i < this.fil.length; i++) {
        const size = Math.floor(this.fil[i].size / 1024)
        if (size > 5 * 1024 * 1024) {
          alert('请选择5M以内的图片！')
          return false
        }
        this.imgLen++
        this.$set(this.imgs, this.fil[i].name + '?' + new Date().getTime() + i, this.fil[i])
      }
      // 读取文件成功后执行的方法函数
      reader.onload = function (e) {
        _this.baseData = e.target.result
        axios.post('users/img', {
          baseData: _this.baseData
        }, {
          'Content-Type': 'application/json', charset: 'UTF-8'
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.baseResultUrl = resp.data.data
          }
        })
      }
    },
    getObjectURL (file) {
      var url = null
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      // url是http动态地址
      return url
    },
    delImg (key) {
      this.$delete(this.imgs, key)
      this.imgLen--
    }
  },
  mounted: function () {
    this.loadMy()
  }
}
</script>

<style scoped>
.edit_my{
  margin: auto;
  height: 800px;
  padding-top: 20px;
  width: 60%;
}
.edit_my h3{
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
