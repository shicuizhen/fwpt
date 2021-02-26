<template>
  <div class="register">
    <form action="">
      <h3>用户注册</h3><br/>
      <div>
        <label for="sno">学号：</label>
        <input v-model="formData.sno" id="sno" type="text"><br/>
      </div>
      <div>
        <label for="name">姓名：</label>
        <input v-model="formData.name" id="name" type="text"><br/>
      </div>
      <div>
        <label for="password">密码：</label>
        <input v-model="formData.password" id="password" type="password"><br/>
      </div>
      <div>
        <label for="nick">昵称：</label>
        <input v-model="formData.nick" id="nick" type="text"><br/>
      </div>
      <div>
        <label for="sex">性别：</label>
        <select v-model="formData.sex" name="sex" id="sex">
          <option v-for="(item, index) in sexs" :key="item" :value="index">{{item}}</option>
        </select>
      </div>
      <div>
        <label for="birthday">出生日期：</label>
        <input v-model="formData.birthday" id="birthday" value="2001-01-01" type="date"><br/>
        <input v-model="formData.lostTime" id="lost_time" value="2021-01-01" type="date"><br/>
      </div>
      <div>
        <label for="grade">年级：</label>
        <select v-model="formData.grade" name="grade" id="grade">
          <option v-for="item in grades" :key="item.id" :value="item">{{item}}</option>
        </select>
      </div>
      <div>
        <label for="major">专业：</label>
        <select v-model="formData.major" name="major" id="major">
          <option v-for="item in majors" :key="item.id" :value="item">{{item}}</option>
        </select>
      </div>
      <div>
        <label for="phone">手机号码：</label>
        <input v-model="formData.phone" id="phone" type="tel"><br/>
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input v-model="formData.email" id="email" type="email"><br/>
      </div>
      <div>
        <label for="photo_address">头像地址：</label>
        <input v-model="formData.photo_address" id="photo_address" type="text"><br/>
      </div>
      <button  @click="submitForm($event)">提交</button>
    </form>
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
      grades: ['17'],
      majors: ['软件工程', '计算机'],
      formData: {
        sno: '',
        name: '',
        password: '',
        nick: '',
        sex: 1,
        birthday: '',
        // birthday: '2020-11-11T19:37:05.000+00:00',
        photoAddress: '',
        grade: -1,
        major: '',
        phone: '',
        email: '',
        createdBy: null,
        createTime: '',
        updateBy: null,
        updateTime: ''
      }
    }
  },
  methods: {
    submitForm (event) {
      event.preventDefault()
      axios({
        method: 'post',
        url: 'users',
        data: this.formData
      }).then(resp => {
        if (resp.data.code === 200) {
          // 添加用户完成，将默认数据置空
          this.formData = {
            sno: '',
            name: '',
            password: '',
            nick: '',
            sex: 1,
            birthday: '',
            photoAddress: '',
            grade: -1,
            major: '',
            phone: '',
            email: '',
            createdBy: null,
            createTime: '',
            updateBy: null,
            updateTime: ''
          }
        }
      }).catch(error => error)
    }
  }
}
</script>

<style scoped>

</style>
