<template>
  <div class="lost_publish center">
    <form action="">
      <h3>发布信息</h3><br/>
      <div>
        <label for="xun">信息类型:</label>
        <label for="xun">寻物启事</label>
        <input name="kind_id" id="xun" type="radio">
        <label for="zhao">招领启事</label>
        <input name="kind_id" id="zhao" type="radio">
        <br/>
      </div>
      <div>
        <label for="kind_id">物品种类：</label>
        <select name="kind_id" id="kind_id">
          <option v-for="item in kind_ids" v-bind:key="item.id">{{item.name}}</option>
        </select>
<!--        <el-select v-model="searchData.id" placeholder="请选择" @change="currentSelVenderId">-->
<!--          <el-option-->
<!--            v-for="direction in formData.accountIdDict"-->
<!--            :key="direction.value"-->
<!--            :label="direction.name"-->
<!--            :value="direction.value">-->
<!--          </el-option>-->
<!--        </el-select>-->
      </div>
      <div>
        <label for="name">物品名称：</label>
        <input id="name" type="text"><br/>
      </div>
      <div>
        <label for="lost_time">拾遗时间：</label>
        <input id="lost_time" value="2021-01-01" type="date"><br/>
      </div>
      <div>
        <label for="place_id">拾遗地点：</label>
        <select name="place_id" id="place_id">
          <option v-for="item in place_ids" v-bind:key="item.id">{{item.name}}</option>
        </select>
      </div>
      <div>
        <label for="description">详细描述：</label>
        <input id="description" type="text">
        <input type="file">
        <br/>
      </div>
      <div>
        <label for="username">联系人：</label>
        <input id="username" type="text"><br/>
      </div>
      <div>
        <label for="telephone">手机号码：</label>
        <input id="telephone" type="tel"><br/>
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input id="email" type="email"><br/>
      </div>
      <button>提交</button>
    </form>
    ------------------------------------------------------
<!--    <el-form :model="publishForm" status-icon :rules="rules" ref="publishForm" label-width="100px">-->
<!--      <el-form-item label="信息类型" prop="type">-->
<!--        <button>寻物启事</button>-->
<!--        <button>招领启事</button>-->
<!--      </el-form-item>-->
<!--      <el-select prop="kind_id" v-model="kind_ids.setId" ref="kind_id" class="filter-item" placeholder="物品种类" >-->
<!--        <el-option v-for="item in kind_ids" :key="item.id" :label="item.name" :value="item.id" />-->
<!--      </el-select>-->
<!--      <el-select v-model="select_value" value-key="id" placeholder="请选择">-->
<!--        <el-option v-for="item in kind_ids" :label="item.label" :key="item.id" :value="item.name">-->
<!--        </el-option>-->
<!--      </el-select>-->
<!--      <el-form-item label="物品名称" prop="name">-->
<!--        <el-input v-model="publishForm.name" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="拾遗时间" prop="lost_time">-->
<!--        <el-input v-model="publishForm.lost_time" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="拾遗地点" prop="place_id">-->
<!--        <el-input v-model="publishForm.place_id" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="详情描述" prop="description">-->
<!--        <el-input v-model="publishForm.description" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm('publishForm')">提交</el-button>-->
<!--        <el-button @click="resetForm('publishForm')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LostPublish',
  data () {
    return {
      kind_ids: {},
      place_ids: {},
      select_value: {},
      formData: {
        dateRange: [],
        feeTypeDict: [],
        accountIdDict: []
      }
    }
  },
  methods: {
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
    }
    // loadFeeTypes () {
    //   this.$axios.post('http://localhost:8180/lostPlace/datas').then((response) => {
    //     if (response.data.success) {
    //       var configs = response.data.itemList
    //       if (configs != null && configs !== 'null' && configs.length > 0) {
    //         var a = []
    //         for (var i = 0; i < configs.length; i++) {
    //           var fee = configs[i].split('_')
    //           var item = {
    //             feeType: '',
    //             feeName: ''
    //           }
    //           item.feeType = fee[0] + '_' + fee[1]
    //           item.feeName = fee[2]
    //           a[i] = item
    //         }
    //         this.formData.feeTypeDict = a
    //       }
    //     } else {
    //       this.$message({
    //         showClose: true,
    //         message: '查询失败！',
    //         type: 'error'
    //       })
    //     }
    //   })
    // }
  },
  mounted: function () {
    this.loadKindIds()
    this.loadPlaceIds()
  }
}
</script>

<style scoped>
.lost_publish{
  padding-top: 20px;
}
.lost_publish h3{
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
  height: 34px;
  line-height: 34px;
  border-left: 3px solid #BBBBBB;
}
.lost_publish span{
  font-size: 14px;
  display: inline-block;
  width: 72px;
  margin-left: 20px;

}
.lost_publish div{
  margin-bottom: 20px;
}
</style>
