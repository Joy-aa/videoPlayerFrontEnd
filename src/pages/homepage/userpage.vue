<template>
  <!--  显示用户信息-->
  <div class="showusrinfo">
    <div class="showuseravatar" data-e2e="live-avatar">
      <img v-bind:src="userInfo.headshot? userInfo.headshot:require('../../assets/img.png')" :alt="userInfo.username "   class="useravatar">
    </div>

    <div class="usrinfo" data-e2e="user-info">
      <div class="usrinfo_name_row">
        <h1 class="usrinfo_name">
          <span>
            <span class="Nu66P_ba">
              <span>
                <span>
                  <span>
                    <span   style="color: white;">{{ userInfo.username }}</span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <div class="eDwMD7wB">
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-follow">
          <div class="Y150jDoF" style="color: white;">关注</div>
          <div class="TxoC9G6_" style="color: white;">{{ store.state.userslikeinfo[0] }}</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-fans">
          <div class="Y150jDoF" style="color: white;">粉丝</div>
          <div class="TxoC9G6_" style="color: white;">{{ store.state.userslikeinfo[1] }}</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-like">
          <div class="Y150jDoF" style="color: white;">获赞</div>
          <div class="TxoC9G6_" style="color: white;">{{ store.state.userslikeinfo[2] }}</div>
        </div>
      </div>
      <p class="wTV10cVL">
        <span class="aH7rLkZZ" style="color: white;">七牛云视频号：{{ userInfo.userId }}</span>
      </p>
    </div>

    <div class="VYCEfmrZ">
      <button @click="openModal" class="GIg8IFtS" style="margin-bottom: 10%">修改资料</button>
      <div v-if="showModal" class="edit-modal">
        <div class="modal-content1">
          <div class = "close-button">
            <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36" @click="closeModal">
              <path d="M24.601 24.6a1.362 1.362 0 01-1.927 0L18.5 20.427l-4.174 4.175a1.362 1.362 0 01-1.927-1.927l4.174-4.174-4.174-4.175a1.362 1.362 0 011.927-1.926l4.174 4.174 4.174-4.174a1.362 1.362 0 111.927 1.927L20.427 18.5l4.174 4.174a1.362 1.362 0 010 1.927z" fill="#fff" fill-opacity="0.8"></path>
            </svg>
            <!--            <button  @click="closeModal" >x</button>-->
          </div>

          <h3  style="color: white; margin-left: 45px;">编辑资料</h3>
          <!--            修改头像-->
          <div >
            <div class="head-model">
              <img v-bind:src="userInfo.headshot? userInfo.headshot:require('../../assets/img.png')" :alt="userInfo.username "    class="head">
              <input type="file" id = "upload-head-button" @change="handleFileChange" accept="image/*" style = "display: none;">
              <button class="head-model custom-button" onclick="document.getElementById('upload-head-button').click()" id="select" ></button>



            </div>
            <div  style="font-size: 14px; color: #FFFFFF80; margin-top: 4px; text-align: center;" >点击修改头像</div>
          </div>
          <!--          修改用户名-->
          <div class="name-model">
            <div class="name-tips">名字</div>
            <div class="name-content">
              <input type="text"  v-model="username" placeholder="记得填写昵称"  maxlength="20"  >
              <!--              <input type="text" v-model="username" placeholder="记得填写昵称" maxlength="20" :value="userInfo.username" >-->
              <!--              <span class="Z0yinT0U">15/20</span>-->
            </div>
          </div>

          <!--          <input type="text" v-model="username" placeholder="用户名">-->
          <div class="intro-model">
            <div class="intro-tips">简介</div>
            <div class="intro-content">
              <textarea v-model="bio" placeholder="简单介绍自己"></textarea>              <!--              <span class="Z0yinT0U">15/20</span>-->
            </div>
          </div>
          <div class="button-model">

            <button type="button" class="save-button" @click="saveChanges">保存</button>
            <button type="button" class="cancel-button" @click="closeModal">取消</button>
          </div>


        </div>
      </div>
    </div>

  </div>


  <div class = "uservideoinfo" >

    <el-header style="padding: 0 0px">
      <el-menu
          mode="horizontal"
          :ellipsis="false"
          router="router"
          default-active="works"
          class="el-menu-vertical-demo"
          @select="handleMenuSelect"
          background-color = rgb(43,45,48)
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index = "works">
<!--          <i class="el-icon-menu"></i>-->
          <span style="text-align: center ;width:60px; " >作品</span>
          <!--          <span v-if="videoInfo.length!=0">   {{   videoInfo.length }}</span>-->
        </el-menu-item>
        <el-menu-item index = "likes">

          <span style="text-align: center ;width:60px; " >喜欢</span>
        </el-menu-item>
        <el-menu-item index = "star">

          <span style="text-align: center ;width:60px; " >收藏</span>
        </el-menu-item>
        <el-menu-item index = "history">

          <span style="text-align: center ;width:60px; " >观看历史</span>
        </el-menu-item>

      </el-menu>
    </el-header>
  </div>
  <!--增加一个空行，美观一点-->

  <!--  <img v-if="selectedFile" src-->

  <!--  <div>-->
  <!--    <video controls>-->
  <!--      <source src = "src/assets/WeChat_20231025161539.mp4" type = "video/mp4">-->
  <!--    </video>-->
  <!--  </div>-->


  <div class = 'FDSFDSG'>
    <div class="sDAMysaM" style="height: 44px; padding: 0px;"></div>
    <div v-if="videoInfo!=null" class = "showvideo">
      <div class="video-container">
        <div v-for="(video, index) in videoInfo" class="video-item" :key="index" @click="clickvideo" >

            <div class="video-content">
              <div class="video-info">
                <router-link :to="`/videopage/${video.videoId}/${index}`">
                  <img class="pageshot-info" :src="video.pageshot" alt="loading fail" style =" border-radius: 15px;">
                </router-link>
                <p style="margin-left: 5px;font-size: 15px;color: lightgrey">{{video.videoName.substring(0, 35) + "..."}}</p>
                <el-row style="margin-top: 3px">
                  <p style="margin-left: 5px;font-size: 14px;color: lightgrey">@{{ store.state.users.at(index) }}</p>
                  <p style="margin-left: 20px;font-size: 14px;color: lightgrey">· {{ formatMsgTime(video.createTime) }}</p>
                </el-row>
                <el-row class="likecommentstar">
                  <div class="likebutton" style="margin-left: 0px;margin-top: 0px;width: 30px;height: 30px">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-5 0 95 100" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                      <g clip-path="url(#__lottie_element_1328)">
                        <g clip-path="url(#__lottie_element_1362)" transform="matrix(0.5249999761581421,0,0,0.5249999761581421,1.0250015258789062,8.822105407714844)" opacity="1" style="display: block;">
                          <g clip-path="url(#__lottie_element_1366)" transform="matrix(0.10000000149011612,0,0,0.10000000149011612,0,0)" opacity="1" style="display: block;">
                            <g style="display: none;">
                              <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                            </g>
                            <g clip-path="url(#__lottie_element_1394)" style="display: none;">
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                              <g style="display: none;">
                                <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                              </g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1384)" transform="matrix(1,0,0,1,240,340)" opacity="1" style="display: block;">
                              <g transform="matrix(1,0,0,1,154.5,92)" opacity="1" style="display: block;">
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path fill="rgb(255,255,255)" fill-opacity="1" d=" M453.0360107421875,88.71199798583984 C493.77398681640625,30.663999557495117 560.6599731445312,0 634.2509765625,0 C774.4030151367188,0 890.9719848632812,121.58999633789062 890.9719848632812,266.1369934082031 C890.9719848632812,266.1549987792969 890.9719848632812,266.1730041503906 890.9719848632812,266.1910095214844 C890.9810180664062,266.1709899902344 890.9910278320312,266.1510009765625 891,266.1310119628906 C891,270.25201416015625 890.9299926757812,273.37200927734375 890.8779907226562,275.6679992675781 C890.8060302734375,278.8190002441406 890.77001953125,280.4159851074219 891,280.9159851074219 C890.468994140625,311.3190002441406 885.2219848632812,336.43798828125 875.8989868164062,369.62799072265625 C870.6090087890625,375.5880126953125 865.6939697265625,386.81201171875 860.7979736328125,399.1990051269531 C853.073974609375,411.1969909667969 850.1510009765625,417.0090026855469 845.697021484375,428.7699890136719 C841.1519775390625,436.39898681640625 836.323974609375,444.06298828125 831.2449951171875,451.7439880371094 C793.7960205078125,508.54400634765625 743.7080078125,565.073974609375 693.6669921875,615.2520141601562 C615.3359985351562,694.2769775390625 535.5440063476562,760.0579833984375 500.8320007324219,788.6749877929688 C491.24700927734375,796.5759887695312 485.1000061035156,801.6439819335938 483.3680114746094,803.375 C471.0669860839844,815.677978515625 458.7650146484375,815.9860229492188 446.4630126953125,815.9940185546875 C446.1390075683594,815.9979858398438 445.8139953613281,816 445.4859924316406,816 C420.25,816 407.6319885253906,803.3809814453125 395.0140075683594,790.7630004882812 C394.0509948730469,789.7999877929688 391.60101318359375,787.7789916992188 387.8580017089844,784.7830200195312 C349.625,756.5999755859375 263.58599853515625,687.7860107421875 182.74200439453125,604.7830200195312 C121.06600189208984,542.02001953125 61.62200164794922,470.0069885253906 29.091999053955078,399.5880126953125 C16.474000930786133,374.35101318359375 0.7310000061988831,314.2640075683594 0,280.9219970703125 C0.26899999380111694,280.6549987792969 0.22699999809265137,279.04901123046875 0.14399999380111694,275.843994140625 C0.08299999684095383,273.49798583984375 0,270.2969970703125 0,266.1369934082031 C0,121.52400207519531 116.50199890136719,0 256.72100830078125,0 C330.1789855957031,0 397.1310119628906,30.663999557495117 453.0360107421875,88.71199798583984z"></path>
                                </g>
                              </g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1377)" style="display: none;">
                              <g style="display: none;"></g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1370)" style="display: none;">
                              <g style="display: none;"></g>
                            </g>
                          </g>
                        </g>
                        <g clip-path="url(#__lottie_element_1330)" style="display: none;">
                          <g clip-path="url(#__lottie_element_1334)" style="display: none;">
                            <g style="display: none;">
                              <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1352)" style="display: none;">
                              <g style="display: none;"></g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1345)" style="display: none;">
                              <g style="display: none;"></g>
                            </g>
                            <g class="png" clip-path="url(#__lottie_element_1338)" style="display: none;">
                              <g style="display: none;"></g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p style="font-size: 12px;color: grey">{{video.likeNum}}</p>
                  <div class="commentbutton" style="margin-left: 5px;width: 30px;height: 30px">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                      <g clip-path="url(#__lottie_element_1416)">
                        <g transform="matrix(0.6600000262260437,0,0,0.6600000262260437,76.25495910644531,52.904117584228516)" opacity="1" style="display: block;">
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4.644999980926514,4.482999801635742 C-7.25,7.818999767303467 -13.482000350952148,8.300000190734863 -13.482000350952148,8.300000190734863 C-13.482000350952148,8.300000190734863 -14.413999557495117,11.48799991607666 -12.135000228881836,10.821000099182129 C-9.855999946594238,10.154000282287598 -7.25,8.152000427246094 -4.644999980926514,4.482999801635742z M-17.36,-1.04 C-17.36,-0.16 -18.07,0.56 -18.96,0.56 C-18.96,0.56 -18.96,0.56 -18.96,0.56 C-19.85,0.56 -20.57,-0.16 -20.57,-1.04 C-20.57,-1.92 -19.85,-2.64 -18.96,-2.64 C-18.07,-2.64 -17.36,-1.92 -17.36,-1.04z M-11.89,-1.04 C-11.89,-0.16 -12.61,0.56 -13.5,0.56 C-13.5,0.56 -13.5,0.56 -13.5,0.56 C-14.39,0.56 -15.11,-0.16 -15.11,-1.04 C-15.11,-1.92 -14.39,-2.64 -13.5,-2.64 C-12.61,-2.64 -11.89,-1.92 -11.89,-1.04z M-6.43,-1.04 C-6.43,-0.16 -7.15,0.56 -8.04,0.56 C-8.04,0.56 -8.04,0.56 -8.04,0.56 C-8.92,0.56 -9.64,-0.16 -9.64,-1.04 C-9.64,-1.92 -8.92,-2.64 -8.04,-2.64 C-7.15,-2.64 -6.43,-1.92 -6.43,-1.04z M-5.79,5.98 C-3.56,3.75 -2.25,1.42 -2.25,-1.29 C-2.25,-6.79 -7.29,-11.25 -13.5,-11.25 C-19.71,-11.25 -24.75,-6.79 -24.75,-1.29 C-24.75,4.21 -19.55,7.99 -13.34,7.99 C-13.34,7.99 -13.34,11.06 -13.34,11.06 C-13.34,11.06 -8.51,8.72 -5.79,5.98z"></path>
                            <g opacity="1" transform="matrix(1,0,0,1,-6.75,-7.456999778747559)">
                              <g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g>
                              <g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g>
                              <g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g>
                              <g opacity="1" transform="matrix(-1,0,0,1,0,0)"></g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p style="font-size: 12px;color: grey">{{video.shareNum}}</p>
                  <div class="starbutton" style="margin-left: 5px;width: 30px;height: 30px">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-2 0 105 105" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                      <g clip-path="url(#__lottie_element_1421)">
                        <g clip-path="url(#__lottie_element_1495)" style="display: none;">
                          <g style="display: none;"></g>
                          <g style="display: none;"></g>
                          <g style="display: none;"></g>
                        </g>
                        <g clip-path="url(#__lottie_element_1482)" style="display: none;" transform="matrix(0.4658204913139343,0,0,0.4658204913139343,23.050769805908203,26.447376251220703)" opacity="1">
                          <g style="display: block;" transform="matrix(1,0,0,1,10,12)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(255,255,255)" fill-opacity="1" d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(1,0,0,1,10,45.720001220703125)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(255,255,255)" fill-opacity="1" d=" M77.80999755859375,25.400999069213867 C77.80999755859375,25.400999069213867 97.48799896240234,9.708000183105469 97.48799896240234,9.708000183105469 C100.77100372314453,7.090000152587891 100.63200378417969,2.635999917984009 98.25399780273438,0 C98.02300262451172,0.24799999594688416 97.76799774169922,0.48500001430511475 97.48799896240234,0.7080000042915344 C97.48799896240234,0.7080000042915344 75.77100372314453,18.027000427246094 75.77100372314453,18.027000427246094 C75.77100372314453,18.027000427246094 77.80999755859375,25.400999069213867 77.80999755859375,25.400999069213867z M17.757999420166016,50.42300033569336 C17.757999420166016,50.42300033569336 16.81399917602539,53.83599853515625 16.81399917602539,53.83599853515625 C15.175999641418457,59.757999420166016 21.746999740600586,64.54399871826172 26.858999252319336,61.152000427246094 C26.858999252319336,61.152000427246094 50,45.79800033569336 50,45.79800033569336 C50,45.79800033569336 73.14099884033203,61.152000427246094 73.14099884033203,61.152000427246094 C78.25299835205078,64.54399871826172 84.8239974975586,59.757999420166016 83.18599700927734,53.83599853515625 C83.18599700927734,53.83599853515625 82.24199676513672,50.42300033569336 82.24199676513672,50.42300033569336 C80.31900024414062,53.132999420166016 76.4280014038086,54.33300018310547 73.14099884033203,52.152000427246094 C73.14099884033203,52.152000427246094 50,36.79800033569336 50,36.79800033569336 C50,36.79800033569336 26.858999252319336,52.152000427246094 26.858999252319336,52.152000427246094 C23.57200050354004,54.33300018310547 19.680999755859375,53.132999420166016 17.757999420166016,50.42300033569336z M1.746000051498413,0 C-0.6320000290870667,2.635999917984009 -0.7710000276565552,7.090000152587891 2.51200008392334,9.708000183105469 C2.51200008392334,9.708000183105469 22.190000534057617,25.400999069213867 22.190000534057617,25.400999069213867 C22.190000534057617,25.400999069213867 24.229000091552734,18.027000427246094 24.229000091552734,18.027000427246094 C24.229000091552734,18.027000427246094 2.51200008392334,0.7080000042915344 2.51200008392334,0.7080000042915344 C2.2320001125335693,0.48500001430511475 1.9769999980926514,0.24799999594688416 1.746000051498413,0z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(1,0,0,1,60,60)" opacity="1"></g>
                        </g>
                        <g clip-path="url(#__lottie_element_1469)" transform="matrix(0.4646500051021576,0,0,0.4646500051021576,23.121000289916992,26.373146057128906)" opacity="1" style="display: block;">
                          <g transform="matrix(1,0,0,1,10,12)" opacity="1" style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(255,255,255)" fill-opacity="1" d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z"></path>
                            </g>
                          </g>
                          <g transform="matrix(1,0,0,1,10,45.720001220703125)" opacity="1" style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(255,255,255)" fill-opacity="1" d=" M77.80999755859375,25.400999069213867 C77.80999755859375,25.400999069213867 97.48799896240234,9.708000183105469 97.48799896240234,9.708000183105469 C100.77100372314453,7.090000152587891 100.63200378417969,2.635999917984009 98.25399780273438,0 C98.02300262451172,0.24799999594688416 97.76799774169922,0.48500001430511475 97.48799896240234,0.7080000042915344 C97.48799896240234,0.7080000042915344 75.77100372314453,18.027000427246094 75.77100372314453,18.027000427246094 C75.77100372314453,18.027000427246094 77.80999755859375,25.400999069213867 77.80999755859375,25.400999069213867z M17.757999420166016,50.42300033569336 C17.757999420166016,50.42300033569336 16.81399917602539,53.83599853515625 16.81399917602539,53.83599853515625 C15.175999641418457,59.757999420166016 21.746999740600586,64.54399871826172 26.858999252319336,61.152000427246094 C26.858999252319336,61.152000427246094 50,45.79800033569336 50,45.79800033569336 C50,45.79800033569336 73.14099884033203,61.152000427246094 73.14099884033203,61.152000427246094 C78.25299835205078,64.54399871826172 84.8239974975586,59.757999420166016 83.18599700927734,53.83599853515625 C83.18599700927734,53.83599853515625 82.24199676513672,50.42300033569336 82.24199676513672,50.42300033569336 C80.31900024414062,53.132999420166016 76.4280014038086,54.33300018310547 73.14099884033203,52.152000427246094 C73.14099884033203,52.152000427246094 50,36.79800033569336 50,36.79800033569336 C50,36.79800033569336 26.858999252319336,52.152000427246094 26.858999252319336,52.152000427246094 C23.57200050354004,54.33300018310547 19.680999755859375,53.132999420166016 17.757999420166016,50.42300033569336z M1.746000051498413,0 C-0.6320000290870667,2.635999917984009 -0.7710000276565552,7.090000152587891 2.51200008392334,9.708000183105469 C2.51200008392334,9.708000183105469 22.190000534057617,25.400999069213867 22.190000534057617,25.400999069213867 C22.190000534057617,25.400999069213867 24.229000091552734,18.027000427246094 24.229000091552734,18.027000427246094 C24.229000091552734,18.027000427246094 2.51200008392334,0.7080000042915344 2.51200008392334,0.7080000042915344 C2.2320001125335693,0.48500001430511475 1.9769999980926514,0.24799999594688416 1.746000051498413,0z"></path>
                            </g>
                          </g>
                          <g transform="matrix(1,0,0,1,60,60)" opacity="1" style="display: block;"></g>
                        </g>
                        <g clip-path="url(#__lottie_element_1462)" style="display: none;">
                          <g style="display: none;"></g>
                        </g>
                        <g clip-path="url(#__lottie_element_1455)" style="display: none;" transform="matrix(0,0,0,0,51,51)" opacity="0">
                          <g style="display: block;" transform="matrix(1,0,0,1,10,12)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(255,184,2)" fill-opacity="1" d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z"></path>
                            </g>
                          </g>
                        </g>
                        <g clip-path="url(#__lottie_element_1448)" style="display: none;">
                          <g style="display: none;"></g>
                        </g>
                        <g style="display: none;">
                          <g><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g>
                        </g>
                        <g clip-path="url(#__lottie_element_1426)" style="display: none;" transform="matrix(0.1301020085811615,0,0,0.1301020085811615,-14.050996780395508,-14.051002502441406)" opacity="1"><g style="display: block;" transform="matrix(1,0,0,1,500,500)" opacity="1">
                          <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                            <path fill="rgb(250,206,21)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                          </g>
                        </g>
                          <g style="display: block;" transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,500,500)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                              <path fill="rgb(255,184,2)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(-0.5,0.8660253882408142,-0.8660253882408142,-0.5,500,500)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                              <path fill="rgb(250,206,21)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(-1,0,0,-1,500,500)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                              <path fill="rgb(255,184,2)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(-0.5,-0.8660253882408142,0.8660253882408142,-0.5,500,500)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                              <path fill="rgb(250,206,21)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            </g>
                          </g>
                          <g style="display: block;" transform="matrix(0.5,-0.8660253882408142,0.8660253882408142,0.5,500,500)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                              <path fill="rgb(255,184,2)" fill-opacity="1" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p style="font-size: 12px;color: grey">{{video.starNum}}</p>
                </el-row>
              </div>
            </div>

        </div>
      </div>



    </div>

  </div>



