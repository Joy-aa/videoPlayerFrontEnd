<template>

  <div class="holly-main">
    <router-view></router-view>
    <div class="video-container">
      <div>
        <h2>分类视频页</h2>
        <p>接收的参数: {{ $route.params.category }}</p>
      </div>

        <div v-for="(video, index) in videos_remain" :key="index" @click="clickvideo"  :style="{ height: video.height + 80 + 'px' }" class="video-item_remain">
          <router-link :to="`/videopage/${video.id}`">
            <div class="video-content">
              <div class="video-info">
                <video class="video-wrapper" :src="video.src" :style="{ height: video.height + 'px' }" controls width="285"></video>
                <p style="margin-left: 5px;font-size: 15px;color: lightgrey">这里是视频简介</p>
                <el-row style="margin-left: 5px;margin-top: 3px">
                  <p style="font-size: 14px;color: lightgrey">@用户名</p>
                  <p style="margin-left: 20px;font-size: 14px;color: lightgrey">· 发布时间</p>
                </el-row>
                <el-row>
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
                  <p style="margin-top: 7px;font-size: 12px;color: grey">{{video.likeNums}}</p>
                  <div class="commentbutton" style="width: 30px;height: 30px">
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
                  <p style="margin-top: 7px;font-size: 12px;color: grey">{{video.commentNums}}</p>
                  <div class="starbutton" style="width: 30px;height: 30px">
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
                  <p style="margin-top: 7px;font-size: 12px;color: grey">{{video.starNums}}</p>
                </el-row>
              </div>
<!--              <div v-else class="video-info">-->
<!--                <el-row align="middle">-->
<!--                  <p style="margin-left:10px;font-size: 20px">@{{store.state.username}}</p>-->
<!--                </el-row>-->
<!--                <el-row align="middle" style="margin-top: 5px">-->
<!--                  <p style="margin-left:10px;">关注 {{followNums}} </p>-->
<!--                  <p style="margin-left: 35px">粉丝 {{fanNums}} </p>-->
<!--                  <p style="margin-left: 35px">获赞 {{likeNums}}</p>-->
<!--                </el-row>-->
<!--                <el-row align="middle" style="margin-top: 5px">-->
<!--                  <p style="margin-left:10px;">抖音号: {{userId}}</p>-->
<!--                  <el-icon class="female" style="color: deeppink; margin-left: 20px;"><Female /></el-icon>-->
<!--                  <p style="margin-left: 5px">{{userAge}}</p>-->
<!--                </el-row>-->
<!--                <el-row align="middle" style="margin-top: 5px">-->
<!--                  <p style="margin-left:10px;">很高兴认识你</p>-->
<!--                </el-row>-->
<!--              </div>-->
            </div>
          </router-link>
        </div>
    </div>

  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: flex-start;*/
  align-self: end;
  /*justify-content: space-between; !* 水平排列，四列 *!*/
  /*border-radius: 10%;*/
  /*margin: 0px; !* 为了填充每个video-item之间的空间，-8px 是 margin 的负值 *!*/
}

.video-item_remain {
  /*flex: 0 1 calc(25%); !* 四个一行，每个占 25% 的宽度，16px 是 margin 的值 *!*/
  /*margin: 0px;*/
  border-radius: 10%;
  /*margin-top: 20px;*/

}

