<template>
  <div class="question">
    <div class="que_show">
      <div class="que_show_l"></div>
      <div class="que_show_r">
        <div class="search">
          <span class="iconfont icon-fangdajing"></span>
        </div>
        <ul>
          <li v-for="item in question" :key="item.text">
            <h3>{{item.text}}</h3>
            <div class="created">
              <span>created by {{item.createBy}}</span>
              <span>{{item.createTime}}</span>
            </div>
            <div class="answer">{{item.answer}}答</div>
            <span class="iconfont icon-dianzan"></span>
          </li>
        </ul>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="3"
            layout="total, prev, pager, next, jumper"
            :total="totalNum">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage: 1,
      // 传递的question就是如下格式，每次只传三个，因为每页只能展示三个
      // tatalNum必须是数字
      totalNum: 98,
      question: [
        {
          text: '问题1',
          createBy: '路人甲',
          createTime: '2020-10-13',
          answer: '32'
        },
        {
          text: '问题1',
          createBy: '路人甲',
          createTime: '2020-10-13',
          answer: '32'
        },
        {
          text: '问题1',
          createBy: '路人甲',
          createTime: '2020-10-13',
          answer: '32'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .question{
    width: 100%;
    background-color: #E6F6F8;
  }
  .que_show{
    width: 100%;
    height: 512px;
    position: relative;
    overflow: hidden;
    /*background-color: burlywood;*/
  }
  .que_show_l{
    height: 410px;
    width: 22.6%;
    position: absolute;
    top: 52px;
    left: 3%;
    border: 1px solid #BBBBBB;
    background-color: #fff;
  }
  .que_show_r{
    position: absolute;
    top: 0;
    right: 3%;
    width: 68%;
    height: 512px;
    /*background-color: yellow;*/
  }
  .que_show_r .search{
    margin-top: 22px;
  }
  .que_show_r .search .icon-fangdajing{
    color: #4BAF50;
    font-weight: bold;
    line-height: 36px;
  }
  .que_show_r ul{
  }
  .que_show_r li{
    height: 66px;
    margin: 16px 0;
    border: 1px solid #BBBBBB;
    padding: 20px 0px 12px 25px;
    position: relative;
    background-color: #8DD6E0;
    width: 97.5%;
  }
  .que_show_r li h3{
    font-size: 18px;
    color: #3A3637;
    width: 88%;
    letter-spacing: 3px;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .que_show_r li .created{
    font-size: 12px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 13px;
    left: 25px;
  }
  .que_show_r .created span{
    margin-right: 20px;
  }
  .que_show_r li .answer{
    position: absolute;
    top: 20px;
    right: 20px;
    border: 1px solid #BBBBBB;
    border-radius: 25px;
    padding: 3px 10px;
    background-color: #FFFFFF;
    font-size: 14px;
  }
  .que_show_r li .icon-dianzan {
    position: absolute;
    bottom: 15px;
    right: 30px;
    color: #101010;
  }
  .que_show_r .page{
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
    background-color: #E6F6F8;
  }
  /*修改element分页框颜色*/
  /deep/ .el-pager li.active {
    color: #4BAF50;
  }
  /deep/ .el-pager li:hover {
    color: #4BAF50;
  }
  /deep/ .el-pagination button:hover {
    color: #4BAF50;
  }
  /deep/ .el-input.is-active .el-input__inner {
    border-color: #4BAF50;
  }
  /deep/ .el-input__inner:focus {
    border-color: #4BAF50;
  }
  /deep/ .el-pagination button:disabled {
    background-color: #E6F6F8;
  }
  /deep/ .el-dialog {
    background: #E6F6F8;
  }
  /deep/ .el-pager li {
    background: #E6F6F8;
  }
  /deep/ .el-pagination .btn-next, .el-pagination .btn-prev {
    background-color: #E6F6F8;
  }
  /deep/ .el-pagination .btn-prev {
    background-color: #E6F6F8;
  }
</style>
