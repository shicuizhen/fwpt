<template>
  <div class="question">
    <div class="top">
      <a href="">我要提问</a>
      <ul class="sort cen2">
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>分类</span>
            <p>类别名称</p>
            <span>讨论次数&nbsp;2342</span>
            <span>问题数&nbsp;321</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="cen2">
      <div class="left">
        <div class="search">
          <p>平台最新问题</p>
          <a href="" >选择分类</a>
          <i @click="icon_down()" class="el-icon-arrow-down" :class="{hidden : downState}" aria-hidden="true"></i>
          <i @click="icon_up()" class="el-icon-arrow-up" :class="{hidden : state}" aria-hidden="true"></i>
          <ul :class="{xlk : true, hidden : state}">
            <li>全部</li>
            <li>生活类问题</li>
            <li>学习类问题</li>
            <li>退出</li>
          </ul>
          <input type="text" value="搜索" onfocus="if (value == '搜索'){value = ''}" onblur="if (value == ''){value = '搜索'}">
          <div class="no_solve butt">
            仅看未解决&nbsp;
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </div>
        </div>
        <ul class="list">
          <li class="que">
            <h4>这是一个问题的标题！</h4>
            <span><img src="../../assets/images/1.jpeg" alt=""></span>
            <span>用户甲</span>
            <span>一个小时前发布</span>
            <span class="que_sort">问题类别</span>
            <span class="iconfont">&#xe775;</span>
            <p>问题的内容，瑞丰园大赛范德萨胡椒粉电话就卡了,问题的内容，瑞丰园大 范德萨胡椒粉电话就卡了问题的内容，瑞丰园大aohj 范德萨胡椒粉电话就卡了问题的内容，瑞丰园大赛范德萨胡椒粉电话就卡了问题的内容，瑞丰园大j 范德萨胡椒粉电话就卡了问题的内容，瑞丰园大赛ufyapsydfuiysuiayfduiysaohj 范德萨胡椒粉电话就卡了</p>
            <div class="que_num">回答 (231)</div>

            <ul class="reply">
              <span class="el-icon-caret-top" aria-hidden="true"></span>
<!--              <input type="text">-->
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <li>
                <p>回答的具体内容：这是一个回答，可以有图片的那种</p>
                <span><img src="../../assets/images/1.jpeg" alt=""></span>
                <span>用户甲</span>
                <span>一个小时前发布</span>
                <button>评论（322）</button>
                <span class="iconfont">&#xe775;</span>
<!--                <ul class="comm">-->
<!--                  <span class="el-icon-caret-top" aria-hidden="true"></span>-->
<!--                  <input type="text" value="这是一个评论。。。">-->
<!--                  <li>-->
<!--                    <span><img src="../../assets/images/1.jpeg" alt=""></span>-->
<!--                    <span>用户甲</span>-->
<!--                    <p>评论的具体内容：人情味儿无群而我却热完全而我却人情味热王企鹅无群</p>-->
<!--                    <span>一个小时前发布</span>-->
<!--                    <span><button>回复</button></span>-->
<!--                    <span class="iconfont">&#xe775;</span>-->
<!--                  </li>-->
<!--                </ul>-->
              </li>
            </ul>

          </li>
        </ul>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  data: function () {
    return {
      downState: false,
      state: true,
      inp_val: '搜索'
    }
  },
  methods: {
    icon_down () {
      this.downState = true
      this.state = false
    },
    icon_up () {
      this.downState = false
      this.state = true
    }
  }
}
</script>

<style scoped>
  /*中间-左侧-问题展示列表---开始*/
  /*问题部分*/
  .left .list{
  }
  .left .list .que{
    background-color: #8DD6E0;
    padding: 10px 10px;
    overflow: hidden;
    margin-top: 10px;
  }
  .que h4{
    font-family: 微软雅黑;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .que img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .que span{
    float: left;
    margin-right: 20px;
    font-size: 14px;
    line-height: 22px;
  }
  .que .que_sort{
    border: 1px solid #fff;
    padding: 2px 5px;
    line-height: 16px;
  }
  .que .iconfont{
    font-size: 22px;
    float: right;
  }
  .que p{
    /*清除前面元素的浮动*/
    clear: both;
    padding-top: 5px;
    line-height: 25px;
    letter-spacing: 1px;
  }
  .que .que_num{
    padding: 5px 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    background-color: #72C076;
    border: 1px solid #72C076;
    display: inline-block;
  }
  .que .que_num:hover{
    border: 1px solid #fff;
  }
  /*回答部分*/
  .que .reply{
    background-color: orange;
    position: relative;
  }
  .reply .el-icon-caret-top{
    position: absolute;
    top: -15px;
    left: 30px;
  }
  .reply textarea{
    height: 26px;
    width: 100%;
    line-height: 26px;
    text-indent:2em;
  }
  /*中间-左侧-问题展示列表---结束*/
</style>