.video-content {
  /*vertical-align: top;*/
  /*position: relative;*/
  /*horiz-align: center;*/
}
.video-info {
  /*position: absolute;*/
  /*top: 20px; !* 调整顶部距离 *!*/
  /*right: 20px; !* 调整右边距离 *!*/
  width: 285px; /* 调整矩形的宽度 */
  /*height: 560px; !* 调整矩形的高度 *!*/
  background-color: #475669; /* 背景颜色 */
  border-radius: 8px; /* 圆角半径 */
  /*padding: 10px; !* 内边距，用于放置文本 *!*/
  margin-right: 20px;
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

</style>
<script setup>

import $ from 'jquery'
import * as d3 from 'd3';
import {reactive, onMounted, onUpdated, ref, onUnmounted, watch, defineExpose} from "vue";
import { Female, Edit, Search, Share, Upload } from '@element-plus/icons-vue';
import {useRoute, useRouter} from 'vue-router'
import { useStore } from 'vuex';
import '@fortawesome/fontawesome-free/css/all.css'
import request from "@/api";

const router = useRouter()
const route = useRoute()
const store = useStore();
const activeMenu = ref('/');

const video_category_group = ref({
  category: 1,
  videos: ""
})
const followNums = 10
const fanNums = 10
const likeNums = 10
const userId = 1011
const userAge = 23

const clickvideo = (index) => {
  activeMenu.value = index;
  router.go(index);
  console.log(index)
};

//周期函数
onUpdated(() => {
  //打印父组件传递的值
  video_category_group.value.category = route.params.category
  get_videos_of_category()
  console.log('当前页面类别' + video_category_group.value.category)
})

const videos_remain = [
  { id: 1, height: Math.floor(Math.random()*200) + 280, src: "http://s318q0lql.hn-bkt.clouddn.com/BV12B4y1R7Fs.mp4?e=1698819258&token=KjTkrg-s8FgPQ9VobTqkXGEa_UJArb6iU4h6kHKN:2oEVD3a18j_CxAXQCFaKNYrO02Q=", type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 2, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 3, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 4, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 5, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 6, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 7, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 8, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 9, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 10, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 11, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  { id: 12, height: Math.floor(Math.random()*200) + 280, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', likeNums: 1, commentNums: 1, starNums: 1 },
  // 添加更多视频数据...
];

async function get_videos_of_category() {
  console.log("进入函数体" + video_category_group.value.category)
  await request
      .get("/tagrecord/findVideoByTag", {params: video_category_group.value.category})
      .then(res => {
        // console.log(res)
        video_category_group.value.videos = res.data.data
        console.log("xxxxxxxxxxxxx")
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
}

</script>

<style scoped>
@import "./style.css";
/*@import "./all.css";*/

.holly-main{
}

.bd-footer a {
  font-weight: 600;
  color: #495057;
}
.bd-footer-links li {
  display: inline-block;
}

.banner.lite .banner-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 45px;
}
.banner.lite .banner-title-text {
  margin: 0;
  font-size: 42px;
  letter-spacing: 3px;
  line-height: 1.5;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #c6c2d3;
  font-weight: 350;
}
.banner.lite .banner-main {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 350px;
  -webkit-box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
}
.banner.lite .banner-main-nav {
  background: #f8f9fb no-repeat bottom/100%;
  background-position: 0 3px;
  width: 300px;
  padding: 42px 40px 40px;
}
.banner.lite .banner-main-nav_title {
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 32px;
  margin-bottom: 30px;
  font-weight: 500;
}
.banner.lite .banner-main-nav > ul > li {
  cursor: pointer;
  margin-bottom: 28px;
  position: relative;
}
.banner.lite .banner-main-nav > ul > li,
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item {
  font-size: 16px;
  line-height: 22px;
  vertical-align: middle;
}
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item:hover {
  color: #036fe2;
}
.banner.lite .banner-main-nav > ul > li .icon {
  font-size: 16px;
  margin-left: 8px;
}
.banner.lite .banner-main-nav > ul > li .img-icon-wrap {
  margin-left: 8px;
  overflow: hidden;
  height: 22px;
  width: 22px;
}
.banner.lite .banner-main-nav > ul > li .img-icon {
  position: relative;
  left: -80px;
  height: 22px;
  width: 22px;
  /*-webkit-filter: drop-shadow(#000 80px 0);*/
  /*filter: drop-shadow(#000 80px 0);*/
}
.banner.lite .banner-main-nav > ul > li:before {
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  background: #d8d8d8;
  border-radius: 50%;
  margin-right: 10px;
}
.banner.lite .banner-main-nav > ul > li:after {
  content: '';
  display: block;
  width: 0;
  height: 42px;
  border: 1px dashed #d8d8d8;
  position: absolute;
  left: 2px;
  top: 16px;
}
.banner.lite .banner-main-nav > ul > li:last-child:after {
  display: none;
}
.banner.lite .banner-main-swiper {
  width: 100%;
  height: 350px;
  /*overflow: hidden;*/
  position: relative;
}
.banner.lite .slide {
  width: 900px;
  height: 350px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.banner.lite .lite-swiper-pagination {
  position: absolute;
  bottom: 86px;
  text-align: center;
  width: 100%;
  height: 19px;
  z-index: 10;
}
.modeltype.lite .modeltype-item {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  /* flex-grow: 1; */
  width: 382px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.modeltype.lite .modeltype-item:hover {
  border: 1px solid #036fe2;
  -webkit-box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
}

.modeltype.lite .modeltype-title > i {
  font-size: 12px;
  padding-left: 10px;
}

.modeltype.lite .modeltype-type > span {
  display: inline-block;
  height: 24px;
  padding: 0 12px;
  margin-right: 10px;
  margin-bottom: 6px;
  background: #f5f5f5;
}

:root {
  --swiper-theme-color: #007aff;
}

body,
html {
  height: 100%;
  width: 100%;
  /* min-width: 1200px; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
  sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
body,
html {
  padding: 0;
  margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
img {
  width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.modal_section .section-title_container {
  padding-bottom: 30px;
}
.common-container .section {
  width: 1180px;
}
</style>

