<template>
    <div class="login">
      <form class="bgi">
        <h3>石家庄学院生活服务平台登录</h3><br/>
        <span v-if="error">{{ this.error }}</span>
        <div>
          <label for="sno">学号：</label>
          <input v-model="formData.sno" id="sno" type="text"><br/>
        </div>
<!--        <div>-->
<!--          <label for="name">姓名：</label>-->
<!--          <input v-model="formData.name" id="name" type="text"><br/>-->
<!--        </div>-->
        <div>
          <label for="password">密码：</label>
          <input v-model="formData.password" id="password" type="password"><br/>
        </div>
        <button  @click="submitForm($event)">提交</button>
        <a href="/register">还没注册？</a>
      </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        sno: '',
        password: ''
      },
      error: ''
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      document.querySelector('#goToTop').scrollIntoView(true)
    }
  },
  methods: {
    // submitLogin () {
    //   this.$refs.loginForm.validate((valid) => {
    //     if (valid) {
    //       this.loading = true
    //       this.postRequest('/doLogin', this.loginForm).then(resp => {
    //         this.loading = false
    //         if (resp) {
    //           this.$store.commit('INIT_CURRENTHR', resp.obj)
    //           window.sessionStorage.setItem('user', JSON.stringify(resp.obj))
    //           const path = this.$route.query.redirect
    //           this.$router.replace((path === '/' || path === undefined) ? '/home' : path)
    //         } else {
    //           this.vcUrl = '/verifyCode?time=' + new Date()
    //         }
    //       })
    //     } else {
    //       return false
    //     }
    //   })
    // },
    submitForm (event) {
      event.preventDefault()
      axios({
        method: 'post',
        url: '/users/login',
        data: this.formData,
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
          location.reload()
          this.formData = {
            sno: '',
            password: ''
          }
          console.log('------------')
        } else {
          // 提示用户登录信息错误
          this.error = resp.data.data
        }
      }).catch(error => error)
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
</style>
