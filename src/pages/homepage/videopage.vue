<template>
  <div class="main">
    <div class="videoFullShow">
      <div class="ZCHTRJzJ isDark" @click="backTOHome" :style="{ left: (test.fold ? '31%' : '2%'), transition: '0.1s' }">
        <div class="bFdMjgdW"></div>
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mcc8KhCO" viewBox="0 0 18 18">
          <path d="M17.448 17.448a1.886 1.886 0 01-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 11.552 14.78L6.332 9 .552 3.22A1.886 1.886 0 113.22.552L9 6.332l5.78-5.78a1.886 1.886 0 112.668
        2.668L11.668 9l5.78 5.78a1.886 1.886 0 010 2.668z" fill="#fff"></path>
        </svg>
      </div>
      <div :key="route.params.index">
        <div>
          <!-- <p>{{ route.params.index }}</p> -->
          <video class="videodetail" width="90%" :src="videoInfo.videoPath" controls autoplay="autoplay"></video>
        </div>

        <div class="videoinfodetail">
          <el-row align="middle">
            <div class="account">
              <el-col span="30">
                <div class="account-name">@{{ userInfo.username }}</div>
              </el-col>
              <el-col span="22">
                <div class="video-create-time">--{{ formatMsgTime(videoInfo.createTime) }}</div>
              </el-col>
            </div>
          </el-row>
          <el-row>
            <div class="title">
              <span class="tag-span">{{ videoInfo.videoName }}</span>
              <el-row>
                <el-row v-for="(tag, index) in taglist" :key="index">
                  <span class="tag-span">#{{ tag.tagName }}</span>
                </el-row>
              </el-row>
            </div>
          </el-row>

          <div class="xgplayer-setting-label" @click="getWaterMarkVideo(videoInfo.videoId)">
            <button aria-checked="true" class="xg-switch" aria-labelledby="xg-switch-pip" type="button" 
            :style="{ backgroundColor : (whichvideo.isWater ? 'hotpink' : 'rgba(229,229,234,.9)'), 
            transform: (whichvideo.isWater ? 'rotate(180deg)' : 'rotate(0deg)')}">
              <span class="xg-switch-inner"></span>
            </button>
            <span class="xgplayer-setting-title">水印</span>
          </div>
        </div>

        

        <el-col :span="2" class="xslide">
          <div class="switch">
            <div class="switch-prev" @click="switchPreVideo(route.params.index)"
              :style="{ cursor: (videoInfo.videoId == videos[0].videoId ? 'no-drop' : 'pointer') }">
              <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
                <g filter="url(#newAbove_svg__filter0_d_1651_162618)">
                  <path
                    d="M7.269 16.316a1.393 1.393 0 010-1.97l5.056-5.055a1.393 1.393 0 011.97 0l.011.011 5.045 5.045a1.393 1.393 0 11-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 01-1.97 0z"
                    fill="#fff">

                  </path>
                </g>
              </svg>
            </div>
            <div class="switch-next" @click="switchNextVideo(route.params.index)"
              :style="{ cursor: (videoInfo.videoId == videos[videos.length - 1].videoId ? 'no-drop' : 'pointer') }">
              <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
                <g filter="url(#newBelow_svg__filter0_d_1646_162559)">
                  <path
                    d="M7.269 9.29a1.393 1.393 0 000 1.97l5.056 5.056a1.393 1.393 0 001.97 0l.011-.011 5.045-5.045a1.393 1.393 0 10-1.97-1.97l-4.071 4.072L9.239 9.29a1.393 1.393 0 00-1.97 0z"
                    fill="#fff"></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="button-slide">
            <div class="headImage">
              <img v-bind:src="userInfo.headshot ? userInfo.headshot : require('../../assets/img.png')" class="PbpHcHqa"  @click="routeToUser(userInfo.userId)">
              <div class="NRiH5zYV" data-e2e="feed-follow-icon" v-if="relation.nofollow"
                @click="addFollow(currentUserId, userInfo.userId)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90"
                  width="90" height="90" preserveAspectRatio="xMidYMid meet"
                  style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                  <g clip-path="url(#__lottie_element_187)">
                    <g transform="matrix(1,0,0,1,45,45)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path fill="rgb(254,44,85)" fill-opacity="1"
                          d=" M0,-36 C19.881999969482422,-36 36,-19.881999969482422 36,0 C36,19.881999969482422 19.881999969482422,36 0,36 C-19.881999969482422,36 -36,19.881999969482422 -36,0 C-36,-19.881999969482422 -19.881999969482422,-36 0,-36z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,45,45)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,255,255)"
                          stroke-opacity="1" stroke-width="6"
                          d=" M-13.5,0 C-13.5,0 13.562000274658203,0 13.562000274658203,0 C13.562000274658203,0 -13.5,0 -13.5,0z">
                        </path>
                      </g>
                      <g opacity="1" transform="matrix(0,1,-1,0,0,0)">
                        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,255,255)"
                          stroke-opacity="1" stroke-width="6"
                          d=" M-13.5,0 C-13.5,0 13.562000274658203,0 13.562000274658203,0 C13.562000274658203,0 -13.5,0 -13.5,0z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="likebutton" @click="likevideo(videoInfo.videoId)">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-5 0 95 100"
                width="99" height="99" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                <g clip-path="url(#__lottie_element_1328)">
                  <g clip-path="url(#__lottie_element_1362)"
                    transform="matrix(0.5249999761581421,0,0,0.5249999761581421,1.0250015258789062,8.822105407714844)"
                    opacity="1" style="display: block;">
                    <g clip-path="url(#__lottie_element_1366)"
                      transform="matrix(0.10000000149011612,0,0,0.10000000149011612,0,0)" opacity="1"
                      style="display: block;">
                      <g style="display: none;">
                        <g>
                          <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                          </path>
                        </g>
                      </g>
                      <g clip-path="url(#__lottie_element_1394)" style="display: none;">
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                        <g style="display: none;">
                          <g>
                            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                            </path>
                          </g>
                        </g>
                      </g>
                      <g class="png" clip-path="url(#__lottie_element_1384)" transform="matrix(1,0,0,1,240,340)"
                        opacity="1" style="display: block;">
                        <g transform="matrix(1,0,0,1,154.5,92)" opacity="1" style="display: block;">
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path id="likebuttoncolor" fill="rgb(255,255,255)" fill-opacity="1"
                              d=" M453.0360107421875,88.71199798583984 C493.77398681640625,30.663999557495117 560.6599731445312,0 634.2509765625,0 C774.4030151367188,0 890.9719848632812,121.58999633789062 890.9719848632812,266.1369934082031 C890.9719848632812,266.1549987792969 890.9719848632812,266.1730041503906 890.9719848632812,266.1910095214844 C890.9810180664062,266.1709899902344 890.9910278320312,266.1510009765625 891,266.1310119628906 C891,270.25201416015625 890.9299926757812,273.37200927734375 890.8779907226562,275.6679992675781 C890.8060302734375,278.8190002441406 890.77001953125,280.4159851074219 891,280.9159851074219 C890.468994140625,311.3190002441406 885.2219848632812,336.43798828125 875.8989868164062,369.62799072265625 C870.6090087890625,375.5880126953125 865.6939697265625,386.81201171875 860.7979736328125,399.1990051269531 C853.073974609375,411.1969909667969 850.1510009765625,417.0090026855469 845.697021484375,428.7699890136719 C841.1519775390625,436.39898681640625 836.323974609375,444.06298828125 831.2449951171875,451.7439880371094 C793.7960205078125,508.54400634765625 743.7080078125,565.073974609375 693.6669921875,615.2520141601562 C615.3359985351562,694.2769775390625 535.5440063476562,760.0579833984375 500.8320007324219,788.6749877929688 C491.24700927734375,796.5759887695312 485.1000061035156,801.6439819335938 483.3680114746094,803.375 C471.0669860839844,815.677978515625 458.7650146484375,815.9860229492188 446.4630126953125,815.9940185546875 C446.1390075683594,815.9979858398438 445.8139953613281,816 445.4859924316406,816 C420.25,816 407.6319885253906,803.3809814453125 395.0140075683594,790.7630004882812 C394.0509948730469,789.7999877929688 391.60101318359375,787.7789916992188 387.8580017089844,784.7830200195312 C349.625,756.5999755859375 263.58599853515625,687.7860107421875 182.74200439453125,604.7830200195312 C121.06600189208984,542.02001953125 61.62200164794922,470.0069885253906 29.091999053955078,399.5880126953125 C16.474000930786133,374.35101318359375 0.7310000061988831,314.2640075683594 0,280.9219970703125 C0.26899999380111694,280.6549987792969 0.22699999809265137,279.04901123046875 0.14399999380111694,275.843994140625 C0.08299999684095383,273.49798583984375 0,270.2969970703125 0,266.1369934082031 C0,121.52400207519531 116.50199890136719,0 256.72100830078125,0 C330.1789855957031,0 397.1310119628906,30.663999557495117 453.0360107421875,88.71199798583984z">
                            </path>
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
                        <g>
                          <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4">
                          </path>
                        </g>
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
            <div
              style="color: white; font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif; font-weight: 500; text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px; font-size: 20px;">
              {{ videoInfo.likeNum }}</div>
            <div class="commentbutton" @click="changeFold">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
                width="99" height="99" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                <g clip-path="url(#__lottie_element_1416)">
                  <g transform="matrix(0.6600000262260437,0,0,0.6600000262260437,76.25495910644531,52.904117584228516)"
                    opacity="1" style="display: block;">
                    <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                      <path fill="rgb(255,255,255)" fill-opacity="1"
                        d=" M-4.644999980926514,4.482999801635742 C-7.25,7.818999767303467 -13.482000350952148,8.300000190734863 -13.482000350952148,8.300000190734863 C-13.482000350952148,8.300000190734863 -14.413999557495117,11.48799991607666 -12.135000228881836,10.821000099182129 C-9.855999946594238,10.154000282287598 -7.25,8.152000427246094 -4.644999980926514,4.482999801635742z M-17.36,-1.04 C-17.36,-0.16 -18.07,0.56 -18.96,0.56 C-18.96,0.56 -18.96,0.56 -18.96,0.56 C-19.85,0.56 -20.57,-0.16 -20.57,-1.04 C-20.57,-1.92 -19.85,-2.64 -18.96,-2.64 C-18.07,-2.64 -17.36,-1.92 -17.36,-1.04z M-11.89,-1.04 C-11.89,-0.16 -12.61,0.56 -13.5,0.56 C-13.5,0.56 -13.5,0.56 -13.5,0.56 C-14.39,0.56 -15.11,-0.16 -15.11,-1.04 C-15.11,-1.92 -14.39,-2.64 -13.5,-2.64 C-12.61,-2.64 -11.89,-1.92 -11.89,-1.04z M-6.43,-1.04 C-6.43,-0.16 -7.15,0.56 -8.04,0.56 C-8.04,0.56 -8.04,0.56 -8.04,0.56 C-8.92,0.56 -9.64,-0.16 -9.64,-1.04 C-9.64,-1.92 -8.92,-2.64 -8.04,-2.64 C-7.15,-2.64 -6.43,-1.92 -6.43,-1.04z M-5.79,5.98 C-3.56,3.75 -2.25,1.42 -2.25,-1.29 C-2.25,-6.79 -7.29,-11.25 -13.5,-11.25 C-19.71,-11.25 -24.75,-6.79 -24.75,-1.29 C-24.75,4.21 -19.55,7.99 -13.34,7.99 C-13.34,7.99 -13.34,11.06 -13.34,11.06 C-13.34,11.06 -8.51,8.72 -5.79,5.98z">
                      </path>
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
            <div
              style="color: white; font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif; font-weight: 500; text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px; font-size: 20px;">
              {{ comments.length }}</div>
            <div class="starbutton" @click="starvideo(currentUserId, videoInfo.videoId)">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-2 0 105 105"
                width="99" height="99" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                <g clip-path="url(#__lottie_element_1421)">
                  <g clip-path="url(#__lottie_element_1495)" style="display: none;">
                    <g style="display: none;"></g>
                    <g style="display: none;"></g>
                    <g style="display: none;"></g>
                  </g>
                  <g clip-path="url(#__lottie_element_1482)" style="display: none;"
                    transform="matrix(0.4658204913139343,0,0,0.4658204913139343,23.050769805908203,26.447376251220703)"
                    opacity="1">
                    <g style="display: block;" transform="matrix(1,0,0,1,10,12)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z">
                        </path>
                      </g>
                    </g>
                    <g style="display: block;" transform="matrix(1,0,0,1,10,45.720001220703125)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M77.80999755859375,25.400999069213867 C77.80999755859375,25.400999069213867 97.48799896240234,9.708000183105469 97.48799896240234,9.708000183105469 C100.77100372314453,7.090000152587891 100.63200378417969,2.635999917984009 98.25399780273438,0 C98.02300262451172,0.24799999594688416 97.76799774169922,0.48500001430511475 97.48799896240234,0.7080000042915344 C97.48799896240234,0.7080000042915344 75.77100372314453,18.027000427246094 75.77100372314453,18.027000427246094 C75.77100372314453,18.027000427246094 77.80999755859375,25.400999069213867 77.80999755859375,25.400999069213867z M17.757999420166016,50.42300033569336 C17.757999420166016,50.42300033569336 16.81399917602539,53.83599853515625 16.81399917602539,53.83599853515625 C15.175999641418457,59.757999420166016 21.746999740600586,64.54399871826172 26.858999252319336,61.152000427246094 C26.858999252319336,61.152000427246094 50,45.79800033569336 50,45.79800033569336 C50,45.79800033569336 73.14099884033203,61.152000427246094 73.14099884033203,61.152000427246094 C78.25299835205078,64.54399871826172 84.8239974975586,59.757999420166016 83.18599700927734,53.83599853515625 C83.18599700927734,53.83599853515625 82.24199676513672,50.42300033569336 82.24199676513672,50.42300033569336 C80.31900024414062,53.132999420166016 76.4280014038086,54.33300018310547 73.14099884033203,52.152000427246094 C73.14099884033203,52.152000427246094 50,36.79800033569336 50,36.79800033569336 C50,36.79800033569336 26.858999252319336,52.152000427246094 26.858999252319336,52.152000427246094 C23.57200050354004,54.33300018310547 19.680999755859375,53.132999420166016 17.757999420166016,50.42300033569336z M1.746000051498413,0 C-0.6320000290870667,2.635999917984009 -0.7710000276565552,7.090000152587891 2.51200008392334,9.708000183105469 C2.51200008392334,9.708000183105469 22.190000534057617,25.400999069213867 22.190000534057617,25.400999069213867 C22.190000534057617,25.400999069213867 24.229000091552734,18.027000427246094 24.229000091552734,18.027000427246094 C24.229000091552734,18.027000427246094 2.51200008392334,0.7080000042915344 2.51200008392334,0.7080000042915344 C2.2320001125335693,0.48500001430511475 1.9769999980926514,0.24799999594688416 1.746000051498413,0z">
                        </path>
                      </g>
                    </g>
                    <g style="display: block;" transform="matrix(1,0,0,1,60,60)" opacity="1"></g>
                  </g>
                  <g clip-path="url(#__lottie_element_1469)"
                    transform="matrix(0.4646500051021576,0,0,0.4646500051021576,23.121000289916992,26.373146057128906)"
                    opacity="1" style="display: block;">
                    <g transform="matrix(1,0,0,1,10,12)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path id="starbuttoncolor" fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,10,45.720001220703125)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path id="starbuttonbordercolor" fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M77.80999755859375,25.400999069213867 C77.80999755859375,25.400999069213867 97.48799896240234,9.708000183105469 97.48799896240234,9.708000183105469 C100.77100372314453,7.090000152587891 100.63200378417969,2.635999917984009 98.25399780273438,0 C98.02300262451172,0.24799999594688416 97.76799774169922,0.48500001430511475 97.48799896240234,0.7080000042915344 C97.48799896240234,0.7080000042915344 75.77100372314453,18.027000427246094 75.77100372314453,18.027000427246094 C75.77100372314453,18.027000427246094 77.80999755859375,25.400999069213867 77.80999755859375,25.400999069213867z M17.757999420166016,50.42300033569336 C17.757999420166016,50.42300033569336 16.81399917602539,53.83599853515625 16.81399917602539,53.83599853515625 C15.175999641418457,59.757999420166016 21.746999740600586,64.54399871826172 26.858999252319336,61.152000427246094 C26.858999252319336,61.152000427246094 50,45.79800033569336 50,45.79800033569336 C50,45.79800033569336 73.14099884033203,61.152000427246094 73.14099884033203,61.152000427246094 C78.25299835205078,64.54399871826172 84.8239974975586,59.757999420166016 83.18599700927734,53.83599853515625 C83.18599700927734,53.83599853515625 82.24199676513672,50.42300033569336 82.24199676513672,50.42300033569336 C80.31900024414062,53.132999420166016 76.4280014038086,54.33300018310547 73.14099884033203,52.152000427246094 C73.14099884033203,52.152000427246094 50,36.79800033569336 50,36.79800033569336 C50,36.79800033569336 26.858999252319336,52.152000427246094 26.858999252319336,52.152000427246094 C23.57200050354004,54.33300018310547 19.680999755859375,53.132999420166016 17.757999420166016,50.42300033569336z M1.746000051498413,0 C-0.6320000290870667,2.635999917984009 -0.7710000276565552,7.090000152587891 2.51200008392334,9.708000183105469 C2.51200008392334,9.708000183105469 22.190000534057617,25.400999069213867 22.190000534057617,25.400999069213867 C22.190000534057617,25.400999069213867 24.229000091552734,18.027000427246094 24.229000091552734,18.027000427246094 C24.229000091552734,18.027000427246094 2.51200008392334,0.7080000042915344 2.51200008392334,0.7080000042915344 C2.2320001125335693,0.48500001430511475 1.9769999980926514,0.24799999594688416 1.746000051498413,0z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,60,60)" opacity="1" style="display: block;"></g>
                  </g>
                  <g clip-path="url(#__lottie_element_1462)" style="display: none;">
                    <g style="display: none;"></g>
                  </g>
                  <g clip-path="url(#__lottie_element_1455)" style="display: none;" transform="matrix(0,0,0,0,51,51)"
                    opacity="0">
                    <g style="display: block;" transform="matrix(1,0,0,1,10,12)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path fill="rgb(255,184,2)" fill-opacity="1"
                          d=" M43.79199981689453,4.316999912261963 C45.93899917602539,-1.4390000104904175 54.06100082397461,-1.4390000104904175 56.20800018310547,4.316999912261963 C56.20800018310547,4.316999912261963 65.927001953125,30.375 65.927001953125,30.375 C65.927001953125,30.375 93.6510009765625,31.59000015258789 93.6510009765625,31.59000015258789 C99.7750015258789,31.857999801635742 102.28500366210938,39.60200119018555 97.48799896240234,43.428001403808594 C97.48799896240234,43.428001403808594 75.77100372314453,60.74700164794922 75.77100372314453,60.74700164794922 C75.77100372314453,60.74700164794922 83.18599700927734,87.55599975585938 83.18599700927734,87.55599975585938 C84.8239974975586,93.47799682617188 78.25299835205078,98.26399993896484 73.14099884033203,94.87200164794922 C73.14099884033203,94.87200164794922 50,79.51799774169922 50,79.51799774169922 C50,79.51799774169922 26.858999252319336,94.87200164794922 26.858999252319336,94.87200164794922 C21.746999740600586,98.26399993896484 15.175999641418457,93.47799682617188 16.81399917602539,87.55599975585938 C16.81399917602539,87.55599975585938 24.229000091552734,60.74700164794922 24.229000091552734,60.74700164794922 C24.229000091552734,60.74700164794922 2.51200008392334,43.428001403808594 2.51200008392334,43.428001403808594 C-2.2850000858306885,39.60200119018555 0.22499999403953552,31.857999801635742 6.348999977111816,31.59000015258789 C6.348999977111816,31.59000015258789 34.073001861572266,30.375 34.073001861572266,30.375 C34.073001861572266,30.375 43.79199981689453,4.316999912261963 43.79199981689453,4.316999912261963z">
                        </path>
                      </g>
                    </g>
                  </g>
                  <g clip-path="url(#__lottie_element_1448)" style="display: none;">
                    <g style="display: none;"></g>
                  </g>
                  <g style="display: none;">
                    <g>
                      <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path>
                    </g>
                  </g>
                  <g clip-path="url(#__lottie_element_1426)" style="display: none;"
                    transform="matrix(0.1301020085811615,0,0,0.1301020085811615,-14.050996780395508,-14.051002502441406)"
                    opacity="1">
                    <g style="display: block;" transform="matrix(1,0,0,1,500,500)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(250,206,21)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                    <g style="display: block;" transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,500,500)"
                      opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(255,184,2)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                    <g style="display: block;"
                      transform="matrix(-0.5,0.8660253882408142,-0.8660253882408142,-0.5,500,500)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(250,206,21)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                    <g style="display: block;" transform="matrix(-1,0,0,-1,500,500)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(255,184,2)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                    <g style="display: block;"
                      transform="matrix(-0.5,-0.8660253882408142,0.8660253882408142,-0.5,500,500)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(250,206,21)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                    <g style="display: block;" transform="matrix(0.5,-0.8660253882408142,0.8660253882408142,0.5,500,500)"
                      opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0.5,-324.5)">
                        <path fill="rgb(255,184,2)" fill-opacity="1"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                          stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0"
                          d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              style="color: white; font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif; font-weight: 500; text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px; font-size: 20px;">
              {{ videoInfo.starNum }}</div>
            <div class="forwardbutton" @click="forwardvideo(videoInfo.videoId)">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-5 0 105 99"
                width="99" height="99" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                <defs>
                  <clipPath id="__lottie_element_1508">
                    <rect width="99" height="99" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_1508)">
                  <g transform="matrix(0.6399999856948853,0,0,0.6399999856948853,49.20100021362305,52.65055847167969)"
                    opacity="1" style="display: block;">
                    <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                      <path fill="rgb(255,255,255)" fill-opacity="1"
                        d=" M0.8149999976158142,4.76200008392334 C0.8149999976158142,4.76200008392334 0.8149999976158142,-4.929999828338623 0.8149999976158142,-4.929999828338623 C0.8149999976158142,-4.929999828338623 -5.2179999351501465,-5.49399995803833 -9.244999885559082,-1.1749999523162842 C-13.272000312805176,3.1440000534057617 -13.517000198364258,11.817000389099121 -10.842000007629395,7.74399995803833 C-8.062000274658203,3.510999917984009 0.8149999976158142,4.76200008392334 0.8149999976158142,4.76200008392334z M10.514378547668457,2.995445728302002 C12.168766021728516,1.5337685346603394 12.21668815612793,-0.8918964862823486 10.621323585510254,-2.4177768230438232 C10.621323585510254,-2.4177768230438232 3.705676317214966,-9.032222747802734 3.705676317214966,-9.032222747802734 C2.110311985015869,-10.558103561401367 0.8149999976158142,-10.263825416564941 0.8149999976158142,-8.375499725341797 C0.8149999976158142,-8.375499725341797 0.8149999976158142,-4.953999996185303 0.8149999976158142,-4.953999996185303 C0.8240000009536743,1.8849999904632568 0.8149999976158142,1.0850000381469727 0.8149999976158142,1.0850000381469727 C0.8149999976158142,3.292600154876709 0.8149999976158142,6.536843776702881 0.8149999976158142,8.324999809265137 C0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 C0.8149999976158142,10.113155364990234 2.158234119415283,10.378231048583984 3.812621593475342,8.916553497314453 C3.812621593475342,8.916553497314453 10.514378547668457,2.995445728302002 10.514378547668457,2.995445728302002z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              style="color: white; font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif; font-weight: 500; text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px; font-size: 20px;">
              {{ videoInfo.shareNum }}</div>
          </div>
        </el-col>
        <!-- 会弹出的登录界面 -->
        <!-- <div class="disturb-login-panel"></div> -->
      </div>
    </div>
    <div class="slide-bar" :style="{ width: (test.fold ? '30%' : '0'), transition: '0.3s' }" v-if="test.fold">
      <div class="slide-bra-wrapper">

      </div>

      <div class="DZKZZklc">
        <button class="otZjcQr3" type="button" @click="changeFold">
          <svg width="32" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="RvwrvJd0" viewBox="0 0 32 48">
            <g filter="url(#arrow-left_svg__filter0_d_12_1532)" opacity="0.8">
              <path
                d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"
                fill="#fff"></path>
            </g>
          </svg>
        </button>
      </div>

      <div class="side-pane-top">
        <p style="letter-spacing: 5px;">评论</p>
        <div class="ALZRQqX4"></div>
        <div class="ALZRQqX5"></div>
      </div>
      <div class="commentlist" key="{{ comments.length }}">
        <div v-for="(comment, index) in comments" :key="index">
          <div class="comment-container">
            <el-row align="middle">
              <el-image :src="comment.user.headshot ? comment.user.headshot : require('../../assets/img.png')"
                class="comment-item-avatar" @click="routeToUser(comment.user.userId)"> </el-image>
              <p class="comment-item-username">{{ comment.user.username }}</p>
              <!-- <el-button
                style="margin-left: 40%;font-size: 14px;color:white;background-color: deeppink;border-color: hotpink; opacity: 0.8">关注</el-button> -->
            </el-row>
            <div class="commentbar">
              <div class="commentcontent">{{ comment.content }}</div>
              <div class="commenttime">--{{ formatMsgTime(comment.createTime) }}</div>
              <el-row class="commentlikeordisliebutton" align="middle">
                <div class="comment-like-button" @click="tolikecomment(comment.commentId, index)" v-if="comment.islike">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="UGHpJg4D"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 00-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 002.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 00.2-.318.84.84 0 00.063-.13.956.956 0 01.11-.214.835.835 0 00.074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 00.147-.29c.125-.444.21-.835.219-1.316a.82.82 0 00-.002-.067 5.39 5.39 0 00.002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 00-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 01-.121.721 1.9 1.9 0 00-.078.144 3.297 3.297 0 00-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 01-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 01-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 017.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 01-.185-.555 3.468 3.468 0 01-.1-.553.964.964 0 000-.104V8.42a3.56 3.56 0 01-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 001.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z"
                      fill="hotpink" fill-opacity="0.7" opacity="0.9"></path>
                  </svg>
                </div>
                <div class="comment-like-button" @click="tolikecomment(comment.commentId, index)" v-else>
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="UGHpJg4D"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 00-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 002.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 00.2-.318.84.84 0 00.063-.13.956.956 0 01.11-.214.835.835 0 00.074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 00.147-.29c.125-.444.21-.835.219-1.316a.82.82 0 00-.002-.067 5.39 5.39 0 00.002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 00-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 01-.121.721 1.9 1.9 0 00-.078.144 3.297 3.297 0 00-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 01-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 01-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 017.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 01-.185-.555 3.468 3.468 0 01-.1-.553.964.964 0 000-.104V8.42a3.56 3.56 0 01-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 001.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z"
                      fill="#fff" fill-opacity="0.7" opacity="0.9"></path>
                  </svg>
                </div>
                <div class="commentlikenum">{{ comment.likeNum }}</div>
                <div class="comment-dislike-button" @click="tohatecomment(comment.commentId, index)">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="UGHpJg4D"
                    viewBox="0 0 20 20">
                    <path
                      d="M15.58 8.58c0 .1 0 .21-.01.31v.13l-.01.06c-.04.44-.13.8-.27 1.22-.02.08-.06.15-.12.21h.01c-.04.07-.07.13-.1.19a.37.37 0 01-.05.11c-.07.11-.09.14-.13.23-.01.04-.03.07-.05.1-.67 1.09-1.71 2.14-2.56 2.91-.43.39-.83.72-1.12.97-.13.1-.25.19-.33.26l-.03.03-.11.08h-.01l-.01.02h-.01c-.1.11-.33.33-.67.41h-.01c-.09.04-.19.07-.29.08-.58.08-.95-.23-1.11-.37l-.03-.03c-.64-.45-1.27-.93-1.87-1.43-.98-.83-2.16-1.95-2.84-3.13-.14-.24-.26-.5-.36-.77-.11-.29-.2-.59-.25-.89h-.01v-.06l-.02-.14c-.29-2.05.92-4.16 2.92-4.45.15-.02.29-.03.43-.03.88 0 1.7.36 2.41.99.14.13.23.31.23.5l.02 1.29 1.3.96c.14.1.23.26.26.44.03.17-.01.35-.12.5l-.94 1.32.63 1.34c.07.17.08.35.02.51a.69.69 0 01-.35.38c-.16.08-.34.09-.51.03a.67.67 0 01-.38-.34l-.81-1.7a.702.702 0 01-.06-.35c.01-.12.05-.23.12-.33l.79-1.11-1.02-.76a.55.55 0 01-.2-.23.641.641 0 01-.08-.3l-.02-1.31c-.43-.32-.86-.47-1.28-.47-.08 0-.17 0-.25.02-1.07.15-1.98 1.39-1.77 2.92l.02.1v.02s.01.05.01.08c.03.14.09.36.18.59.09.26.19.46.24.55h.01c.57.98 1.6 1.98 2.55 2.79.54.45 1.09.87 1.66 1.28l.03.02c.07.06.16.12.2.15.03.03.06.05.09.07.03-.01.07-.02.11-.03l.09-.09c.05-.04.13-.11.2-.16l.02-.02.03-.03.32-.26c.36-.29.72-.6 1.07-.91.81-.74 1.72-1.67 2.29-2.58.06-.13.11-.23.19-.36.03-.06.06-.13.09-.19.02-.04.05-.09.09-.14.09-.31.14-.53.17-.78v-.2c.12-1.49-.85-2.63-1.89-2.7h-.12c-.57 0-1.19.26-1.49.68-.05.07-.11.14-.19.18a.55.55 0 01-.25.1c-.09.02-.18.02-.27 0a.545.545 0 01-.24-.12.54.54 0 01-.18-.19.825.825 0 01-.1-.26.576.576 0 01.02-.26c.02-.09.06-.17.11-.24.6-.84 1.67-1.25 2.59-1.25.08 0 .15 0 .22.01 1.87.12 3.16 1.92 3.16 3.83z"
                      fill="#fff" fill-opacity="0.5"></path>
                  </svg>
                </div>
              </el-row>
            </div>
          </div>

        </div>
      </div>

      <div class="addCommentBar">
        <div class="pOcGUDMb" contenteditable="true">
          <textarea v-model="userinputcomment" placeholder="留下你的精彩评论吧"></textarea>
        </div>
        <div class="ZYKj4kJN">
          <div class="XAze1wis">
            <svg @click="clearinput" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"
              viewBox="-8 0 36 18" :style="{ cursor: (userinputcomment ? 'pointer' : 'no-drop') }">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.448 17.448a1.886 1.886 0 01-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 11.552 14.78L6.332 9 .552 3.22A1.886 1.886 0 113.22.552L9 6.332l5.78-5.78a1.886 1.886 0 112.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 010 2.668z"
                fill="white" fill-opacity="0.9"></path>
            </svg>
            <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M27 18a9 9 0 11-18 0 9 9 0 0118 0zm-9 11c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-2-13.5c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2zm5.5 2c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2zM18 22.03c-1.657 0-3-.96-3-2.143 0-1.183 6-1.183 6 0 0 1.184-1.343 2.143-3 2.143z"
                fill="white" fill-opacity="0.9"></path>
            </svg>
            <!-- <Emoji @chooseEmojiDefault="chooseEmojiDefault"></Emoji> -->
            <span class="OGIa7O6a" @click="addcomment(currentUserId, videoInfo.videoId)"
              :style="{ cursor: (userinputcomment ? 'pointer' : 'no-drop') }">
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.5 30C23.851 30 29 24.851 29 18.5S23.851 7 17.5 7 6 12.149 6 18.5 11.149 30 17.5 30zm-5.16-13.883a1.16 1.16 0 001.64 1.64l2.395-2.394v8.838a1.16 1.16 0 002.321 0v-8.839l1.028 1.028 1.368 1.368a1.16 1.16 0 001.64-1.641l-4.219-4.22a1.382 1.382 0 00-1.954 0l-4.22 4.22z"
                  fill="white" fill-opacity="0.4"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.main {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color:  rgb(0, 0, 0);
  background-size: 100% 100%;
}


