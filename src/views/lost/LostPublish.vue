<template>
  <div class="lost_publish center">
    <div class="lunbo" >
      <a href="http://localhost:8080/lost_publish">发布信息</a>
      <svg t="1613185669871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4561" width="200" height="200"><path d="M260.7 431.1h60.4v258.2h-60.4zM634.3 795.5l-190.9-88.4c-8.1-3.7-13.2-11.5-13.2-19.9V442.4c0-8.5 5.1-16.2 13.2-19.9l190.9-88.4c15.6-7.2 33.9 3.5 33.9 19.9v421.5c0 16.5-18.3 27.2-33.9 20z" fill="#25B195" p-id="4562"></path><path d="M290.5 709.4h-50.3c-26.6 0-48.2-21.6-48.2-48.2V407.8c0-26.6 21.6-48.2 48.2-48.2h50.3c26.6 0 48.2 21.6 48.2 48.2v253.4c-0.1 26.6-21.7 48.2-48.2 48.2z m-50.4-317.7c-8.9 0-16.1 7.2-16.1 16.1v253.4c0 8.9 7.2 16.1 16.1 16.1h50.3c8.9 0 16.1-7.2 16.1-16.1V407.8c0-8.9-7.2-16.1-16.1-16.1h-50.3zM644 815c-7.1 0-14.2-1.4-20.8-4.1l-236.8-98.6c-17.7-7.4-29.1-23.6-29.1-41.3V398.1c0-17.8 11.4-34 29.1-41.3l236.8-98.6c16.5-6.9 35.7-5.1 50.3 4.7 12.9 8.6 20.3 22 20.3 36.6v470.1c0 14.7-7.4 28-20.3 36.6-8.7 5.8-19.1 8.8-29.5 8.8z m0-519.6c-1.6 0-3.2 0.3-4.9 1L402.3 395c-2.7 1.1-3.6 2.7-3.6 3.1V671c0 0.4 0.9 2 3.6 3.1l236.8 98.6c4.3 1.8 8.9 0.8 11.5-0.9 0.9-0.6 1.9-1.6 1.9-2.2V299.5c0-0.7-1-1.6-1.9-2.2-1.6-1.1-4-1.9-6.6-1.9zM718.4 517h149.1v41.9H718.4zM725.412 383.092L830.84 277.663l29.628 29.628L755.039 412.72zM755.047 663.173l105.429 105.429-29.628 29.628L725.42 692.8z" fill="#595857" p-id="4563"></path></svg>
      <h3>
        最新播报：
      </h3>
      <div class="marquee-box">
        <ul class="marquee-ul" id="marquee-ul" v-if="socketPush">
          <li class="marquee-list" v-for='(value,key) in socketPush' v-bind:key="key" v-html="value" :id="key==2?'marquee':''"></li>
        </ul>
      </div>
    </div>
    <form action="">
      <h3>发布信息</h3><br/>
      <div>
        <label for="xun">信息类型:</label>

        <label for="xun" v-bind:type="0">寻物启事</label>
        <input v-model="formData.type" :value="0" name="kind" id="xun" type="radio">

        <label for="zhao" v-bind:type="1">招领启事</label>
        <input v-model="formData.type" :value="1" name="kind" id="zhao" type="radio">
        <br/>
      </div>
      <div>
        <label for="kind_id">物品种类：</label>
        <select v-model="formData.kindId" name="kind_id" id="kind_id">
          <option v-for="item in kind_ids" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div>
        <label for="name">物品名称：</label>
        <input v-model="formData.name" id="name" type="text"><br/>
      </div>
      <div>
        <label for="lost_time">{{ typeName }}时间：</label>
        <input v-model="formData.lostTime" id="lost_time" value="2021-01-01" type="date"><br/>
      </div>
      <div>
        <label for="place_id">{{ typeName }}地点：</label>
        <select v-model="formData.placeId" name="place_id" id="place_id">
          <option v-for="item in place_ids" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div>
        <label for="position">具体位置：</label>
        <input v-model="formData.position" id="position" type="text">
        <br/>
      </div>
      <div>
        <label for="description">详细描述：</label>
        <input v-model="formData.description" id="description" type="text">
        <input type="file" @change="getFile($event)" >
        <br/>
      </div>
      <div>
        <label for="username">联系人：</label>
        <input v-model="formData.username" id="username" type="text"><br/>
      </div>
      <div>
        <label for="telephone">手机号码：</label>
        <input v-model="formData.telephone" id="telephone" type="tel"><br/>
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input v-model="formData.email" id="email" type="email"><br/>
      </div>
      <button  @click="submitForm($event)">提交</button>
    </form>
    <div class="right">
      <div class="zhaohui">
        <h3>失物找回案例</h3>
        <ul>
          <li v-for = "(item, index) in findList" v-bind:key="item.name">
            <a href="" id="get_icon">
              <i v-if="index == 0" class="el-icon-reading"></i>
              <i v-if="index == 1" class="el-icon-magic-stick"></i>
              <i v-if="index == 2" class="el-icon-office-building"></i>
              <i v-if="index == 3" class="el-icon-present"></i>
              <i v-if="index == 4" class="el-icon-camera"></i>
              <i v-if="index == 5" class="el-icon-table-lamp"></i>
              <i v-if="index == 6" class="el-icon-office-building"></i>
              <i v-if="index == 7" class="el-icon-position"></i>
              <i v-if="index == 8" class="el-icon-ship"></i>
              <i v-if="index == 9" class="el-icon-sunrise"></i>
              <i v-if="index == 10" class="el-icon-lollipop"></i>
              <p>{{ item.name }}</p>
              <i class="el-icon-right"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="renling">
        <h3>成功认领案例</h3>
        <ul>
          <li v-for = "(item) in claimList" v-bind:key="item.id">
            <a href="">
              <div>
                <svg t="1612608284273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11976" width="200" height="200"><path d="M859.9104 609.92512l0 45.6c-0.67968 2.21952-1.5104 4.4352-1.9648 6.70464-4.66048 24.09984-7.28448 48.82944-14.31552 72.22016-20.84992 69.02016-59.92064 126.53952-114.6944 173.50016-42.24512 36.2496-89.7856 62.36544-144.1344 75.22048-17.87008 4.23552-36.19456 6.73024-54.32064 10.0352l-45.5744 0c-2.21952-0.6848-4.49024-1.72032-6.75456-1.87008-48.12544-2.9952-93.72544-15.52512-136.50048-37.38496-80.86528-41.18528-139.19488-102.5152-165.83552-190.74048-5.67424-18.8544-8.03968-38.62016-11.9744-57.97504l0-43.50976c1.7152-10.69056 3.2-21.47456 5.21984-32.16 8.61952-46.68544 29.36576-88.0256 56.83968-126.19008 25.91488-35.92064 53.44-70.70464 78.016-107.53536 26.56896-39.95008 39.424-84.2944 31.88992-132.9152-1.4848-9.60512-2.87488-19.20896-4.33536-28.76416 0.98048-0.25088 1.9648-0.45056 2.9504-0.73088 59.31008 62.16064 68.96512 138.46528 60.49408 220.92032 2.17088-2.31936 3.98592-3.93472 5.37088-5.79968 50.33984-68.08448 71.96416-143.29984 55.55456-227.54688-10.42944-53.58976-32.99456-101.76512-70.32448-141.81504C369.3056 61.84576 349.69472 47.65568 331.61984 32l18.65472 0c1.536 0.62976 2.976 1.7152 4.53504 1.86496 32.82048 2.81984 63.65056 12.95488 93.02016 27.2 67.17056 32.51584 121.62048 80.58496 167.17056 139.22048 66.9504 86.27968 110.48448 181.99424 119.10528 292.19968 3.30496 42.06976-0.9856 82.95552-12.19968 123.2896-4.23552 15.27552-10.21056 30.04544-15.68 45.94944 21.72544-9.25056 38.24-23.38944 50.9952-41.7152 38.04032-54.77504 48.67456-115.85536 40.05504-183.38048 2.80064 3.24992 4.23552 4.53504 5.21472 6.14528 22.91456 36.19968 40.05504 74.81472 49.0048 116.78464C855.05024 576.17024 857.11488 593.1648 859.9104 609.92512M501.56544 529.61536c-0.85504 0.60544-1.79072 1.2352-2.67008 1.84064-1.18528 16.64-2.06976 33.30048-3.68 49.93536-2.37056 25.38496-8.44544 49.85984-20.32 72.62464-14.52032 27.87968-38.7904 45.21984-65.69088 59.01056-29.00992 14.9696-47.28448 36.34944-49.65504 70.10048-2.46912 34.70976 7.96544 63.86944 35.94496 85.20064 26.21568 19.96032 56.84096 26.4704 89.3056 25.38496 51.82976-1.6896 90.4448-26.32064 105.92512-78.1952 11.11552-37.23008 9.30048-74.71488 1.86496-112.19456-10.16064-51.37536-28.76544-99.26528-60.60032-141.2352C523.04512 550.36032 511.7504 540.40448 501.56544 529.61536" p-id="11977" fill="#d81e06"></path></svg>
                <span>{{ item.num }}</span>
              </div>
              <p>{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../../assets/css/lost.css'
export default {
  name: 'LostPublish',
  data () {
    return {
      socketPush: [
        // { data: '全球新冠肺炎确诊病例超，死亡人数破<span>2万</span>！' },
        // { data: '222222222222222222222222222222' },
        // { data: '333333333333333333333333' }
      ],
      kind_ids: [],
      place_ids: [],
      typeName: '丢失',
      formData: {
        type: 0,
        kindId: 1,
        id: null,
        name: '', // 物品名称
        lostTime: '2021-01-01',
        placeId: 1, // 丢失/拾遗地点id,对应位置表
        position: '', // 丢失/拾遗详细位置
        description: '',
        username: '', // 失物或拾主姓名
        telephone: '',
        email: '',
        createBy: 0, // 当前用户的id，跳转到该页面的时候传进来的
        // stateId默认为0
        stateId: 0
      },
      findList: {},
      claimList: {}
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
    },
    // 轮播图
    runMarquee () {
      // 文字宽度，ul盒子，位移
      var width, marquee, disx
      width = document.getElementById('marquee-ul').getBoundingClientRect().width - 300
      marquee = document.getElementById('marquee-ul')
      disx = 0 // 位移距离
      // 设置位移
      setInterval(() => {
        disx-- // disx-=1; 滚动步长
        if (-disx >= width) { // 如果位移超过文字宽度，则回到起点
          disx = 30 // marquee-list中li的margin值
        }
        // marquee.style.transform = 'translateX(' + disx + 'px)'
        marquee.style.left = disx + 'px'
      }, 30) // 滚动速度
    },
    // ===========================================================================
    getFile (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    submitForm (event) {
      event.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:8180/lostInformation',
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
    },
    loadlunboData () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/lunbodata'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.socketPush = resp.data.data
          console.log('_this.socketPush:')
          console.log(_this.socketPush)
        }
      }).catch(error => error)
    }
  },
  created () {
    // 如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
  },
  // 页面加载时触发的函数
  mounted: function () {
    this.loadKindIds()
    this.loadPlaceIds()
    // 延时滚动
    setTimeout(() => {
      this.runMarquee()
    }, 3000)
    // 加载轮播滚动中的数据
    this.loadlunboData()
  },
  watch: {
    type: {
      handler: function () {
        console.log('this.formData.type :' + this.formData.type)
        console.log('===========')
        if (this.formData.type === 0) {
          this.typeName = '丢失'
        } else if (this.formData.type === 1) {
          this.typeName = '拾遗'
        }
      }
    }
  }
}
</script>

<style scoped>
.lost_publish {
  padding-top: 20px;
  position: relative;
}
.lost_publish form{
  margin-top: 18px;
  border: 1px solid #C9C9C9;
  padding: 10px;
  background-color: #F0FAF0;
  width: 76%;
}
.lost_publish form h3{
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
  height: 34px;
  line-height: 34px;
  border-left: 3px solid #BBBBBB;
}
.lost_publish form span{
  font-size: 14px;
  display: inline-block;
  width: 72px;
  margin-left: 20px;

}
.lost_publish form div{
  margin-bottom: 20px;
}
/*右侧案例*/
.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 23%;
}
.right .zhaohui {
  border: 1px solid #D6D6D6;
  padding: 10px 8px;
}
.right .renling {
  position: relative;
  padding: 10px 8px;
  border: 1px solid #D6D6D6;
  margin-top: 10px;
}
</style>