</template>

<style >
:root {

  /*申明css全局变量*/
  --white: 255,255,255;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-950: 22,24,35;
  --color-text-t1: rgba(var(--neutral-950),1);
  --color-text-t2: rgba(var(--neutral-950),.75);
  --color-text-t3: rgba(var(--neutral-950),.5);
  --color-text-t4: rgba(var(--neutral-950),.34);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-bg-b1-white: rgba(var(--white),1);
  --color-line-l3: rgba(var(--neutral-950),.06);
  --color-text-t0: rgba(var(--white),1);
  --bgbg-input: rgba(22,24,35,.05);
  --btn-color: rgba(22,24,35,.75);
  --color-bg-b1: rgba(var(--neutral-50),1);
  --color-bg-b2: rgba(var(--neutral-100),1);
  --orange-red-500: 255,76,19;
  --color-semantic-danger: rgba(var(--orange-red-500),1);
}



.showusrinfo {
  display: flex;
/* //margin: 0px auto 0px; */
  max-width: 1208px;
/* //position: fixed; */
  width: 100%;
  /*background-image: url("./assets/banner.jpg");*/


}
.showusrinfo .VYCEfmrZ {

  display: flex;
  flex-direction: row-reverse;
  position: relative;
  width: 50%;
  height: 30%;
}

