<template>
  <div class="ques_publish center">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
      <h3>发布信息</h3>
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="问题类别" prop="sortId">
        <el-select v-model="formData.sortId" placeholder="请选择问题类别">
          <el-option :label=item.name :value=item.id v-for="item in sortData" v-bind:key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细描述" prop="content">
        <el-input type="textarea" v-model="formData.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'QuesPublish',
  data () {
    return {
      formData: {
        sortId: null,
        title: '',
        content: '',
        isFinish: 0,
        createBy: localStorage.getItem('id') // 当前用户id
      },
      sortData: {},
      rules: {
        sortId: [
          { required: true, message: '请选择类别', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
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
    getSortData () {
      axios({
        method: 'get',
        url: '/quesSort/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.sortData = resp.data.data
          console.log(resp.data.data)
        }
      }).catch(error => error)
    },
    // submitForm (event) {
    //   event.preventDefault()
    //   axios({
    //     method: 'post',
    //     url: 'quesInformation',
    //     data: this.formData,
    //     header: {
    //       'Content-Type': 'multipart/form-data',
    //       charset: 'UTF-8'
    //     }
    //   }).then(resp => {
    //     if (resp.data.code === 200) {
    //       console.log(resp.data.data)
    //     }
    //   }).catch(error => error)
    // },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.formData)
          axios({
            method: 'post',
            url: 'quesInformation',
            data: this.formData,
            header: {
              'Content-Type': 'multipart/form-data',
              charset: 'UTF-8'
            }
          }).then(resp => {
            if (resp.data.code === 200) {
              this.formData = {
                sortId: null,
                title: '',
                content: '',
                isFinish: 0,
                createBy: 0 // 当前用户id
              }
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    this.getSortData()
  }
}
</script>

<style scoped>
.ques_publish {
  padding-top: 20px;
  position: relative;
}
.ques_publish form{
  margin-top: 18px;
  border: 1px solid #C9C9C9;
  padding: 10px;
  background-color: #F0FAF0;
  width: 74%;
}
.ques_publish form h3{
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
  height: 34px;
  line-height: 34px;
  margin-bottom: 10px;
  /*border-left: 3px solid #BBBBBB;*/
}
.ques_publish form span{
  font-size: 14px;
  display: inline-block;
  width: 72px;
  margin-left: 20px;
}
</style>
