<template>
  <div class="report">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <h3>信息举报</h3>
      <el-form-item label="举报内容" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
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
  name: 'report',
  data () {
    return {
      form: {
        id: null,
        content: '',
        uid: localStorage.getItem('id'), // 当前用户id
        createTime: null
      },
      sortData: {},
      rules: {
        content: [
          { required: true, message: '请填写问题详情', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (localStorage.getItem('id') == null) {
      this.openAlert()
    }
  },
  methods: {
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
          message: '记得登录哦!',
          beforeClose: this.$router.push({ path: '/home' })
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          axios({
            method: 'post',
            url: 'quesReport',
            data: this.form,
            header: {
              'Content-Type': 'multipart/form-data',
              charset: 'UTF-8'
            }
          }).then(resp => {
            if (resp.data.code === 200) {
              this.form = {
                id: null,
                content: '',
                uid: localStorage.getItem('id'), // 当前用户id
                createTime: null
              }
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
.report{
  height: 500px;
  padding: 50px ;
}
.report h3{
  padding: 30px ;
}
</style>