.GIg8IFtS {
  border-radius: 12px;
  color: var(--btn-color)!important;
  height: 33px;
  top: 60px;
  position: relative;
  /*bottom: 0;*/
}

.showuseravatar {
  flex: none;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 112px;
}
.useravatar{
  width: 112px;
  height: 112px;
  border-radius: 50%;

}
.usrinfo {
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  margin-left: 32px;
  min-height: 120px;
  position: relative;

}


.usrinfo .usrinfo_name_row {
  display: flex;
  position: relative;
  width: 100%
}

.usrinfo .usrinfo_name_row .usrinfo_name {
  font-size: 20px;
  line-height: 28px;
  margin: 0
}

.usrinfo .usrinfo_name_row .usrinfo_name span {
  color: rgb(249 245 245 / 90%);
  display: block;
  flex: none;
  font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}
.usrinfo .eDwMD7wB {
  display: flex;
  margin-top: 4px;
  width: 100%
}

.usrinfo .eDwMD7wB .AULCPX_8 {
  align-items: center;
  display: flex
}

.usrinfo .eDwMD7wB .AULCPX_8 .Y150jDoF {
  color: rgb(249 245 245 / 90%);
  font-size: 14px;
  line-height: 22px;
  margin-right: 6px
}

.usrinfo .eDwMD7wB .AULCPX_8 .TxoC9G6_ {
  color: #161823;
  color: var(--color-text-t1);
  font-size: 16px;
  line-height: 24px
}

