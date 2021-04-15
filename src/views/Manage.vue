<template>
  <div class="manage">
    <div class="title">
      <h3>石家庄学院生活服务平台后台管理系统</h3>
      <a @click="exit()">退出</a>
    </div>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>
    <el-tabs :tab-position="tabPosition" style="">
      <el-tab-pane label="信息统计">
        <ul class="dataSearch">
          <li>
            <svg t="1618477062324" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3678" width="200" height="200"><path d="M401.024 419.392 575.872 581.568 816.32 354.432 900.224 422.848 900.224 207.744 665.536 207.744 732.288 269.888 572.352 426.304 399.872 269.888 156.032 501.056 243.456 572.352Z" p-id="3679" data-spm-anchor-id="a313x.7781069.0.i5" class="selected" fill="#1296db"></path><path d="M64 752.96l896 0 0 63.296-896 0 0-63.296Z" p-id="3680"></path></svg>
            <p>问题总数：{{quesMsg.quesNum}}</p>
          </li>
          <li>
            <svg t="1618477509326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9125" width="200" height="200"><path d="M62.980915 204.452485l911.995043 0c8.682753 0 15.72617-7.010671 15.72617-15.696494 0-8.707312-7.043417-15.717983-15.72617-15.717983L597.594959 173.038008l0-15.754822c0-43.420929-35.19764-78.608336-78.612429-78.608336-43.431162 0-78.624708 35.187407-78.624708 78.608336l0 15.754822L62.980915 173.038008c-8.682753 0-15.725146 7.010671-15.725146 15.717983C47.255769 197.441814 54.298162 204.452485 62.980915 204.452485zM471.806067 157.282163c0-26.050306 21.12104-47.142693 47.177486-47.142693 26.048259 0 47.169299 21.093411 47.169299 47.142693l0 15.754822-94.345762 0L471.807091 157.282163z" p-id="9126" fill="#f4ea2a"></path><path d="M974.975958 896.325156 62.980915 896.325156c-8.682753 0-15.725146 7.046486-15.725146 15.725146 0 8.686846 7.042393 15.725146 15.725146 15.725146l911.995043 0c8.682753 0 15.72617-7.0383 15.72617-15.725146C990.702128 903.371642 983.658711 896.325156 974.975958 896.325156z" p-id="9127" fill="#f4ea2a"></path><path d="M110.154307 259.478729c-17.373693 0-31.446199 14.087856-31.446199 31.488155l0 518.879688c0 17.393135 14.072507 31.43699 31.446199 31.43699l817.648258 0c17.366529 0 31.447223-14.043854 31.447223-31.43699L959.249789 290.966884c0-17.400299-14.081717-31.488155-31.447223-31.488155L110.154307 259.478729zM927.802566 794.137799c0 8.656147-7.0383 15.708773-15.725146 15.708773L125.880477 809.846572c-8.686846 0-15.72617-7.052626-15.72617-15.708773L110.154307 306.679751c0-8.694009 7.039323-15.712867 15.72617-15.712867l786.196942 0c8.686846 0 15.725146 7.018857 15.725146 15.712867L927.802566 794.137799z" p-id="9128" fill="#f4ea2a"></path><path d="M754.839259 369.603873c-26.056446 0-47.169299 21.090341-47.169299 47.146786 0 10.310833 3.423983 19.805068 9.058306 27.588335L620.515994 590.443583c-2.366907-0.372483-4.730745-0.75827-7.190773-0.75827-7.05058 0-13.673417 1.675152-19.681248 4.440126L465.018477 440.777889c4.208858-7.05672 6.78759-15.195074 6.78759-24.026206 0-26.056446-21.120017-47.146786-47.173392-47.146786-26.048259 0-47.168276 21.090341-47.168276 47.146786 0 10.310833 3.421936 19.805068 9.06547 27.588335l-96.222505 146.104589c-2.358721-0.372483-4.722558-0.75827-7.190773-0.75827-26.052353 0-47.173392 21.141506-47.173392 47.198975 0 26.064632 21.12104 47.178509 47.173392 47.178509 26.057469 0 47.178509-21.1149 47.178509-47.178509 0-12.129248-4.710278-23.094998-12.224416-31.422663l94.396927-143.345756c3.901867 1.048889 7.9296 1.806135 12.165064 1.806135 5.717212 0 11.125385-1.179872 16.191774-3.042289l130.284275 155.328671c-3.068895 6.275937-4.957919 13.221116-4.957919 20.675902 0 26.064632 21.12104 47.178509 47.173392 47.178509 26.048259 0 47.169299-21.1149 47.169299-47.178509 0-12.129248-4.706185-23.094998-12.218276-31.422663l94.39181-143.345756c3.90289 1.048889 7.934716 1.806135 12.173251 1.806135 26.048259 0 47.169299-21.12104 47.169299-47.171346C802.008558 390.694213 780.888542 369.603873 754.839259 369.603873zM283.116591 652.597155c-8.686846 0-15.721053-7.039323-15.721053-15.711843 0-8.700149 7.034207-15.719007 15.721053-15.719007 8.682753 0 15.72617 7.018857 15.72617 15.719007C298.842761 645.557832 291.799344 652.597155 283.116591 652.597155zM424.632675 432.492178c-8.682753 0-15.72617-7.040347-15.72617-15.741519 0-8.66945 7.043417-15.71696 15.72617-15.71696 8.686846 0 15.725146 7.048533 15.725146 15.71696C440.357821 425.450808 433.319521 432.492178 424.632675 432.492178zM613.324198 652.597155c-8.686846 0-15.72924-7.039323-15.72924-15.711843 0-8.700149 7.042393-15.719007 15.72924-15.719007 8.682753 0 15.725146 7.018857 15.725146 15.719007C629.050368 645.557832 622.007975 652.597155 613.324198 652.597155zM754.839259 432.492178c-8.686846 0-15.725146-7.040347-15.725146-15.741519 0-8.66945 7.0383-15.71696 15.725146-15.71696 8.67866 0 15.72617 7.048533 15.72617 15.71696C770.566452 425.450808 763.518942 432.492178 754.839259 432.492178z" p-id="9129" fill="#f4ea2a"></path></svg>
            <p>回答总数{{quesMsg.replyNum}}</p>
          </li>
          <li>
            <svg t="1618476840176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2083" width="200" height="200"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#F2FAFF" p-id="2084"></path><path d="M505.2 691.2c4.3-2 9.3-2 13.6 0l117.6 55.4c5.9 2.8 12.4 3.8 18.9 2.9 18.6-2.4 31.7-19.5 29.3-38.1l-15.8-120.9c-0.6-4.6 0.9-9.3 4-12.8l92.6-102.5c4.1-4.5 6.9-10.1 8.1-16.1 3.7-18.4-8.2-36.3-26.6-40l-127.3-25.6c-4.5-0.9-8.4-3.7-10.7-7.7l-67.5-116.7c-3-5.2-7.3-9.4-12.4-12.4-16.3-9.4-37.1-3.8-46.5 12.4L415 385.8c-2.3 4-6.2 6.8-10.7 7.7L277 419.1c-6 1.2-11.6 4-16.1 8.1-13.9 12.6-15 34.1-2.4 48l92.6 102.5c3.1 3.5 4.6 8.2 4 12.8l-15.8 120.9c-0.8 6.5 0.2 13 2.9 18.9 8 17 28.3 24.3 45.2 16.3l117.8-55.4z m-104 84.4c-33 15.5-72.3 1.4-87.8-31.6-5.4-11.4-7.4-24.2-5.7-36.7l14.9-113.5-87.7-97c-24.4-27-22.3-68.8 4.7-93.2 8.8-8 19.6-13.4 31.3-15.7L391 363.6l63.8-110.4c18.2-31.6 58.6-42.3 90.2-24.1 10 5.8 18.3 14.1 24.1 24.1L633 363.6l120.2 24.2c35.7 7.2 58.9 42 51.7 77.7-2.3 11.6-7.8 22.4-15.7 31.3l-87.7 97 14.9 113.5c4.7 36.1-20.7 69.3-56.9 74-12.5 1.6-25.3-0.3-36.7-5.7L512 723.4l-110.8 52.2z m157.6-324.2c-6.7 3.9-10.8 11.1-10.8 18.9 0 1.3 0.4 2.6 1.1 3.7 2.1 3.1 6.3 4 9.4 2l2-1.3c7.6-5 17.4-5 25 0l2 1.3c1.1 0.7 2.4 1.1 3.7 1.1 3.8 0 6.8-3 6.8-6.8 0-7.8-4.1-15-10.8-18.9l-1.7-1c-7.7-4.5-17.3-4.5-25 0l-1.7 1z m-121 0c-6.7 3.9-10.8 11.1-10.8 18.9 0 1.3 0.4 2.6 1.1 3.7 2.1 3.1 6.3 4 9.4 2l2-1.3c7.6-5 17.4-5 25 0l2 1.3c1.1 0.7 2.4 1.1 3.7 1.1 3.8 0 6.8-3 6.8-6.8 0-7.8-4.1-15-10.8-18.9l-1.7-1c-7.7-4.5-17.3-4.5-25 0l-1.7 1z m90.2 46.3c0 8.4-7.1 15.3-16 15.3s-16-6.9-16-15.3c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 21.8 18 39.3 40 39.3s40-17.5 40-39.3c0-6.6-5.4-12-12-12s-12 5.3-12 12z" fill="#5AC1FD" p-id="2085"></path><path d="M403 511c-11.6 0-21-5.1-21-11.5s9.4-11.5 21-11.5 21 5.1 21 11.5-9.4 11.5-21 11.5z m218 0c-11.6 0-21-5.1-21-11.5s9.4-11.5 21-11.5 21 5.1 21 11.5-9.4 11.5-21 11.5z" fill="#5AC1FD" p-id="2086"></path></svg>
            <p>本月问题数：{{quesMsg.currentQuesNum}}</p>
          </li>
          <li>
            <svg t="1618477018708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3178" width="200" height="200"><path d="M504 849.6a59.2 59.2 0 0 1-25.6-6.4l-252.8-120a59.2 59.2 0 0 1-33.6-52.8V512a16 16 0 0 1 32 0v158.4a27.2 27.2 0 0 0 16 24l252.8 120a27.2 27.2 0 0 0 22.4 0L768 694.4a27.2 27.2 0 0 0 16-24V512a16 16 0 0 1 32 0v158.4a59.2 59.2 0 0 1-33.6 52.8l-252.8 120a59.2 59.2 0 0 1-25.6 6.4zM809.6 352h-8l-280-144a27.2 27.2 0 0 0-22.4 0l-273.6 142.4a16 16 0 1 1-14.4-28.8l273.6-142.4a59.2 59.2 0 0 1 51.2 0L816 321.6a16 16 0 0 1-8 30.4z" fill="#0084FF" p-id="3179"></path><path d="M510.4 494.4a59.2 59.2 0 0 1-25.6-6.4l-272-139.2a16 16 0 1 1 14.4-28.8l272 139.2a25.6 25.6 0 0 0 22.4 0l283.2-136a16 16 0 1 1 14.4 28.8l-283.2 137.6a59.2 59.2 0 0 1-25.6 4.8z" fill="#0084FF" p-id="3180"></path><path d="M512 848a16 16 0 0 1-16-16V529.6l-70.4 91.2a16 16 0 0 1-20.8 4.8L120 468.8a16 16 0 0 1-4.8-24l89.6-120a16 16 0 1 1 25.6 19.2l-78.4 105.6 256 140.8 91.2-116.8a16 16 0 0 1 28.8 9.6V832a16 16 0 0 1-16 16z" fill="#0084FF" p-id="3181"></path><path d="M609.6 627.2a16 16 0 0 1-12.8-6.4l-99.2-128a16 16 0 1 1 25.6-19.2l91.2 116.8 256-140.8-75.2-105.6a16 16 0 0 1 25.6-19.2l84.8 120a16 16 0 0 1-4.8 24l-283.2 156.8z" fill="#0084FF" p-id="3182"></path></svg>
            <p>本月回答数：{{quesMsg.currentReplyNum}}</p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="举报管理">
        <el-table
          :data="ReportData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="createTime"
            label="创建时间"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容">
          </el-table-column>
          <el-table-column
            prop="uid"
            label="用户id">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="mybut"
                size="mini"
                type="danger"
                @click="handleDeleteReport(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="用户信息">
        <el-table
          :data="UserData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="sno"
            label="学号"
            sortable>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="nick"
            label="昵称">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日"
            sortable>
          </el-table-column>
          <el-table-column
            prop="grade"
            label="年级">
          </el-table-column>
          <el-table-column
            prop="major"
            label="专业">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="password"
            label="密码">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="mybut"
                size="mini"
                type="danger"
                @click="handleDeleteUser(scope.$index, scope.row)">删除</el-button>
              <el-button
                class="mybut"
                size="mini"
                type="danger"
                @click="handleEditUser(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="咨询信息">
        <el-table
          :data="QuesData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="createTime"
            label="创建时间"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            sortable>
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容">
          </el-table-column>
          <el-table-column
            prop="sortName"
            label="类别">
          </el-table-column>
          <el-table-column
            prop="is_finish2"
            label="是否解决">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                class="mybut"
                size="mini"
                type="danger"
                @click="handleDeleteQues(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="回答信息">
        <el-table
          :data="ReplyData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="createTime"
            label="创建时间"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="qid"
            label="对应问题"
            sortable
            @click="toQuesDetail(this.prop)">
            <a href="http://localhost:8180/quesInformation/data/%7Bqid%7D?qid=1"></a>
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
            sortable>
          </el-table-column>
          <el-table-column
            prop="likeNum"
            label="点赞数">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDeleteReply(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="启事信息">
        <el-table
          :data="LostData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="createTime"
            label="创建时间"
            sortable
            width="160">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物品名"
            sortable>
          </el-table-column>
          <el-table-column
            prop="kindId"
            label="类别">
          </el-table-column>
          <el-table-column
            prop="placeId"
            label="位置">
          </el-table-column>
          <el-table-column
            prop="position"
            label="详细位置">
          </el-table-column>
          <el-table-column
            prop="description"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="telephone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="stateName"
            label="状态">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                class="mybut"
                size="mini"
                type="danger"
                @click="handleDeleteLost(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="话板信息">
        <el-table
          :data="MoodData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <!--          <el-table-column-->
          <!--            prop="createTime"-->
          <!--            label="创建时间"-->
          <!--            sortable-->
          <!--            width="280">-->
          <!--          </el-table-column>-->
          <el-table-column
            prop="content"
            label="内容"
            sortable>
          </el-table-column>
          <el-table-column
            prop="nick"
            label="昵称">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDeleteMood(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Manage',
  data: function () {
    return {
      tabPosition: 'left',
      UserData: [],
      QuesData: [],
      ReplyData: [],
      LostData: [],
      GetData: [],
      MoodData: [],
      ReportData: [],
      imgUrl: '',
      state: '未找回',
      college: null,
      major: null,
      quesMsg: {}
    }
  },
  methods: {
    loadUsers () {
      axios({
        method: 'get',
        url: 'users/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.UserData = resp.data.data
        }
      }).catch(error => error)
    },
    loadQuesData () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesInformation/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.QuesData = resp.data.data
        }
      }).catch(error => error)
    },
    loadReplyData () {
      var _this = this
      axios({
        method: 'get',
        url: 'quesReply/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.ReplyData = resp.data.data
        }
      }).catch(error => error)
    },
    loadLostData () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.LostData = resp.data.data
        }
      }).catch(error => error)
    },
    loadGetData () {
      var _this = this
      axios({
        method: 'get',
        url: 'lostInformation/get/%7Buid%7D',
        params: {
          uid: localStorage.getItem('id')
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.GetData = resp.data.data
        }
      }).catch(error => error)
    },
    loadMoodData () {
      var _this = this
      axios({
        method: 'get',
        url: 'mood/all'
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.MoodData = resp.data.data
        }
      }).catch(error => error)
    },
    loadCollegeName () {
      axios({
        method: 'get',
        url: 'college/datas/%7Bmid%7D',
        params: {
          mid: this.mime.major
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.college = resp.data.data.college
        }
      }).catch(error => error)
    },
    loadQuesMsg () {
      axios({
        method: 'get',
        url: '/quesInformation/num'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.quesMsg = resp.data.data
        }
      }).catch(error => error)
    },
    loadReportData () {
      axios({
        method: 'get',
        url: '/quesReport/datas'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.ReportData = resp.data.data
        }
      }).catch(error => error)
    },
    formatter (row, column) {
      return row.address
    },
    // 路由跳转
    toQuesDetail (qid) {
      localStorage.setItem('qid', JSON.stringify(qid))
      this.$router.push({
        path: '/question_detail/' + qid
      })
    },
    handleEditQues (index, row) {
      if (row.is_finish === 0) {
        var ques = {}
        ques.id = row.id
        ques.content = row.content
        ques.createBy = row.createById
        ques.isFinish = 1
        ques.sortId = row.sortId
        ques.title = row.title
        axios({
          method: 'post',
          url: 'quesInformation',
          data: ques,
          header: {
            'Content-Type': 'multipart/form-data',
            charset: 'UTF-8'
          }
        }).then(resp => {
          if (resp.data.code === 200) {
            this.loadQuesData()
          }
        }).catch(error => error)
      } else {
        alert('该问题已解决，不可更改！')
      }
    },
    handleEditLost (index, row) {
      if (row.stateId === 1) {
        alert('已完成，不可修改！！！')
      } else {
        var lid = row.id
        // 页面跳转
        localStorage.setItem('lid', JSON.stringify(lid))
        this.$router.push({
          path: '/lost_edit/' + lid
        })
      }
    },
    handleEditUser (index, row) {

    },
    handleDeleteUser (index, row) {
      var id = row.id
      axios({
        method: 'delete',
        url: 'users/del/%7Bid%7D',
        params: {
          id: id
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadUsers()
        }
      }).catch(error => error)
    },
    handleDeleteQues (index, row) {
      var qid = row.id
      axios({
        method: 'delete',
        url: 'quesInformation/del/%7Bqid%7D',
        params: {
          qid: qid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadQuesData()
        }
      }).catch(error => error)
    },
    handleDeleteReply (index, row) {
      var rid = row.id
      axios({
        method: 'delete',
        url: 'quesReply/del/%7Brid%7D',
        params: {
          rid: rid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadReplyData()
        }
      }).catch(error => error)
    },
    handleDeleteLost (index, row) {
      var id = row.id
      axios({
        method: 'delete',
        url: 'lostInformation/del/%7Bid%7D',
        params: {
          id: id
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadLostData()
        }
      }).catch(error => error)
    },
    handleDeleteMood (index, row) {
      var id = row.id
      axios({
        method: 'delete',
        url: 'mood/del/%7Bid%7D',
        params: {
          id: id
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadMoodData()
        }
      }).catch(error => error)
    },
    handleDeleteReport (index, row) {
      var id = row.id
      axios({
        method: 'delete',
        url: '/quesReport/del/%7Bid%7D',
        params: {
          id: id
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          this.loadReportData()
        }
      }).catch(error => error)
    },
    exit () {
      localStorage.setItem('manage', null)
      this.$router.go(-1)
      this.$router.push('/main')
    }
  },
  created () {
    this.loadQuesData()
    this.loadReplyData()
    this.loadLostData()
    this.loadMoodData()
    this.loadUsers()
    this.loadQuesMsg()
    this.loadReportData()
  }
}
</script>
<style scoped>
.manage{
  padding-left: 20px;
  padding-top: 20px;
}
.manage .title{
  width: 88.8%;
  height: 56px;
  background-color: #50BD8C;
  position: absolute;
  top: 0;
  left: 76px;
}
.manage .title a{
  background-color: #79A290;
  border: 1px solid #8c939d;
  color: #fff;
  position: absolute;
  top: 14px;
  right: 84px;
  padding: 3px 5px;
  border-radius: 5px;
}
.manage .title a:hover{
  background-color: #fff;
  color: #79A290;
}
.manage .title h3{
  line-height: 56px;
  padding-left: 20px;
  font-weight: 400;
  font-family: 幼圆;
}
/*表格样式*/
.el-tabs--left, .el-tabs--right {
  overflow: visible;
}
.myPublish .el-table td {
  text-align: center;
}
.myPublish .el-table th {
  text-align: center;
}
.myPublish .mybut{
  padding: 7px 8px;
}
.manage{
}
/*信息统计*/
.dataSearch{
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 500px;
}
.dataSearch li{
  width: 300px;
  height: 100px;
  float: left;
  margin: 0 5%;
}
.dataSearch svg{
  line-height: 100px;
  font-size: 80px;
}
.dataSearch p{
  padding-left: 20px;
  display: inline-block;
  vertical-align: top;
  line-height: 84px;
}
</style>
