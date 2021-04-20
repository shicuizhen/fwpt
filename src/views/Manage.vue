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
            <p>本月新增问题数：{{quesMsg.currentQuesNum}}</p>
          </li>
          <li>
            <svg t="1618477018708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3178" width="200" height="200"><path d="M504 849.6a59.2 59.2 0 0 1-25.6-6.4l-252.8-120a59.2 59.2 0 0 1-33.6-52.8V512a16 16 0 0 1 32 0v158.4a27.2 27.2 0 0 0 16 24l252.8 120a27.2 27.2 0 0 0 22.4 0L768 694.4a27.2 27.2 0 0 0 16-24V512a16 16 0 0 1 32 0v158.4a59.2 59.2 0 0 1-33.6 52.8l-252.8 120a59.2 59.2 0 0 1-25.6 6.4zM809.6 352h-8l-280-144a27.2 27.2 0 0 0-22.4 0l-273.6 142.4a16 16 0 1 1-14.4-28.8l273.6-142.4a59.2 59.2 0 0 1 51.2 0L816 321.6a16 16 0 0 1-8 30.4z" fill="#0084FF" p-id="3179"></path><path d="M510.4 494.4a59.2 59.2 0 0 1-25.6-6.4l-272-139.2a16 16 0 1 1 14.4-28.8l272 139.2a25.6 25.6 0 0 0 22.4 0l283.2-136a16 16 0 1 1 14.4 28.8l-283.2 137.6a59.2 59.2 0 0 1-25.6 4.8z" fill="#0084FF" p-id="3180"></path><path d="M512 848a16 16 0 0 1-16-16V529.6l-70.4 91.2a16 16 0 0 1-20.8 4.8L120 468.8a16 16 0 0 1-4.8-24l89.6-120a16 16 0 1 1 25.6 19.2l-78.4 105.6 256 140.8 91.2-116.8a16 16 0 0 1 28.8 9.6V832a16 16 0 0 1-16 16z" fill="#0084FF" p-id="3181"></path><path d="M609.6 627.2a16 16 0 0 1-12.8-6.4l-99.2-128a16 16 0 1 1 25.6-19.2l91.2 116.8 256-140.8-75.2-105.6a16 16 0 0 1 25.6-19.2l84.8 120a16 16 0 0 1-4.8 24l-283.2 156.8z" fill="#0084FF" p-id="3182"></path></svg>
            <p>本月新增回答数：{{quesMsg.currentReplyNum}}</p>
          </li>
          <li>
            <svg t="1618659110281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1916" width="200" height="200"><path d="M502.210118 319.345234c0 4.262753-0.21675 8.381006-0.650251 12.499259v0.07225c-6.285755 61.629295-58.305793 109.67558-121.524589 109.67558-5.563254 0-11.054258-0.36125-16.400762-1.08375-0.07225 0.07225-0.07225 0-0.07225 0-59.750794-8.019756-105.774077-59.245043-105.774077-121.163339 0-13.87201 2.312002-27.23827 6.574755-39.737529 10.620758-30.995273 33.379524-56.282791 62.568545-70.371552 3.612503-1.734001 7.297255-3.251252 11.126509-4.696253 13.07726-4.768503 27.16602-7.369505 41.90503-7.369506 43.639032 0 81.85931 22.831017 103.462076 57.149792 11.921259 18.857264 18.785014 41.11028 18.785014 65.025048z" fill="#6E3F98" p-id="1917"></path><path d="M342.682001 244.277429c0 26.082269-21.097015 47.107035-47.107035 47.107034-11.921259 0-22.831017-4.407253-31.067522-11.776758 10.620758-30.995273 33.379524-56.282791 62.568546-70.371552a47.31656 47.31656 0 0 1 15.606011 35.041276zM501.559867 331.844493c-6.285755 61.629295-58.305793 109.74783-121.524589 109.74783-5.563254 0-11.054258-0.36125-16.400762-1.08375-0.07225 0.07225-0.07225 0-0.07225 0-23.625767-16.617512-39.015029-44.000282-39.015028-74.995555 0-50.647287 41.03803-91.685317 91.685317-91.685317 38.798278 0 71.888803 24.059268 85.327312 58.016792z" fill="#9671B2" p-id="1918"></path><path d="M659.642983 704.727016c-4.262753 0.21675-8.381006 0.21675-12.499259-0.07225h-0.07225c-61.846045-3.468003-112.276582-53.176039-115.166584-116.394835-0.289-5.563254-0.1445-11.054258 0.36125-16.400762-0.07225-0.07225 0-0.07225 0-0.07225 5.274254-60.039794 54.33204-108.375079 116.178085-111.192832 13.87201-0.65025 27.31052 1.083751 39.954279 4.768504 31.428773 9.175757 57.800042 30.778523 73.189304 59.317293 1.878501 3.540253 3.612503 7.152755 5.202004 10.909758a123.619841 123.619841 0 0 1 9.320256 41.471531c2.023001 43.566782-19.074014 82.798561-52.381288 105.990827a121.539039 121.539039 0 0 1-64.085797 21.675016z" fill="#6E3F98" p-id="1919"></path><path d="M727.341283 541.875397c-26.010019 1.156001-48.046285-18.929514-49.274536-44.939533-0.578-11.921259 3.323502-22.975517 10.331757-31.573273 31.428773 9.175757 57.800042 30.778523 73.189304 59.317293a46.724109 46.724109 0 0 1-34.246525 17.195513zM647.143724 704.654766c-61.846045-3.468003-112.276582-53.176039-115.166584-116.394835-0.289-5.563254-0.1445-11.054258 0.36125-16.400762-0.07225-0.07225 0-0.07225 0-0.07225 15.533761-24.348268 42.194031-40.96578 73.117053-42.338531 50.575037-2.312002 93.419318 36.847527 95.731321 87.350314a91.757567 91.757567 0 0 1-54.04304 87.856064z" fill="#9671B2" p-id="1920"></path></svg>
            <p>失物启事总数：{{lostMsg.LostNum}}</p>
          </li>
          <li>
            <svg t="1618659073209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1418" width="200" height="200"><path d="M700.247513 456.475834c0 101.077824-81.93156 183.009384-182.937134 183.009384S334.300995 557.553658 334.300995 456.475834c0-79.041558 50.141537-146.378607 120.296338-171.955126 19.507514-7.152755 40.67678-11.054258 62.713046-11.054258 65.314048 0 122.60834 34.174275 154.976363 85.616313 17.701263 28.249771 27.96077 61.629295 27.960771 97.393071z" fill="#FDF9CB" p-id="1419"></path><path d="M495.201863 192.546391l-53.89854 172.388626-1.372751 4.262753-214.293657 15.461512s208.730403 93.852819 212.053906 93.852818 74.995555 241.893177 74.995555 241.893178l75.212305-230.911169 220.868411-66.181049-237.485924-50.791787-76.079305-179.974882z" fill="#e6e6e6" p-id="1420" data-spm-anchor-id="a313x.7781069.0.i4" class="selected"></path></svg>
            <p>招领启事总数：{{lostMsg.GetNum}}</p>
          </li>
          <li>
            <svg t="1618659027588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1114" width="200" height="200"><path d="M661.087984 257.137938c4.985254 2.456502 9.898257 5.057504 14.811261 7.730756 9.826007 5.491004 19.218514 11.343258 28.249771 17.701263 128.460594 89.951316 175.639879 262.556692 104.184576 407.634799-71.599802 145.367106-237.702674 213.065406-387.549284 165.597121a349.329006 349.329006 0 0 1-35.908276-13.72751c-3.179002-1.517251-6.502505-3.034502-9.681507-4.624004-5.563254-2.745502-11.054258-5.635504-16.400762-8.742256-3.179002-1.734001-6.358005-3.612503-9.464757-5.563254-2.456502-1.445001-4.768503-2.890002-7.080505-4.479503-2.312002-1.445001-4.624003-2.890002-6.719255-4.479504a323.246737 323.246737 0 0 1-55.849291-48.190785c-87.494814-95.37007-112.348832-238.425175-51.658788-361.611515 62.135046-126.148592 195.291893-193.846892 327.29274-178.529881 21.530516 2.528752 43.061032 7.225005 64.230297 14.233261 1.589501 0.50575 3.251252 1.011501 4.913003 1.661751 1.734001 0.50575 3.468003 1.228251 5.274254 1.878501h0.1445c1.083751 0.4335 2.239752 0.867001 3.323503 1.300501h0.07225c3.395752 1.300501 6.719255 2.601002 10.042757 3.973753 5.924504 2.601002 11.849009 5.274254 17.773513 8.236506z" fill="#D3AA9F" p-id="1115"></path><path d="M216.677909 484.219855c41.905031-26.226769 118.923587 131.495096 282.497707 168.992873 143.705355 32.946024 243.843929-48.624286 269.203697-9.970507 25.504269 38.798278-48.985536 161.045368-159.889367 202.083398-101.944825 37.786778-197.387145-9.103507-224.480915-22.397516-87.205814-42.699781-129.183095-112.926833-142.477104-135.8301-25.215268-43.566782-32.151274-78.463557-33.957525-88.650815-4.190503-23.264517-17.556763-97.609821 9.103507-114.227333z" fill="#B19D8C" p-id="1116"></path><path d="M691.288506 639.123968c-12.499259 1.083751-16.473012-24.998518-38.942778-33.957525-17.629013-7.008255-36.052776 0.722501-42.266281 3.323503-39.737529 16.689762-68.49305 77.957807-53.031539 132.506597 11.921259 42.049531 50.430537 81.28131 93.636069 82.79856 53.103789 1.950751 87.494814-53.97079 115.961335-100.210823 9.248007-15.028011 25.504269-44.722783 28.972271-84.460312 1.734001-20.085515 4.118253-47.251535-10.765258-57.149792-16.762012-11.126508-50.575037 2.745502-68.782051 23.192267-14.811261 16.762012-14.955761 33.090524-24.781768 33.957525z" fill="#D6BBA7" p-id="1117"></path><path d="M392.245537 258.077189c19.001764-8.092006 32.295774-11.632259 32.295774-11.632258 34.896776-9.175757 53.392789-14.08876 74.562055-15.750512 39.304029-3.106752 69.432301 6.213505 106.857828 18.207013 22.903267 7.369505 115.744585 37.136527 112.637832 61.268045-1.661751 12.860509-29.550272 18.857264-58.811543 24.854018-114.949834 23.770267-200.710647-9.898257-253.453185-30.561772-12.499259-4.913004-43.711282-17.701263-42.266281-28.972271 0.722501-5.635504 9.898257-9.609257 28.17752-17.412263z" fill="#B0918B" p-id="1118"></path></svg>
            <p>本月新增失物启事数：{{lostMsg.currentLostNum}}</p>
          </li>
          <li>
            <svg t="1618659049059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1266" width="200" height="200"><path d="M534.216891 477.139349m-279.463204 0a279.463205 279.463205 0 1 0 558.926409 0 279.463205 279.463205 0 1 0-558.926409 0Z" fill="#D9E7DE" p-id="1267"></path><path d="M536.384393 473.454597m-209.814154 0a209.814154 209.814154 0 1 0 419.628308 0 209.814154 209.814154 0 1 0-419.628308 0Z" fill="#E3F2EC" p-id="1268"></path><path d="M381.191279 370.209271m-54.69329 0a54.69329 54.69329 0 1 0 109.38658 0 54.69329 54.69329 0 1 0-109.38658 0Z" fill="#D0DED5" p-id="1269"></path><path d="M618.099203 687.676004m-35.330276 0a35.330276 35.330276 0 1 0 70.660552 0 35.330276 35.330276 0 1 0-70.660552 0Z" fill="#D0DED5" p-id="1270"></path><path d="M703.715515 431.910816m-73.478303 0a73.478304 73.478304 0 1 0 146.956607 0 73.478304 73.478304 0 1 0-146.956607 0Z" fill="#D0DED5" p-id="1271"></path><path d="M398.892542 470.709095m-17.701263 0a17.701263 17.701263 0 1 0 35.402526 0 17.701263 17.701263 0 1 0-35.402526 0Z" fill="#D0DED5" p-id="1272"></path></svg>
            <p>本月新增招领启事数：{{lostMsg.currentGetNum}}</p>
          </li>
          <li>
            <svg t="1618658457787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2895" width="200" height="200"><path d="M460.288 665.088m-274.944 0a274.944 274.944 0 1 0 549.888 0 274.944 274.944 0 1 0-549.888 0Z" fill="#FFFFFF" p-id="2896"></path><path d="M460.288 947.712c-155.648 0-282.624-126.976-282.624-282.624 0-155.648 126.976-282.624 282.624-282.624s282.624 126.976 282.624 282.624c0 155.648-126.464 282.624-282.624 282.624z m0-549.888c-147.456 0-267.264 119.808-267.264 267.264s119.808 267.264 267.264 267.264c147.456 0 267.264-119.808 267.264-267.264s-119.808-267.264-267.264-267.264z" fill="#2E66FF" p-id="2897"></path><path d="M460.288 665.088m-199.68 0a199.68 199.68 0 1 0 399.36 0 199.68 199.68 0 1 0-399.36 0Z" fill="#C9E6FF" p-id="2898"></path><path d="M460.288 869.888c-113.152 0-204.8-92.16-204.8-204.8s92.16-204.8 204.8-204.8c113.152 0 204.8 92.16 204.8 204.8s-91.648 204.8-204.8 204.8z m0-399.36c-107.52 0-194.56 87.552-194.56 194.56s87.552 194.56 194.56 194.56c107.52 0 194.56-87.552 194.56-194.56s-87.04-194.56-194.56-194.56z" fill="#FFB5EC" p-id="2899"></path><path d="M723.968 204.8m-126.464 0a126.464 126.464 0 1 0 252.928 0 126.464 126.464 0 1 0-252.928 0Z" fill="#FFFFFF" p-id="2900"></path><path d="M723.968 338.944c-73.728 0-134.144-59.904-134.144-134.144s59.904-134.144 134.144-134.144 134.144 59.904 134.144 134.144-60.416 134.144-134.144 134.144z m0-252.928c-65.536 0-118.784 53.248-118.784 118.784s53.248 118.784 118.784 118.784 118.784-53.248 118.784-118.784-53.76-118.784-118.784-118.784z" fill="#2E66FF" p-id="2901"></path><path d="M723.968 204.8m-85.504 0a85.504 85.504 0 1 0 171.008 0 85.504 85.504 0 1 0-171.008 0Z" fill="#FFB5EC" p-id="2902"></path><path d="M723.968 292.864c-48.64 0-88.064-39.424-88.064-88.064s39.424-88.064 88.064-88.064 88.064 39.424 88.064 88.064-39.936 88.064-88.064 88.064z m0-170.496c-45.568 0-82.944 36.864-82.944 82.944s36.864 82.944 82.944 82.944 82.944-36.864 82.944-82.944-37.376-82.944-82.944-82.944z" fill="#FFF152" p-id="2903"></path><path d="M507.904 585.216m-48.64 0a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0Z" fill="#FFF152" p-id="2904"></path><path d="M709.12 178.688m-22.528 0a22.528 22.528 0 1 0 45.056 0 22.528 22.528 0 1 0-45.056 0Z" fill="#FFF152" p-id="2905"></path></svg>
            <p>话板信息总数：{{moodMsg.num}}</p>
          </li>
          <li>
            <svg t="1618658430149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M361.984 805.888L185.344 297.984c-0.512-1.536 0.512-3.584 2.048-4.096l507.904-176.64c1.536-0.512 3.584 0.512 4.096 2.048l176.64 507.904c0.512 1.536-0.512 3.584-2.048 4.096l-507.904 176.64c-1.536 0.512-3.584 0-4.096-2.048z" fill="#FFFFFF" p-id="2746"></path><path d="M365.056 816.128c-1.536 0-3.072-0.512-4.608-1.024-2.56-1.024-4.608-3.584-5.632-6.144L178.176 300.544c-1.024-2.56-1.024-5.632 0.512-8.192 1.024-2.56 3.584-4.608 6.144-5.632l507.904-176.64c5.632-2.048 11.776 1.024 13.824 6.656l176.64 507.904c2.048 5.632-1.024 11.776-6.656 13.824L368.64 815.104c-1.024 0.512-2.048 1.024-3.584 1.024zM194.048 299.52l173.568 499.712 499.712-173.568-173.568-499.712-499.712 173.568z" fill="#2E66FF" p-id="2747"></path><path d="M192 303.104s220.672 18.432 378.368 110.592c0 0-146.432 293.376-204.288 379.904 0 0-150.016-440.32-174.08-490.496z" fill="#C9E6FF" p-id="2748"></path><path d="M698.88 135.68l-112.128 265.216s196.608 114.688 277.504 223.232l-165.376-488.448z" fill="#FFB5EC" p-id="2749"></path><path d="M865.792 637.44C605.184 331.776 193.536 301.056 189.44 300.544l1.024-15.36c1.024 0 106.496 7.68 243.2 53.248 125.952 41.984 305.664 126.464 443.904 288.768l-11.776 10.24z" fill="#2E66FF" p-id="2750"></path><path d="M375.296 811.008l-13.312-7.68c279.04-477.184 322.56-684.544 323.072-686.592l14.848 3.072c0 2.048-44.032 211.968-324.608 691.2z" fill="#2E66FF" p-id="2751"></path><path d="M355.84 809.472c-20.992 24.064-97.792 109.056-143.872 105.472-2.56 0-4.096 2.56-2.56 4.608 11.264 16.384 48.128 62.464 93.696 59.904 1.024 0 2.048-0.512 2.56-1.536 6.656-10.24 49.664-82.432 55.296-166.4 0-2.56-3.584-3.584-5.12-2.048z" fill="#FFF152" p-id="2752"></path><path d="M300.032 987.136c-46.592 0-82.944-44.032-96.768-63.488-2.56-3.584-2.56-7.68-0.512-11.264 2.048-3.584 5.632-5.632 9.728-5.12 33.28 2.56 92.672-51.2 137.728-102.912 3.072-3.584 7.68-4.608 11.776-3.072 4.096 1.536 6.656 6.144 6.656 10.24-5.632 84.992-47.616 156.672-56.32 169.984-2.048 3.072-5.12 4.608-8.192 5.12-1.536 0.512-3.072 0.512-4.096 0.512z m-1.024-13.312z m-77.824-51.2c13.824 17.408 44.032 49.664 78.848 49.664h0.512c8.192-13.824 43.008-74.24 51.2-145.92-31.232 33.792-88.064 90.624-130.56 96.256zM207.872 291.84s-54.272-19.968-108.544 1.024l23.04 35.84L207.872 291.84zM858.112 606.208s49.152 30.208 66.56 86.016l-42.496 4.096-24.064-90.112z" fill="#2E66FF" p-id="2753"></path></svg>
            <p>话板信息本月新增数：{{moodMsg.currentNum}}</p>
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
        <el-table  v-if="uid === null"
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
            prop="sexName"
            label="性别">
          </el-table-column>
