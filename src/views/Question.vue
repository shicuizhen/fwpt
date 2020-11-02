<template>
  <div class="question">
    <div class="que_show">
      <div class="que_show_l"></div>
      <div class="que_show_r">
        <div class="search">
          <span class="iconfont icon-fangdajing"></span>
        </div>
        <ul>
          <li>
            <h3>这是一个问题这个是一个问题一个问题问题就是那个问题的内容？这是一个问题这个是一个问题一个问题问题就是那个问题的内容这是一个问题这个是一个问题一个问题问题就是那个问题的内容这是一个问题这个是一个问题一个问题问题就是那个问题的内容</h3>
            <span>created by 用户甲</span>
            <span>2020-09-23</span>
            <div>2答</div>
            <span class="iconfont icon-dianzan"></span>
          </li>
          <li>
            <h3>这是一个问题这个是一个问题一个问题问题就是那个问题的内容？</h3>
            <span>created by 用户甲</span>
            <span>2020-09-23</span>
            <div>2答</div>
            <span class="iconfont icon-dianzan"></span>
          </li>
          <li>
            <h3>这是一个问题这个是一个问题一个问题问题就是那个问题的内容？</h3>
            <span>created by 用户甲</span>
            <span>2020-09-23</span>
            <div>2答</div>
            <span class="iconfont icon-dianzan"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Question'
}
</script>
<style scoped>
  .question{
    width: 100%;
  }
  .que_show{
    width: 100%;
    height: 512px;
    position: relative;
    overflow: hidden;
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
    /*background-color: lightyellow;*/
    padding: 20px 0;
  }
  .que_show_r .search{
    margin: 12px 0 5px 0;
  }
  .que_show_r .search .icon-fangdajing{
    color: #4BAF50;
    font-weight: bold;
  }
  .que_show_r li{
    height: 98px;
    width: 100%;
    margin: 16px 0;
    border: 1px solid #BBBBBB;
    padding: 20px 0 12px 25px;
  }
  .que_show_r h3{
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
    width: 88%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .que_show_r h3::after{
    content:"";
  }
  .que_show_r .icon-dianzan {
    color: #101010;
  }
</style>