.usrinfo .eDwMD7wB .AULCPX_8:after {
  border-left: 1px solid #f2f2f4;
  border-left: 1px solid var(--color-secondary-default);
  content: "";
  height: 16px;
  margin: 0 16px;
  width: 0
}

.usrinfo .eDwMD7wB .AULCPX_8:last-child:after {
  display: none
}

.usrinfo .eDwMD7wB .LEaniV4W {
  cursor: pointer
}

.usrinfo .eDwMD7wB .LEaniV4W .TxoC9G6_ {
  color: rgb(249 245 245 / 90%);
}
.usrinfo .wTV10cVL {
  align-items: center;
  display: flex;
  height: 20px;
  margin-top: 12px;
  width: 100%
}
.usrinfo .wTV10cVL .aH7rLkZZ {
  color: rgb(249 245 245 / 90%);
  font-size: 12px;
  line-height: 20px;
  margin-right: 20px
}
.UuBdeq3u {
  background-color:rgb(23,25,34);
  margin-top: -16px;
  padding-top: 16px
}


.gX8AKvzT {
  align-items: center;
  background-image: url(//lf3-cdn-tos.bytegoofy.com/obj/goofy/ies/douyin_web/image/light_bg2.53584496.png),url(//lf3-cdn-tos.bytegoofy.com/obj/goofy/ies/douyin_web/image/dark_bg2.58b5c753.png);
  background-size: 0 0;
  border-bottom: 1px solid rgba(22,24,35,.06);
  border-bottom: 1px solid var(--color-line-l3);
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 100%
}
.gX8AKvzT ._UJeiIOr {
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin: 11px 0;
  position: relative;
  width: 100%
}
.NnpDSweB {
  display: flex;
  height: 26px
}

.NnpDSweB .qYqKgR2A {
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 40px
}
.NnpDSweB .qYqKgR2A:last-child {
  margin-right: 10px
}
h2.OdX5EIvH {
  align-items: center;
  display: flex;
  font-weight: 400
}
.NnpDSweB .qYqKgR2A .UQ3wN7h5 {
  color: rgb(249 245 245 / 90%);

  font-size: 18px;
  line-height: 26px
}
.NnpDSweB .qYqKgR2A .J6IbfgzH {
  color: rgb(249 245 245 / 90%);

  font-size: 18px;
  line-height: 26px
}


/* //编辑资料弹窗css */
.me4sq_ea {
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,.6);
  bottom: 0;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999
}