<!--          <el-table-column-->
<!--            prop="birthday"-->
<!--            label="生日"-->
<!--            sortable>-->
<!--          </el-table-column>-->
          <el-table-column
            prop="grade"
            label="年级">
          </el-table-column>
          <el-table-column
            prop="major.major"
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
<!--          <el-table-column-->
<!--            prop="createTime"-->
<!--            label="创建时间"-->
<!--            sortable-->
<!--            width="180">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="password"-->
<!--            label="密码">-->
<!--          </el-table-column>-->
          <el-table-column label="操作" width="180">
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
        <div  v-if="uid !== null">
          <div class="fanhui" @click="handleEditUser(null,null)">返回</div>
          <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="学号" prop="sno">
              <el-input v-model="form.sno"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nick">
              <el-input v-model="form.nick"></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <div class="form-group">
                <div class="control-form">
                  <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M)</p>
                  <ul class="upload-imgs">
                    <li v-if="imgLen>1 || imgLen===1 ? false : true">
                      <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                      <a class="add">
                        <i class="iconfont icon-plus"></i><p>点击上传</p>
                      </a>
                    </li>
                    <li v-for='(value, key) in imgs' v-bind:key="key">
                      <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </el-form-item>
            <el-form-item class="form_type" label="性别" prop="sex">
              <el-radio-group v-model="form.sex">
                <el-radio label="0">男</el-radio>
                <el-radio label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-col :span="11">
                <el-form-item>
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="年级" prop="grade">
              <el-select v-model="form.grade" placeholder="请选择年级">
                <el-option :label=item.name :value=item.name v-for="item in grades" v-bind:key="item.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="院系" prop="college">
              <el-select v-model="form.college" placeholder="请选择院系">
                <el-option :label=item.college :value=item.id v-for="item in colleges" v-bind:key="item.college"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.college" label="专业" prop="major">
              <el-select v-model="form.major" placeholder="请选择专业">
                <el-option :label=item.major :value=item.id v-for="item in majors" v-bind:key="item.major"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input type="tel" v-model.number="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input type="email" v-model="form.email"></el-input>
            </el-form-item>
            <!--      <el-form-item label="邮箱" prop="email">-->
            <!--        <el-input type="email" v-model.number="form.email"></el-input>-->
            <!--      </el-form-item>-->
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">提交</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
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
import { isvalidPhone } from '../config/validate'
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入电话号码'))
  } else if (!isvalidPhone(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
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
      quesMsg: {},
      lostMsg: {},
      moodMsg: {},
      uid: null,
      //  用户信息编辑
      grades: [
        { name: '17' },
        { name: '18' },
        { name: '19' },
        { name: '20' }
      ],
      majors: {},
      form: {
        sno: '',
        name: '',
        password: '',
        nick: '',
        sex: -1,
        birthday: '',
        photoAddress: null,
        grade: '',
        college: null,
        major: '',
        phone: '',
        email: '',
        createdBy: null,
        createTime: ''
      },
      rules: {
        sno: [
          { required: true, message: '请填写学号信息', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11位', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度为2-4位', trigger: 'blur' }
        ],
        nick: [
          { required: true, message: '请填写昵称', trigger: 'blur' },
          { min: 1, max: 8, message: '长度为1-8位', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请选择出生年月日', trigger: 'change' }
        ],
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        college: [
          { required: true, message: '请选择院系', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请选择专业', trigger: 'change' }
        ],
        phone: [
          { required: true, trigger: 'blur', validator: validPhone }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' }
          // { required: true, trigger: 'blur', validator: validEmail }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6位', trigger: 'blur' }
        ]
      },
      // 图片上传
      imageUrl: '',
      // 图片上传，回显
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      // 图片base64编码
      baseData: '',
      baseResultUrl: '',
      colleges: null
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
    loadLostMsg () {
      axios({
        method: 'get',
        url: '/lostInformation/num'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.lostMsg = resp.data.data
        }
      }).catch(error => error)
    },
    loadMoodMsg () {
      axios({
        method: 'get',
        url: '/mood/num'
      }).then(resp => {
        if (resp.data.code === 200) {
          this.moodMsg = resp.data.data
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
      if (this.uid === null) {
        this.uid = row.id
        this.loadMy()
      } else {
        this.uid = null
      }
      // location.reload()
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
      // this.$router.go(-1)
      this.$router.push('/home')
      location.reload()
    },

    // 用户信息编辑
    // 图片上传
    addImg (event) {
      var _this = this
      var reader = new FileReader()
      const inputDOM = this.$refs.inputer
      // 通过DOM取文件数据
      this.fil = inputDOM.files
      // 使用该对象读取file文件
      reader.readAsDataURL(this.fil[0])

      // 校验图片
      const oldLen = this.imgLen
      const len = this.fil.length + oldLen
      if (len > 1) {
        alert('最多可上传1张')
        return false
      }
      for (let i = 0; i < this.fil.length; i++) {
        const size = Math.floor(this.fil[i].size / 1024)
        if (size > 5 * 1024 * 1024) {
          alert('请选择5M以内的图片！')
          return false
        }
        this.imgLen++
        this.$set(this.imgs, this.fil[i].name + '?' + new Date().getTime() + i, this.fil[i])
      }
      // 读取文件成功后执行的方法函数
      reader.onload = function (e) {
        _this.baseData = e.target.result
        console.log(_this.baseData)
        axios.post('users/img', {
          baseData: _this.baseData
        }, {
          'Content-Type': 'application/json', charset: 'UTF-8'
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.baseResultUrl = resp.data.data
          }
        })
      }
    },
    getObjectURL (file) {
      var url = null
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      // url是http动态地址
      return url
    },
    delImg (key) {
      this.$delete(this.imgs, key)
      this.imgLen--
    },
    submit () {
      for (const key in this.imgs) {
        const name = key.split('?')[0]
        this.formData.append('multipartFiles', this.imgs[key], name)
      }
      this.$http.post('/opinion/feedback', this.formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.alertShow = true
      })
    },
    // 图片上传
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.form.photoAddress = this.baseResultUrl
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          axios({
            method: 'post',
            url: 'users',
            data: this.form
          }).then(resp => {
            if (resp.data.code === 200) {
              this.handleEditUser(null, null)
            } else {
              // location.reload()
              alert('该用户已注册！')
            }
          }).catch(error => error)
        } else {
          return false
        }
      })
    },
    // 头像上传
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('handleAvatarSuccess--this.imageUrl:' + this.imageUrl)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    loadColleges () {
      axios({
        method: 'get',
        url: 'college/datas',
        data: this.form
      }).then(resp => {
        if (resp.data.code === 200) {
          this.colleges = resp.data.data
          console.log('------------------')
          console.log(this.colleges)
        }
      }).catch(error => error)
    },
    loadMajor () {
      console.log('loadmajor: ')
      console.log(this.form.college)
      if (this.form.college !== null) {
        var _this = this
        axios({
          method: 'get',
          url: 'major/datas/%7Bcid%7D',
          params: {
            cid: this.form.college
          }
        }).then(resp => {
          if (resp.data.code === 200) {
            _this.majors = resp.data.data
            console.log('_this.majors:' + _this.majors)
            console.log(_this.majors)
          }
        }).catch(error => error)
      } else {
        alert('您还没有选择院系呢！')
      }
    },
    // 加载当前需要编辑的用户数据
    loadMy () {
      var _this = this
      axios({
        method: 'post',
        url: 'users/datas/%7Buid%7D',
        params: {
          uid: this.uid
        }
      }).then(resp => {
        if (resp.data.code === 200) {
          _this.form = resp.data.data
          _this.major = _this.form.major.major
          _this.form.major = _this.form.major.id
          console.log(_this.form)
          this.loadCollegeName()
        }
      }).catch(error => error)
    }
  },
  mounted: function () {
    this.loadColleges()
  },
  watch: {
    'form.college' () {
      this.form.major = ''
      this.loadMajor()
    }
  },
  created () {
    this.loadQuesData()
    this.loadReplyData()
    this.loadLostData()
    this.loadMoodData()
    this.loadUsers()
    this.loadQuesMsg()
    this.loadLostMsg()
    this.loadMoodMsg()
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
  /*padding-top: 50px;*/
  padding-bottom: 500px;
}
.dataSearch li{
  width: 300px;
  height: 90px;
  float: left;
  margin: 0 5%;
}
.dataSearch svg{
  line-height: 80px;
  font-size: 64px;
}
.dataSearch p{
  padding-left: 20px;
  display: inline-block;
  vertical-align: top;
  line-height: 68px;
}
.fanhui{
  margin-left: 12px;
  margin-bottom: 20px;
  padding: 3px 10px;
  width: 33px;
  height: 22px;
  border: 2px solid #b3d4fc;
  border-radius: 10px;
}
</style>