.videoFullShow::before{
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: linear-gradient(to left, rgb(54, 52, 52, 0.9), rgba(57, 56, 56, 0.8)), url("@/assets/back.png");
  /* background-image: linear-gradient(to left, rgb(54, 52, 52, 0.9), rgba(57, 56, 56, 0.8)), url("http://s3604nf5a.hn-bkt.clouddn.com/BV12j411e7pm.jpg"); */
  filter: blur(20px);
  background-size: 100% 100%;
  /*z-index: -1;*/
}

.videoFullShow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-bar {
  color: white;
  height: 100%;
}

.slide-bra-wrapper {
  position: fixed;
  top: 0;
  width: inherit;
  height: inherit;
  background: rgb(30, 30, 30);
  border: .5px solid hsla(0, 0%, 100%, .15);
}

.DZKZZklc {
  display: inline-block;
  border: 0;
  position: fixed;
  left: 30%;
  top: 50%;
  transform: translateY(-50%);
  transition: all .3s linear;
  z-index: 12;
}

.otZjcQr3 {
  align-items: center;
  border: 0;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: space-around;
  transform-origin: right;
  transition: all .3s linear;
  width: 32px;
  background-color: rgba(173, 36, 118, 0.284);
}

.otZjcQr3 .RvwrvJd0 {
  left: 30%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.commentlist {
  padding: 0 7px 80px 16px;
  -ms-overflow-style: none;
  overflow: hidden scroll;
  scrollbar-width: none;
  outline: none;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  top: 0px;
  /* bottom: 100px; */
  /* margin-top: 10px; */
}

.comment-container {
  background-color: rgb(30, 30, 30);
  /* 背景颜色 */
  border-radius: 15px;
  /* 圆角半径 */
  padding: 10px;
  /* 内边距，用于放置文本 */
  border: .5px solid hsla(0, 0%, 100%, .15);
  margin: 15px 0;
}

.comment-item-avatar {
  cursor:pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-item-username {
  color: lightgrey;
  margin-left: 3%;
  font-size: 15px;
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
}

.commentbar {
  margin-top: -15px;
  margin-left: 11%;
}

.commentcontent {
  margin: 10px 0;
  font-size: 18px;
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  text-shadow: 0.5px 0.5px 1px rgb(117, 116, 116);
}

.commenttime {
  margin: 10px 0;
  font-size: 13px;
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  color: rgb(117, 116, 116);
  /* text-shadow: 1px 1px 1px rgb(117, 116, 116); */
}

.commentlikeordisliebutton {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.comment-like-button {
  cursor: pointer;
}

.commentlikenum {
  margin-left: 3px;
  margin-bottom: 3.5px;
  color: lightgrey;
  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
  font-weight: 500;
  text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
  font-size: 13px;
}

.comment-dislike-button {
  cursor: pointer;
  margin-left: 10px;
}

.addCommentBar {
  /* background-color: hsla(0,0%,100%,.2); */
  align-items: center;
  background: #3d3f44;
  border-radius: 4px;
  display: flex;
  /* justify-content: center; */
  /* min-height: 44px; */
  width: 30%;
  text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
  position: fixed;
  bottom: 0;
  left: 0;
}

.addCommentBar .pOcGUDMb {
  flex: 1 1;
  flex-grow: 1;
  max-height: 300px;
  /* overflow: hidden; */
  padding-left: 12px;
  /* width: 0; */
}

textarea {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 5px;
  width: 350px;
  font-size: 14px;
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  resize: none;
  overflow-y: hidden;
}

/* input:focus {
  border-color: #eaeef1;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(11, 12, 12, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(19, 20, 20, 0.6)
} */


.side-pane-top {
  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
  font-weight: 500;
  color: white;
  margin-left: 5%;
  font-size: 25px;
  width: 100%;
  display: block;
  top: 0px;
  position: relative;
}

.ALZRQqX4 {
  width: 50px;
  height: 3px;
  min-height: 3px;
  opacity: .8;
  z-index: 13;
  background-color: mediumvioletred;
  display: block;
}

.ALZRQqX5 {
  width: calc(100%);
  height: 1px;
  min-height: 1px;
  opacity: .06;
  z-index: 12;
  background-color: #fff;
  display: block;
  position: relative;
  left: -32px;
}

.ZCHTRJzJ {
  cursor: pointer;
  height: 64px;
  left: 31%;
  position: fixed;
  top: 15px;
  width: 64px;
  z-index: 1000;
}

.ZCHTRJzJ .bFdMjgdW {
  background-color: rgba(0, 0, 0, .18);
  border: .5px solid hsla(0, 0%, 100%, .15);
  border-radius: 32px;
  height: 64px;
  width: 64px;
}

.ZCHTRJzJ .mcc8KhCO {
  height: 18px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
}

.xslide {
  position: fixed;
  right: 0;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.switch {
  width: 35px;
  height: 100px;
  background-color: rgba(0, 0, 0, .18);
  border: 1px solid hsla(0, 0%, 100%, .15);
  border-radius: 32px;
  box-sizing: content-box;
  text-align: center;
  cursor: pointer;
}

.switch-prev {
  position: relative;
  top: 20%;
}

.switch-next {
  position: relative;
  top: 30%;
}

.button-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headImage {
  height: 100px;
  width: 100px;
}

.PbpHcHqa {
  border-radius: 50%;
  vertical-align: bottom;
  cursor: pointer;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  top: 120px;
}

.NRiH5zYV {
  transition: transform .35s cubic-bezier(.34, .69, .1, 1);
  width: 35%;
  height: 35%;
  border-radius: 50%;
  vertical-align: bottom;
  cursor: pointer;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 80px;
}

.likebutton {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.commentbutton {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.starbutton {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.forwardbutton {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.videodetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.videoinfodetail {
  position: fixed;
  left: 0;
  bottom: 95px;
  padding: 16px 95px 16px 16px;
  width: 100%;
  height: 10%;
}

.xgplayer-setting-label{
  white-space: normal;
  user-select: none;
  visibility: visible;
  pointer-events: auto;
  fill: #fff;
  color: hsla(0,0%,100%,1);
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  align-items: center;
  display:flex;
  transform: none;
  margin-top:7px;
}

.xg-switch{
  white-space: normal;
  visibility: visible;
  pointer-events: auto;
  fill: #fff;
  font: inherit;
  font-feature-settings: "tnum";
  /* background-color: rgba(229,229,234,.9); */
  /* background-color: hotpink; */
  border: 1px solid transparent;
  border-radius: 50px;
  box-sizing: border-box;
  color: rgba(229,229,234,.9);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 18px;
  list-style: none;
  margin: 0 0 0 2px;
  outline: none;
  padding: 0;
  position: relative;
  transition: all .36s;
  user-select: none;
  vertical-align: top;
  margin-right: 0;
  height: 20px;
  width: 35px;
}

.xg-switch ::after{
  height: 15px;
  width: 15px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0,35,11,.2);
  box-sizing: border-box;
  content: " ";
  cursor: pointer;
  left: 3px;
  position: absolute;
  top: 2px;
  -webkit-transition: all .36s cubic-bezier(.78,.14,.15,.86);
  transition: all .36s cubic-bezier(.78,.14,.15,.86);
}

.xgplayer-setting-title{
    white-space: normal;
    user-select: none;
    visibility: visible;
    fill: #fff;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    border: 0;
    font: inherit;
    vertical-align: top;
    font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
    font-weight: 500;
    color: #e4e4e6;
    font-size: 18px;
    line-height: 22px;
    margin-left: 4px;
    opacity: 1;
    width: auto;
}

.account {
  color: white;
  /* width: 15%; */
  /* height: 50%; */
  /* text-align: center; */
  display: flex;
  /**/
  justify-content: center;
  /*水平居中*/
  align-items: Center;
  /*垂直居中*/
}

.account-name {
  font-size: 22px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
  font-weight: 500;
}

.video-create-time {
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  font-size: 14px;
  color: rgb(117, 116, 116);
  padding-top: 6px;
  padding-left: 5px;
}

.title {
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  font-size: 17px;
  color: white;
  cursor: auto;
  margin-top: 15px;
  margin-bottom: 5px;
  /* pointer-events: auto; */
}

.tag-span {
  margin-left: 2px;
  margin-right: 2px;
}

/* 设置视频的样式 */
.video {
  /*flex: 1; !* 视频占据剩余的可用空间 *!*/
  /*max-width: 90%; !* 可根据需要调整视频的宽度 *!*/
  width: 100%;
  height: 650px;
}
</style>
<script setup>
// import sidePane from '../../components/side-pane.vue';
import { router } from '@/router';
// import { ref } from 'vue'
import { Delete, Star, Search, Share, StarFilled, Comment, Upload, ArrowUpBold, ArrowDownBold } from '@element-plus/icons-vue'
import { onMounted, onUnmounted, onUpdated, computed, reactive, ref, toRaw } from "vue";
import request from '@/api';
import { useThrottledRefHistory } from '@vueuse/core';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import clipboard from 'clipboard';

const qiniu = require('qiniu-js');

// const key = "IMG_0089.JPG"
// const domain = 'http://s3pdkrdb8.hd-bkt.clouddn.com'

// qiniu.imageInfo(key, domain).then(res => {
//   console.log(res)
// })


const videos = JSON.parse(localStorage.getItem('videos'))
console.log('当前所有视频列表', videos)

// const imgLink = ref('http://s3604nf5a.hn-bkt.clouddn.com'+key)

// function changeBackgroud(filename) {
//   const key = filename.substring(0, filename.indexOf('.')) + '.jpg'
//   const domain = 'http://s3604nf5a.hn-bkt.clouddn.com'
//   imgLink = qiniu.imageMogr2({
//   //  "auto-orient": true,      // 布尔值，是否根据原图EXIF信息自动旋正，便于后续处理，建议放在首位。
//   //  strip: true,              // 布尔值，是否去除图片中的元信息
//   //  thumbnail: '1000x1000',   // 缩放操作参数
//   //  crop: '!300x400a10a10',   // 裁剪操作参数
//   //  gravity: 'NorthWest',     // 裁剪锚点参数
//   //  quality: 20,              // 图片质量，取值范围1-100
//    rotate: 20,               // 旋转角度，取值范围1-360，缺省为不旋转。
//    format: 'jpg',            // 新图的输出格式，取值范围：jpg，gif，png，webp等
//    blur: '100x100'               // 高斯模糊参数
//  }, key, domain)
//  console.log(imgLink)
// }


function routeToUser(userId) {
  router.push("/userpage/" + userId)
  store.commit("setSearchId", userId)
}

const store = useStore();
const route = useRoute();

const currentUserId = localStorage.getItem("currentUserId")

// onwheel = (event) => {
//   // 取消默认动作，从而避免处理两次。
//   event.preventDefault();

//   const scrolldirection = event.deltaY
//   console.log('9uji',scrolldirection)
//   if(scrolldirection < 0 && route.params.index > 0) {
//     switchPreVideo(route.params.index)
//   }
//   else if(scrolldirection > 0 && route.params.index < videos.length - 1) {
//     switchNextVideo(route.params.index)
//   }
// };

window.addEventListener(
  "keydown",
  function (event) {
    //可以获取每个按键的名字
    // let str = "KeyboardEvent: key='" + event.key + "' | code='" + event.code + "'";
    // console.log(str)

    if (event.defaultPrevented) {
      return; // 如果事件已经在进行中，则不做任何事。
    }

    switch (event.key) {
      case "ArrowUp":
        if (route.params.index > 0) {
          switchPreVideo(route.params.index)
        }
        break;
      case "ArrowDown":
        if (route.params.index < videos.length - 1) {
          switchNextVideo(route.params.index)
        }
        break;
      default:
        return; // 什么都没按就退出吧。
    }

    // 取消默认动作，从而避免处理两次。
    event.preventDefault();
  },
  true,
);

function backTOHome() {
  router.push('/homepage')
}
var videoInfo = ref({})

var userInfo = ref({
  userId: -1,
  headshot: '',
  username: "用户不存在"
})

var taglist = ref([])

//更新视频用户的信息
async function getuser(userId) {
  const p = {
    userId: userId
  }
  // console.log(p)
  await request
    .get("/user/findUserUpdatHeadShot", { params: p })
    .then(res => {
      // console.log(res)
      if (res.data.code != 1)
        userInfo.value = res.data.data
    })
    .catch(err => {
      console.log(err)
    })
  // console.log(toRaw(userInfo.value))
  isFollow(currentUserId, toRaw(userInfo.value).userId)
  isStar(currentUserId, toRaw(videoInfo.value).videoId)
}

function gettagrecord(videoId) {
  const p = {
    videoId: videoId
  }
  request
    .get("/tagrecord/findTagrecord", { params: p })
    .then(res => {
      // console.log(res)
      if (res.data.code != 1) {
        var tagrecords = res.data.data
        for (let i = 0; i < tagrecords.length; i++) {
          gettags(tagrecords[i].tagId)
        }

      }
    })
    .catch(err => {
      console.log(err)
    })
}

function gettags(tagid) {
  const p = {
    tagId: tagid
  }
  taglist.value = []
  request
    .get("/tag/findtagbyid", { params: p })
    .then(res => {
      // console.log(res)
      taglist.value.push(res.data.data)
    })
    .catch(err => {
      videoId
      console.log(err)
    })
}



async function getvideo(videoId) {
  const p = {
    videoId: videoId
  }
  await request
    .get("/video/findVideos", { params: p })
    .then(res => {
      // console.log(res.data.data.videoPath);
      videoInfo.value = res.data.data;
    })
    .catch(err => {
      console.log(err)
    });
  // console.log(toRaw(videoInfo))
  getuser(toRaw(videoInfo.value).userId)
  gettagrecord(toRaw(videoInfo.value).videoId)
  getvideocomments(toRaw(videoInfo.value).videoId)
  addHistory(currentUserId, toRaw(videoInfo.value).videoId)
  // changeBackgroud(toRaw(videoInfo.value).introduction)
  // const filename = toRaw(videoInfo.value).introduction
  // const key = filename.substring(0, filename.indexOf('.')) + '.jpg'
  // const imgLink = ref("s3604nf5a.hn-bkt.clouddn.com/"+key)
  // console.log(imgLink)
}
getvideo(route.params.videoid)

function addHistory(userId, videoId) {
  if(userId != null) {
    // 获取当前时间
    const now = new Date();
    // 格式化时间
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const currentTime = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}:${second >= 10 ? second : '0' + second}`;
    // console.log(currentTime)

    let requestData = new FormData();
    requestData.append('userId', userId)
    requestData.append('videoId', videoId)
    requestData.append('watchTime', currentTime)

    request
    .post("/history/add", requestData)
    .then(res => {
      if(res.data.code == 0)
        console.log("已添加一条历史记录")
    })
    .catch(err => {
      console.log(err)
    })
  }
  
}

const relation = reactive({
  nofollow: true,
  nohate: true
})

function isFollow(currentUserId, videoUserId) {
  if(currentUserId != null) {
    const p = {
      userid1: currentUserId,
      userid2: videoUserId,
    }
    request
      .get("/relation/findRelation", { params: p })
      .then(res => {
        if (res.data.code == 1 || res.data.code == 2) {
          console.log(p)
          console.log(res.data.msg)
        }
        else {
          if (res.data.code == 3) {
            if (currentUserId == videoUserId)
              relation.nofollow = false
          }
          else {
            const relationdata = res.data.data
            if (relationdata.relation.kind == 0)
              relation.nofollow = false
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function addFollow(currentUserId, videoUserId) {
  if(currentUserId == null) {
    alert("请登录！")
    router.push("/signin")
  }
  else {
    let requestData = new FormData();
    requestData.append('userid1', currentUserId)
    requestData.append('userid2', videoUserId)
    requestData.append('kind', 0)
    request
      .post("/relation/addRelation", requestData)
      .then(res => {
        if (res.data.code == 1)
          console.log(res.data.msg)
        else {
          const relationdata = res.data.data
          // console.log(relationdata)
          if (relationdata.relation.kind == 0)
            relation.nofollow = false
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  
}

const test = reactive({
  fold: false
})
const changeFold = () => {
  test.fold = !test.fold
  // console.log(test.fold)
}

async function switchPreVideo(index) {
  await router.push("/videopage/" + videos[parseInt(index) - 1].videoId + '/' + (parseInt(index) - 1));
  test.fold = false
  relation.nofollow = true
  getvideo(route.params.videoid)
}

async function switchNextVideo(index) {
  await router.push("/videopage/" + videos[parseInt(index) + 1].videoId + '/' + (parseInt(index) + 1));
  test.fold = false
  relation.nofollow = true
  getvideo(route.params.videoid)
}

function likevideo(videoId) {
  const button1 = document.getElementById('likebuttoncolor')
  button1.style.fill = 'rgb(255,0,0)'
  //相当于预处理一下，每次等后端返回页面更新的太慢
  videoInfo.value.likeNum += 1
  let requestData = new FormData();
  requestData.append('videoId', videoId)
  request
    .post("/video/addLikeNum", requestData)
    .then(res => {
      videoInfo.value.likeNum = res.data.data.likeNum
    })
    .catch(err => {
      console.log(err)
    })
}

function starbuttoncolor(flag) {
  if (flag == 0) {
    const button1 = document.getElementById('starbuttoncolor')
    const button2 = document.getElementById('starbuttonbordercolor')
    button1.style.fill = "rgb(255,255,0)"
    button2.style.fill = "rgb(255,255,0)"
  }
  else {
    const button1 = document.getElementById('starbuttoncolor')
    const button2 = document.getElementById('starbuttonbordercolor')
    button1.style.fill = "rgb(255,255,255)"
    button2.style.fill = "rgb(255,255,255)"
  }
}

async function isStar(userId, videoId) {
  if(userId != null) {
    let starRes = {}
  let requestData = new FormData();
  requestData.append('userId', userId)
  requestData.append('videoId', videoId)
  await request
    .post("/star/isStar", requestData)
    .then(res => {
      // console.log(res)
      starbuttoncolor(res.data.code)
      starRes = res.data
    })
    .catch(err => {
      console.log(err)
    })
  return starRes;
  }
  else return null
}

async function starvideo(userId, videoId) {
  let starRes = await isStar(userId, videoId);
  if(starRes == null) {
    alert("请登录！")
    router.push("/signin")
  }
  else {
    let requestData = new FormData();
    requestData.append('userId', userId)
    requestData.append('videoId', videoId)
    // 已收藏，再点击则为取消收藏
    if (starRes.code == 0) {
      videoInfo.value.starNum -= 1
      starbuttoncolor(1)
      let requestData1 = new FormData();
      requestData1.append('starId', starRes.data.star.starId)
      request
        .post("/star/delete", requestData1)
        .then(res => {
          if (res.data.code == 0) {
            starbuttoncolor(res.data.code != 0 ? 0 : 1)
            request
              .post("/video/subStarNum", requestData)
              .then(res => {
                if (res.data.code == 0)
                  videoInfo.value.starNum = res.data.data.starNum
                else
                  console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
    // 未收藏，再点击则是添加收藏
    else {
      videoInfo.value.starNum += 1
      starbuttoncolor(0)
      request
        .post("/star/add", requestData)
        .then(res => {
          if (res.data.code == 0) {
            starbuttoncolor(res.data.code)
            request
              .post("/video/addStarNum", requestData)
              .then(res => {
                if (res.data.code == 0)
                  videoInfo.value.starNum = res.data.data.starNum
                else
                  console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  
}

function forwardvideo(videoId) {
  const currenturl = window.location.href
  navigator.clipboard.writeText(currenturl);
  alert("转发链接已复制到剪切板!\n" + currenturl)
  videoInfo.value.shareNum += 1
  let requestData = new FormData();
  requestData.append('videoId', videoId)
  request
    .post("/video/addShareNum", requestData)
    .then(res => {
      console.log(res)
      if (res.data.code == 0)
        videoInfo.value.shareNum = res.data.data.shareNum
      else
        console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

var comments = ref([])

function getvideocomments(videoId) {
  comments.value = []
  let requestData = new FormData();
  requestData.append('videoId', videoId)
  request
    .post("/comment/showAll", requestData)
    .then(res => {
      if (res.data.code == 0) {
        var commentList = res.data.data.comments
        for (let i = 0; i < commentList.length; i++) {
          comments.value.push(commentList[i])
          comments.value[i].islike = false
          const p = {
            userId: commentList[i].userId
          }
          console.log(p)
          request
            .get("/user/findUserUpdatHeadShot", { params: p })
            .then(res => {
              // console.log("找到评论用户:",res)
              if (res.data.code == 0)
                comments.value[i].user = res.data.data

            })
            .catch(err => {
              console.log(err)
            })
          console.log("当前视频所有评论:", toRaw(comments.value))
        }
      }
    })
    .catch(err => {
      console.log(err)
    })
}

function formatMsgTime(timestamp) {
  var dateTime = renderTime(timestamp)
  // console.log(dateTime)
  function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000)
  }
  // console.log(dateTime) // 将传进来的字符串或者毫秒转为标准时间
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
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 7) { // 大于一天小于十五天展示为天
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 7 && year === now.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  }
  return timeSpanStr
}

const tolikecomment = (commentId, commentidx) => {
  if (!comments.value[commentidx].islike) {
    likecomment(commentId, commentidx)
    comments.value[commentidx].islike = !comments.value[commentidx].islike
  }
}

const tohatecomment = (commentId, commentidx) => {
  if (comments.value[commentidx].islike) {
    dislikecomment(commentId, commentidx)
    comments.value[commentidx].islike = !comments.value[commentidx].islike
  }
}

function likecomment(commentId, commentidx) {
  let requestData = new FormData();
  requestData.append('commentId', commentId)
  requestData.append('likeNum', comments.value[commentidx].likeNum)
  comments.value[commentidx].likeNum += 1
  request
    .post("/comment/like", requestData)
    .then(res => {
      console.log("喜欢评论后的返回值", res)
      if (res.data.code != 0)
        comments.value[commentidx].likeNum -= 1
    })
    .catch(err => {
      console.log(err)
    })
}

function dislikecomment(commentId, commentidx) {
  let requestData = new FormData();
  requestData.append('commentId', commentId)
  requestData.append('likeNum', comments.value[commentidx].likeNum)
  comments.value[commentidx].likeNum -= 1
  request
    .post("/comment/dislike", requestData)
    .then(res => {
      console.log("不喜欢评论后的返回值", res)
      if (res.data.code != 0)
        comments.value[commentidx].likeNum += 1
    })
    .catch(err => {
      console.log(err)
    })
}

const userinputcomment = ref('')

async function finduser(userId) {
  let user = {}
  const p = {
    userId: userId
  }
  await request
    .get("/user/findUserUpdatHeadShot", { params: p })
    .then(res => {
      if (res.data.code != 1)
        user = res.data.data
    })
    .catch(err => {
      console.log(err)
    })
  return user
}

async function addcomment(userId, videoId) {
  console.log('进入添加评论')

  // 获取当前时间
  const now = new Date();
  // 格式化时间
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const currentTime = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}:${second >= 10 ? second : '0' + second}`;
  console.log(currentTime)

  const content = userinputcomment.value;
  console.log("评论内容", content)

  clearinput()

  let requestData = new FormData();
  requestData.append('userId', userId)
  requestData.append('videoId', videoId)
  requestData.append('createTime', currentTime)
  requestData.append('content', content)
  request
    .post("/comment/add", requestData)
    .then(res => {
      if (res.data.code == 0) {
        comments.value.push(res.data.data.comment)
        comments.value[comments.value.length - 1].islike = false
        comments.value[comments.value.length - 1].user = finduser(comments.value[comments.value.length - 1].userId)
        console.log(toRaw(comments.value))
      }
    })
    .catch(err => {
      console.log(err)
    })
}

const clearinput = () => {
  userinputcomment.value = ''
}

const whichvideo = reactive({
  isWater : false,
  old: videoInfo.value.videoPath,
  new: ''
})

function getWaterMarkVideo(videoId) {
  whichvideo.isWater = !whichvideo.isWater
  if(whichvideo.new.trim() != '') {
    if(whichvideo.isWater)
      videoInfo.value.videoPath = whichvideo.new
    else
      videoInfo.value.videoPath = whichvideo.old
  }
  else {
    let requestData = new FormData();
    requestData.append('videoId', videoId)
    request
    .post("/video/getWaterVideoUrl", requestData)
    .then(res => {
      console.log("获取成功",res)
      if(res.data.code == 0) {
        whichvideo.new = res.data.data
        videoInfo.value.videoPath = whichvideo.new
        whichvideo.isWater = true
      }
      else
        whichvideo.isWater = false
    })
    .catch(err => {
      console.log(err)
    })
  }
  
 
}

import Emoji from "@/components/emoji.vue";

</script>
