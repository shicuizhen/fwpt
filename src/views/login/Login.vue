<template>
    <div class="login">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
        <h3>用户登录</h3>
        <el-form-item label="学号" prop="sno">
          <el-input v-model="form.sno"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button><a href="/register">注册</a></el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        sno: '',
        password: ''
      },
      rules: {
        sno: [
          {
            required: true,
            message: '请填写学号信息',
            trigger: 'blur'
          },
          {
            min: 11,
            max: 11,
            message: '长度为11位',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          },
          {
            min: 0,
            max: 12,
            message: '长度为6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      document.querySelector('#goToTop').scrollIntoView(true)
    }
  },
  methods: {
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
            url: '/users/login',
            data: this.form,
            header: {
              'Content-Type': 'multipart/form-data',
              charset: 'UTF-8'
            }
          }).then(resp => {
            console.log(resp.data.code)
            if (resp.data.code === 200) {
              // 用户登录完成，进行页面跳转
              localStorage.setItem('id', resp.data.data)
              const redirect = decodeURIComponent(this.$route.query.redirect || '/home')
              this.$router.push({ path: redirect })
              // this.$router.go(-1)
              // location.reload()
              this.form = {
                sno: '',
                password: ''
              }
              console.log('------------')
            } else {
              // 提示用户登录信息错误
              alert(resp.data.data)
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
  .bgi{
    position: absolute;
  }
  .bgi div{
    border-top: 5px solid #1ABC9C;
  }
  .bgi p{
    color: #1ABC9C;
    font-size: 18px;
  }
  .login{
    padding-top: 20px;
    padding-left: 20px;
    width: 60%;
  }
  .login h3{
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
