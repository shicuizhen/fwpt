<template>
  <div class="edit_my">
    <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
      <h3>{{ form.name }}信息修改</h3>
      <el-form-item label="学号" prop="sno">
        <div>{{form.sno}}</div>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <div>{{form.name}}</div>
      </el-form-item>
      <el-form-item label="昵称" prop="nick">
        <el-input v-model="form.nick"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <div class="form-group">
          <div class="control-form">
            <p class="help-block" style="padding-bottom: 20px;">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M)</p>
            <ul class="upload-imgs">
              <li v-if="imgLen>1 || imgLen===1 ? false : true">
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
      <el-form-item class="form_type" label="性别" prop="sex">
        <div v-if="form.sex === 0">男</div>
        <div v-if="form.sex === 1">女</div>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-col :span="11">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="年级" prop="grade">
        <div>{{form.grade}}</div>
      </el-form-item>
      <el-form-item label="院系" prop="college">
        <div>{{college}}</div>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <div>{{major}}</div>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
      <el-form-item>
        <div>不可编辑的信息请由管理员核对信息后进行修改</div>
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
      grades: [
        { name: '17' },
        { name: '18' },
        { name: '19' },
        { name: '20' }
      ],
      form: {
        sex: null
      },
      // 图片上传
      imageUrl: '',
      // 图片上传，回显
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      // 图片base64编码
      baseData: '',
      baseResultUrl: '',
      college: '',
      major: ''
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
          console.log('提交修改============form')
          console.log(this.form)
          axios({
            method: 'post',
            url: 'users/edit',
            data: this.form
          }).then(resp => {
            if (resp.data.code === 200) {
              console.log('提交修改成功')
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
        url: 'users/datas/%7Buid%7D',
        params: {
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.form = resp.data.data
          _this.major = _this.form.major.major
          _this.form.major = _this.form.major.id
          console.log(_this.form)
          this.loadCollegeName()
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
    loadCollegeName () {
      axios({
        method: 'get',
        url: 'college/datas/%7Bmid%7D',
        params: {
          mid: this.form.major
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.college = resp.data.data.college
        }
      }).catch(error => error)
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
  height: 980px;
  padding-top: 20px;
  width: 60%;
}
.edit_my h3{
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
