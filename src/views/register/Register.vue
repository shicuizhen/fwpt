<template>
  <div class="register">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <h3>用户注册</h3>
      <el-form-item label="学号" prop="sno">
        <el-input v-model="form.sno"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nick">
        <el-input v-model="form.nick"></el-input>
      </el-form-item>
<!--      -->
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
<!--      -->
      <el-form-item class="form_type" label="性别" prop="sex">
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
      <el-form-item label="手机号码" prop="phone">
        <el-input type="tel" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="form.email"></el-input>
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
import '../../assets/css/lost.css'
import axios from 'axios'
export default {
  name: 'Register',
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
        { name: '计算机科学与技术' },
        { name: '2' },
        { name: '3' }
      ],
      form: {
        sno: '',
        name: '',
        password: '',
        nick: '',
        sex: -1,
        birthday: '',
        photoAddress: null,
        grade: '',
        major: '',
        phone: '',
        email: '',
        createdBy: null,
        createTime: ''
      },
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
          { required: true, message: '请选择性别', trigger: 'change' }
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
        console.log(_this.baseData)
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
    },
    submit () {
      for (const key in this.imgs) {
        const name = key.split('?')[0]
        this.formData.append('multipartFiles', this.imgs[key], name)
      }
      this.$http.post('/opinion/feedback', this.formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.alertShow = true
      })
    },
    // 图片上传
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.form.photoAddress = this.baseResultUrl
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          axios({
            method: 'post',
            url: 'users',
            data: this.form
          }).then(resp => {
            if (resp.data.code === 200) {
              this.$router.push({ path: '/login' })
            } else {
              location.reload()
              alert('该用户已注册！')
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    },
    // 头像上传
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('handleAvatarSuccess--this.imageUrl:' + this.imageUrl)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
.register{
  padding-top: 20px;
  padding-left: 20px;
  width: 60%;
}
.register h3{
  padding-left: 10px;
  margin-bottom: 20px;
}
/*头像上传*/
.register i {
  border: 1px dashed #d9d9d9;
}
.register .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/*图片上传*/
.upload-imgs{margin: 10px 0 30px 0;overflow: hidden;font-size: 0;}
.upload-imgs li{position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 10px;margin-right: 25px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;}
.upload-imgs li:hover{border-color: $them-color;}
.upload-imgs .add{display: block;background-color: #ccc;color: #ffffff;height: 94px;padding: 8px 0;}
.upload-imgs .add .iconfont{padding: 10px 0;font-size: 40px;}
.upload-imgs li:hover .add{background-color: $them-color;}
.upload-imgs li .upload{position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 118px;height: 118px;}
.upload-imgs .img{position: relative;width: 94px;height: 94px;line-height: 94px;}
.upload-imgs .img img{vertical-align: middle;}
.upload-imgs .img .close{display: none;}
.upload-imgs li:hover .img .close{display: block;position: absolute;right: -6px;top: -10px;line-height: 1;font-size: 22px;color: #aaa;}
.upload-imgs li .upload:focus {
  outline: -webkit-focus-ring-color auto 0px;
}
.help-block{
  color: #8E8E8E;
}
</style>