.HFdVWNl1 {

  background: #fff;
/* //background: var(--color-bg-b1); */
  border-radius: 4px;
  height: 588px;
  left: 50%;
  padding: 0 40px;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 480px;
  z-index: 999

}

.me4sq_ea .HFdVWNl1 .sIofbXYD {
  margin-top: 36px;
  position: relative
}

.me4sq_ea .HFdVWNl1 .sIofbXYD .HlGxsqxj {
  color: #161823;
  color: var(--color-text-t1);
  font-size: 18px
}

.me4sq_ea .HFdVWNl1 .sIofbXYD .zQZ3zTMZ {
  cursor: pointer;
  position: absolute;
  right: -36px;
  top: -32px
}

.me4sq_ea .HFdVWNl1 .sIofbXYD .zQZ3zTMZ svg path {
  fill: rgba(22,24,35,.75);
  fill: var(--color-text-t2)
}



.me4sq_ea .HFdVWNl1 .pe1zSf4L .FhB9P5EJ {
  border-radius: 50%;
  height: 108px;
  overflow: hidden;
  position: relative;
  width: 108px
}

.me4sq_ea .HFdVWNl1 .pe1zSf4L .FhB9P5EJ img {
  height: 100%;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .pe1zSf4L .FhB9P5EJ .XdyDPZGT {
  background-color: rgba(0,0,0,.3);
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41MzUgNWEyIDIgMCAwIDAtMS42NjQuODkxTDkuNDY0IDguMDAzSDhhNCA0IDAgMCAwLTQgNFYyM2E0IDQgMCAwIDAgNCA0aDE2YTQgNCAwIDAgMCA0LTRWMTIuMDAzYTQgNCAwIDAgMC00LTRoLTEuNDY1TDIxLjEzIDUuODkxQTIgMiAwIDAgMCAxOS40NjQgNWgtNi45MjlaTTE2IDEwLjVBNi4yNSA2LjI1IDAgMSAwIDE2IDIzYTYuMjUgNi4yNSAwIDAgMCAwLTEyLjVabS0zLjc1IDYuMjVhMy43NSAzLjc1IDAgMSAxIDcuNSAwIDMuNzUgMy43NSAwIDAgMS03LjUgMFoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii45Ii8+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 32px 32px;
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1
}

.I5fCASKY {
  color: #FFFFFF80;
/* //color: rgba(22,24,35,.6); */
/* //color: var(--color-text-t3); */
  font-size: 12px;
  margin-top: 4px
}

.edit-model{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-overlay {
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,.6);
  bottom: 0;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

}

.me4sq_ea .HFdVWNl1 .edqvnwDy {
  margin-top: 16px;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .edqvnwDy .N3OJZMVX {
  color: #161823;
  color: var(--color-text-t1);
  font-size: 14px
}

.tHRXXWRS {
  margin-top: 4px;
  position: relative;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .edqvnwDy .tHRXXWRS input {
  background: #f2f2f4;
  background: var(--color-bg-b2);
  border: none;
  border-radius: 4px;
  caret-color: rgba(22,24,35,.75);
  caret-color: var(--color-text-t2);
  color: rgba(22,24,35,.75);
  color: var(--color-text-t2);
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding-left: 8px;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .edqvnwDy .tHRXXWRS .Z0yinT0U {
  color: rgba(22,24,35,.34);
  color: var(--color-text-t4);
  font-size: 12px;
  line-height: 32px;
  position: absolute;
  right: 8px
}

.me4sq_ea .HFdVWNl1 .edqvnwDy .Qhlf7dpM {
  color: rgba(22,24,35,.34);
  color: var(--color-text-t4);
  font-size: 12px;
  margin-top: 6px
}

.me4sq_ea .HFdVWNl1 .l7eL8soD {
  margin-top: 24px;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .l7eL8soD .CTElTkEg {
  color: #161823;
  color: var(--color-text-t1);
  font-size: 14px
}

.me4sq_ea .HFdVWNl1 .l7eL8soD .H34yym7u {
  margin-top: 4px;
  position: relative;
  width: 100%
}

.me4sq_ea .HFdVWNl1 .DR89_6s3 {
  margin-top: 32px
}

.me4sq_ea .HFdVWNl1 .DR89_6s3 .I8nbQfIC {
  margin: 0
}

.me4sq_ea .HFdVWNl1 .DR89_6s3 .tUljT13v {
  margin-left: 16px
}

.me4sq_ea .HFdVWNl1.fykt1CCb {
  display: none
}

.B_6rombX {
  background: #f2f2f4;
  background: var(--color-bg-b2);
  border-radius: 4px;
  color: rgba(22,24,35,.75);
  color: var(--color-text-t2);
  height: 128px;
  padding: 8px 8px 16px;
  position: relative;
  width: 100%
}
.sDAMysaM{
  background-color: #2B2D40;
}
.FDSFDSG{
  background-color: #2B2D40;
  display: flex;
  width: 100%;
  height: 500vh;

}


.B_6rombX .SpPvw2SS {
  margin: 0 -4px 0 0
}

.B_6rombX .jNUYaBcm {
  bottom: 2px;
  color: #ff4c13;
  color: var(--color-semantic-danger);
  font-size: 12px;
  position: absolute;
  right: 8px
}
.richtext-container {
  height: 100%;
  margin: 11px 0
}

.richtext-container .public-DraftEditorPlaceholder-root {
  position: absolute;
  z-index: 1
}

.richtext-container div,.richtext-container span {
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px
}

.richtext-container .placeholder-default span,.richtext-container .public-DraftEditorPlaceholder-inner span {
  color: rgba(22,24,35,.34);
  color: var(--color-text-t4)
}

.richtext-container .placeholder-default img,.richtext-container .public-DraftEditorPlaceholder-inner img {
  opacity: .4
}

.richtext-container .public-DraftEditorPlaceholder-inner {
  color: rgba(22,24,35,.34);
  color: var(--color-text-t4)
}

.richtext-container .DraftEditor-editorContainer {
  overflow-y: scroll;
  scrollbar-width: none;
  z-index: 10
}

.richtext-container .DraftEditor-editorContainer::-webkit-scrollbar {
  display: none
}

.richtext-container .public-DraftEditor-content {
  color: #161823;
  color: var(--color-text-t1)
}

.DraftEditor-root {
  position: relative
}

.public-DraftEditor-block {
  position: relative
}
.uservideoinfo{
  z-index: 10
}


.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content1 {
  background-color: #252632;
/* //background-color: rgba(25,26,32); */
  padding: 20px;
  border-radius: 5px;
  height: 588px;
  width: 480px;

}

.modal-content1 input,
.modal-content1 textarea {
  width: 100%;
  margin-bottom: 10px;
}



.close-button {
  position: absolute;
  top: 60px;
  right: 405px;
  border: none;
  cursor: pointer;

}
.head-model {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
  width: 480px;
  height: 128px;

}
.head{
  width: 112px;
  height: 112px;
  border-radius: 50%;
  position: absolute;

}
.custom-button{
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41MzUgNWEyIDIgMCAwIDAtMS42NjQuODkxTDkuNDY0IDguMDAzSDhhNCA0IDAgMCAwLTQgNFYyM2E0IDQgMCAwIDAgNCA0aDE2YTQgNCAwIDAgMCA0LTRWMTIuMDAzYTQgNCAwIDAgMC00LTRoLTEuNDY1TDIxLjEzIDUuODkxQTIgMiAwIDAgMCAxOS40NjQgNWgtNi45MjlaTTE2IDEwLjVBNi4yNSA2LjI1IDAgMSAwIDE2IDIzYTYuMjUgNi4yNSAwIDAgMCAwLTEyLjVabS0zLjc1IDYuMjVhMy43NSAzLjc1IDAgMSAxIDcuNSAwIDMuNzUgMy43NSAwIDAgMS03LjUgMFoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii45Ii8+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,.3);
  position: absolute;
  z-index: 1;
  padding: 0;
  margin-bottom: 0;
  margin-right: 0;
  margin-top: 0;
  margin-left: 0;
}
.name-model {
  margin-top: 16px;
  width: 100%;

}

.name-tips {
  color: white;

  font-size: 14px;
  width: 100%;
  margin-left: 45px;
  margin-bottom: 15px;

}
.name-content {
  margin-top: 4px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.name-content input{
  background: #33343f;
  border: none;
  border-radius: 4px;
  caret-color: #cccccc;
  color: #cccccc;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding-left: 8px;
  width: 80%;


}
.intro-model {
  margin-top: 16px;
  width: 100%
}

.intro-tips {
  color: white;

  font-size: 14px;
  width: 100%;
  margin-left: 45px;
  margin-bottom: 15px;
}
.intro-content {
  margin-top: 4px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.intro-content textarea{
  background: #33343f;
  border: none;
  border-radius: 4px;
  caret-color: #cccccc;
  color: #cccccc;
  font-size: 14px;
  height: 160px;
  line-height: 32px;
  outline: none;
/* //padding-left: 8px; */
  width: 80%;

}
.button-model {
  margin-top: 32px
}
.save-button{
  background-color: #ffc2c6;
  color: white;
  border-radius: 4px;
  font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 22px;
  margin-left: 45px;
  min-width: 88px;
}
.cancel-button{
  background-color: #3c3e49;
  color: white;
  border-radius: 4px;
  font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 22px;
  min-width: 88px;
  margin-left: 10px;
}

.video-model{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.video-list{
  width: 22%;
  margin-bottom: 20px;
  margin-right: 10px;
}

.video-cover {
  //width: 100%;
  //height: 0;
  //padding-bottom: 177.77%;
  height: 400px;
  width: 300px;
  /* 控制封面图片的宽高比例，例如16:9的比例为56.25% */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.cover-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 控制图片填充方式，可选值包括：fill, contain, cover, none, scale-down */
}
.cover-img img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
/* //object-fit: cover; 控制图片填充方式，可选值包括：fill, contain, cover, none, scale-down */
}
.author-card-user-video-like {
  align-items: center;
  bottom: 4px;
  color: #fff;
  display: flex;
  flex-direction: row;
  font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  left: 8px;
  line-height: 22px;
  position: absolute;
}
.show-video-name{
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: white;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  line-height: 22px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: .35s;
  transition-property: margin;
}
.video-container {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: flex-start;*/
  /*align-self: end;*/
  justify-content: flex-start; /* 水平排列，四列 */
  /*border-radius: 10%;*/
  /*margin: 0px; !* 为了填充每个video-item之间的空间，-8px 是 margin 的负值 *!*/
}

.video-item {
  flex: 0 1 calc(25%); /* 四个一行，每个占 25% 的宽度，16px 是 margin 的值 */
  /*margin: 0px;*/
  border-radius: 10%;
  //margin-top: 10px;
}

.video-info {
  /*position: absolute;*/
  /*top: 20px; !* 调整顶部距离 *!*/
  /*right: 20px; !* 调整右边距离 *!*/
  /*width: 300px; !* 调整矩形的宽度 *!*/
  height: 450px; /* 调整矩形的高度 */
  background-color: #475669; /* 背景颜色 */
  border-radius: 15px; /* 圆角半径 */
  /*padding: 10px; !* 内边距，用于放置文本 *!*/
  margin-left: 10px;
  margin-top: 20px;
  /*margin-bottom: auto;*/
  /*display: grid;*/
  /*grid-template-columns: repeat(4, 1fr); !* 每行4列 *!*/
  /*grid-auto-rows: minmax(0, 1fr); !* 自适应行高 *!*/
  /*grid-gap: 0; !* 去除网格间隙 *!*/
  /*margin-bottom: -1px;*/
  /*margin-top: -1px;*/

  /*display: grid;*/
  /*grid-template-columns: 1fr; !* 一列布局，可以根据需要调整列数 *!*/
  /*grid-gap: 10px; !* 添加水平和垂直间距，可以根据需要调整 *!*/
  /*color: #fff; !* 文本颜色 *!*/
  /*font-size: 12px; !* 文本大小 *!*/
}
.pageshot-info {
  width: 100%;
  height: 300px;
}


.likecommentstar {
  position: relative;
  padding-bottom: 5%;
}

.video-content {
  position: relative;
}

</style>

<script setup>


// var webpack = require('webpack')
//
// module.exports = {
//
//   plugins: [new webpack.optimize.CommonsChunkPlugin('common.js'), new webpack.ProvidePlugin({
//     jQuery: "jquery",
//     $: "jquery"
//   })],
// }

import { router } from '@/router';
import {onMounted, ref, toRaw} from 'vue';
import request from "@/api";
const qiniu = require('qiniu-js');


import {useStore} from 'vuex';

import axios from "axios";

const store = useStore();

const userId = localStorage.getItem("currentUserId")


// const userId = 16

function getuserinfo(){
  return { id: 1, name: 'cxy', src: require('./assets/en-ts.jpg'),follow: 10 ,fans : 50 , likes: 1000 }
}
function getuser_videoinfo(){
  return { work_num: 5 }
}

// 从后端获取视频存到videos中
const showModal = ref(false);


const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

let selectedFile = ref(null);
const isHeadImageChosed = ref(false);
const handleFileChange = (event) => {
  // let selectedFile = document.getElementById('upload-head-button');
  selectedFile = event.target.files[0];
  // console.log(selectedFile.type)

  isHeadImageChosed.value = true;
  // console.log(event.target);
};

const observer = {
  next(res){
    // ...
  },
  error(err){
    // ...
  },
  complete(res){
    // ...
  }
}
// 上传头像到七牛云服务器中，其中头像以 userid命名。
async function uploadVideo(newheadshot,fileName){
  let token = ''
  await request.post("/video/getHeadShotToken").then(res => {token = res.data})


  var key = fileName;
  console.log(key);
  const observable = qiniu.upload(newheadshot,key,token)
  const subscription = observable.subscribe(observer)
  console.log(subscription)

}
// 开始写js

const userInfo = ref({})
//查询用户信息
async function getuser(userId) {
  const p = {
    userId: userId
  }
  // console.log(p)
  await request
      .get("/user/findUserUpdatHeadShot", {params: p})
      .then(res => {
        // console.log(res)
        if(res.data.code != 1)
          userInfo.value = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  console.log(toRaw(userInfo))
  // console.log(userInfo.value.email)

}
getuser(userId);


//查询用户发布的视频
const videoInfo = ref([])

async function getusersvideos(userId){
  const p = {
    userid: userId
  }
  await request
      .get("/video/findVideoByUser", {params: p})
      .then(res => {
        videoInfo.value =  res.data.data;
      })
      .catch(err => {
        console.log(err)
      });

  console.log(toRaw(videoInfo))
}
//查询用户收藏的视频
async function getuserstarvideos(userId){
  const p = {
    userId : userId
  }
  await request
      .get("/star/getUserStarVideo", {params: p})
      .then(res => {
        videoInfo.value =  res.data.data;
      })
      .catch(err => {
        console.log(err)
      });

  console.log(toRaw(videoInfo))
}
//
//查询用户收藏的视频
async function getuserhistotyvideos(userId){
  const p = {
    userId : userId
  }
  await request
      .get("/history/getUserHistoryVideo", {params: p})
      .then(res => {
        videoInfo.value =  res.data.data;
      })
      .catch(err => {
        console.log(err)
      });

  console.log(toRaw(videoInfo))
}

// getusersvideos(16)

// 处理菜单选择
const resetVideoInfo = () =>{
  videoInfo.value = null;
};
getusersvideos(userId);
async function handleMenuSelect(index) {
  console.log(index);

  // const menu = ref(null);
  // onMounted(() => {
  //   getusersvideos(userId);
  // });
  if(index === 'works'){
    //   处理作品点击事件
    //   videoInfo = ref([])
    resetVideoInfo();
    getusersvideos(userId);

    console.log(videoInfo);
  }
  else if(index === 'likes'){
    //处理喜欢点击事件
    resetVideoInfo();
    getuserstarvideos(userId);

  }
  else if(index === 'star'){
    //处理收藏点击事件
    // videoInfo = ref([])
    resetVideoInfo();
    getuserstarvideos(userId);

  }
  else if(index === 'history'){
    //处理历史点击事件
    resetVideoInfo();
    getuserhistotyvideos(userId);

  }


}

const username = ref('');
const bio = ref('');
let url = ref('');
// async function getHeadShotUrl(fileName){
//   const p = {
//     fileName: fileName
//   }
//   console.log(fileName)
//   await request
//       .get("/video/getDownLoadVideoUrl", {params: p})
//       .then(res => {
//         // console.log(res)
//         if(res.data!=="")
//           console.log(res.data)
//           url.value =  res.data
//       })
//       .catch(err => {
//         console.log(err)
//       })
//
// }
// async function deleteHeadShot(fileName){
//   let formData = new FormData();
//   formData.append('fileName',fileName);
//   console.log(fileName)
//   await request
//       .post("/video/deleteQiniu", formData)
//       .then(res => {
//         console.log(res)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//
// }

// let newHeadShotName = ref('');
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
async function saveChanges (){
  let formData = new FormData();
  await getuser(userId);
  console.log(userInfo.value.email)
  console.log(userInfo.value.headshot)
  formData.append('email',userInfo.value.email);
  formData.append('username',username.value);
  formData.append("introduction",bio.value);
  // console.log(isHeadImageChosed.value);
  if(isHeadImageChosed.value){
    const fileName =  generateRandomString(10) + '.jpg';
    console.log(fileName);
    await uploadVideo(selectedFile,fileName);
    formData.append('headshotname',fileName)
  }
  else {
    formData.append('headshotname',userInfo.value.headshotname)
  }
  await request
      .post('/user/updateUserHeadShot', formData)
      .then(res =>{
        if(res.data.code !=0)
          console.log(res.data.msg)
        else {
          console.log("更新用户信息成功")
          console.log(res.data.msg)
          getuser(userId);
          console.log(toRaw(userInfo))
        }
      })
      .catch(error => {
        console.error(error);
      })

  closeModal();
}

function formatMsgTime (timestamp) {
  var dateTime = renderTime(timestamp)
  console.log(dateTime)
  function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000)
  }
  console.log(dateTime) // 将传进来的字符串或者毫秒转为标准时间
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  // var second = dateTime.getSeconds()
  var millisecond = dateTime.getTime() // 将当前编辑的时间转换为毫秒
  var now = new Date() // 获取本机当前的时间
  var nowNew = now.getTime() // 将本机的时间转换为毫秒
  var milliseconds = 0
  var timeSpanStr
  milliseconds = nowNew - millisecond
  if (milliseconds <= 1000 * 60 * 1) { // 小于一分钟展示为刚刚
    timeSpanStr = '刚刚'
  } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) { // 大于一分钟小于一小时展示为分钟
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
  } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) { // 大于一小时小于一天展示为小时
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) { // 大于一天小于十五天展示位天
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  }
  return timeSpanStr
}

// async function saveChanges (){
//   let formData = new FormData();
//   await getuser(userId);
//   console.log(userInfo.value.email)
//   formData.append('email',userInfo.value.email);
//   formData.append('headshot',"http://s3604nf5a.hn-bkt.clouddn.com/222222.jpg?e=1699199867&token=mb7J14F-nUuKXcvrwfneJ2H2k-rIlnrziZ9hHVMu:k6T83hIJWJyf0dgRYXQjR4pBfIM=")
//   formData.append('username',username.value);
//   formData.append("introduction",bio.value);
//   if(isHeadImageChosed.value){
//
//   }
//   request
//       .post('/user/updateUser', formData)
//       .then(res =>{
//         if(res.data.code !=0)
//           console.log(res.data.msg)
//         else {
//           console.log("更新用户信息成功")
//           console.log(res.data.msg)
//           getuser(userId);
//           console.log(toRaw(userInfo))
//         }
//   })
//       .catch(error => {
//         console.error(error);
//       })
//   closeModal();
// }

// getQiniuToken()

</script>