<template>
  <div class="ques_publish">
    <form action="">
      <h3>发布信息</h3><br/>
      <div>
        <label for="sortId">问题类别：</label>
        <select v-model="formData.sortId" name="sortId" id="sortId">
          <option v-for="item in sortData" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div>
        <label for="title">标题：</label>
        <input v-model="formData.title" id="title" type="text">
        <br/>
      </div>
      <div>
        <label for="content">内容：</label>
        <input v-model="formData.content" id="content" type="text">
        <br/>
      </div>
      <button  @click="submitForm($event)">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'QuesPublish',
  data () {
    return {
      formData: {
        sortId: 0,
        title: '',
        content: '',
        isFinish: 0,
        createBy: 0 // 当前用户id
      },
      sortData: {}
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
    submitForm (event) {
      event.preventDefault()
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
          console.log(resp.data.data)
        }
      }).catch(error => error)
    }
  },
  mounted () {
    this.getSortData()
  }
}
</script>

<style scoped>

</style>
