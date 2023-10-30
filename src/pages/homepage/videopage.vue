<template>
  <div class="videoFullShow">
    <div class="ZCHTRJzJ isDark" @click="backTOHome">
      <div class="bFdMjgdW"></div>
      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mcc8KhCO" viewBox="0 0 18 18">
      <path d="M17.448 17.448a1.886 1.886 0 01-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 11.552 14.78L6.332 9 .552 3.22A1.886 1.886 0 113.22.552L9 6.332l5.78-5.78a1.886 1.886 0 112.668 
      2.668L11.668 9l5.78 5.78a1.886 1.886 0 010 2.668z" fill="#fff"></path>
      </svg>
    </div>
    <div  class="container">
      <el-row align="bottom">
        <el-col :span="22">
          <div>

            <div>
              <video class="videodetail" width="90%" :src="getvideo().src" controls></video>
            </div>

            <div>
              <el-row align="middle">
                <p style="display: inline;font-size: 15px">
                  @这里是用户名
                </p>
                <p style="display: inline;font-size: 15px;margin-left: 40px">
                  ·
                </p>
                <p style="display: inline;font-size: 5px;margin-left: 15px">
                  这里是发布时间
                </p>
              </el-row>

              <p>
                这里是视频简介
              </p>
            </div>

          </div>
        </el-col>

        <el-col :span="2">
          <div class="switch-prev">
            <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
              <g filter="url(#newAbove_svg__filter0_d_1651_162618)">
                <path d="M7.269 16.316a1.393 1.393 0 010-1.97l5.056-5.055a1.393 1.393 0 011.97 0l.011.011 5.045 5.045a1.393 1.393 0 11-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 01-1.97 0z" fill="#fff">

                </path>
              </g>
            </svg>
            <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
                  <g filter="url(#newBelow_svg__filter0_d_1646_162559)">
                    <path d="M7.269 9.29a1.393 1.393 0 000 1.97l5.056 5.056a1.393 1.393 0 001.97 0l.011-.011 5.045-5.045a1.393 1.393 0 10-1.97-1.97l-4.071 4.072L9.239 9.29a1.393 1.393 0 00-1.97 0z" fill="#fff"></path>
                  </g>
                </svg>
            <!-- <el-col class="button-group" align="right"> -->
              <!-- <el-button class="upbutton" :icon="ArrowUpBold" >上一个</el-button>
              <el-button class="downbutton" :icon="ArrowDownBold" >下一个</el-button> -->
              <!-- <img src="../../assets/img.png" style="display: inline;width: 60px;height: 60px" alt="图片">
              <el-button class="likebutton" :icon="Star" >点赞</el-button>
              <el-button class="commentbutton" :icon="Comment" >评论</el-button>
              <el-button class="collectbutton" :icon="StarFilled" >收藏</el-button>
              <el-button class="transmitbutton" :icon="Share" >转发</el-button> -->
            <!-- </el-col> -->
          </div>
          <div class="likebutton">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 94" width="90" height="94" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs>
                      <clipPath id="__lottie_element_1328"><rect width="90" height="94" x="0" y="0"></rect></clipPath>
                      <clipPath id="__lottie_element_1330"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1334"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1338"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1345"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1352"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1362"><path d="M0,0 L168,0 L168,168 L0,168z"></path></clipPath>
                      <clipPath id="__lottie_element_1366"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1370"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1377"><path d="M0,0 L1200,0 L1200,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1384"><path d="M0,0 L1200,0 L1200,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1394"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                    </defs>
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
          <div class="commentbutton">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 99" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs><clipPath id="__lottie_element_1416"><rect width="99" height="99" x="0" y="0"></rect></clipPath></defs>
                    <g clip-path="url(#__lottie_element_1416)"><g transform="matrix(0.6600000262260437,0,0,0.6600000262260437,76.25495910644531,52.904117584228516)" opacity="1" style="display: block;">
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
          <div class="starbutton">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="100" height="100" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs><clipPath id="__lottie_element_1421"><rect width="100" height="100" x="0" y="0"></rect></clipPath>
                      <clipPath id="__lottie_element_1426"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1448"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1455"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1462"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1469"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1482"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1495"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                    </defs>
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
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 99" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                        <defs><clipPath id="__lottie_element_1508"><rect width="99" height="99" x="0" y="0"></rect></clipPath></defs>
                        <g clip-path="url(#__lottie_element_1508)"><g transform="matrix(0.6399999856948853,0,0,0.6399999856948853,49.20100021362305,52.65055847167969)" opacity="1" style="display: block;">
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path fill="rgb(255,255,255)" fill-opacity="1" d=" M0.8149999976158142,4.76200008392334 C0.8149999976158142,4.76200008392334 0.8149999976158142,-4.929999828338623 0.8149999976158142,-4.929999828338623 C0.8149999976158142,-4.929999828338623 -5.2179999351501465,-5.49399995803833 -9.244999885559082,-1.1749999523162842 C-13.272000312805176,3.1440000534057617 -13.517000198364258,11.817000389099121 -10.842000007629395,7.74399995803833 C-8.062000274658203,3.510999917984009 0.8149999976158142,4.76200008392334 0.8149999976158142,4.76200008392334z M10.514378547668457,2.995445728302002 C12.168766021728516,1.5337685346603394 12.21668815612793,-0.8918964862823486 10.621323585510254,-2.4177768230438232 C10.621323585510254,-2.4177768230438232 3.705676317214966,-9.032222747802734 3.705676317214966,-9.032222747802734 C2.110311985015869,-10.558103561401367 0.8149999976158142,-10.263825416564941 0.8149999976158142,-8.375499725341797 C0.8149999976158142,-8.375499725341797 0.8149999976158142,-4.953999996185303 0.8149999976158142,-4.953999996185303 C0.8240000009536743,1.8849999904632568 0.8149999976158142,1.0850000381469727 0.8149999976158142,1.0850000381469727 C0.8149999976158142,3.292600154876709 0.8149999976158142,6.536843776702881 0.8149999976158142,8.324999809265137 C0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 C0.8149999976158142,10.113155364990234 2.158234119415283,10.378231048583984 3.812621593475342,8.916553497314453 C3.812621593475342,8.916553497314453 10.514378547668457,2.995445728302002 10.514378547668457,2.995445728302002z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
          </div>
        </el-col>
      </el-row>
      <div class="L1TH4HdO immersive-player-switch-on-hide-interaction-area d6KxRih3 positionBox hideChangeVideo newMiniAvatar newMiniFontSize newMiniSpacing newMiniIcon" style="height: auto; bottom: 60px;">
        <!-- 向上向下箭头 -->
        <!-- <div class="xgplayer-playswitch JHxtTxhQ filter-bg" data-state="normal">
          <div class="xgplayer-icon">
            <div class="xgplayer-playswitch-tab">
              <div data-e2e="video-switch-prev-arrow" class="xgplayer-playswitch-prev disabled">
                <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
                  <g filter="url(#newAbove_svg__filter0_d_1651_162618)">
                    <path d="M7.269 16.316a1.393 1.393 0 010-1.97l5.056-5.055a1.393 1.393 0 011.97 0l.011.011 5.045 5.045a1.393 1.393 0 11-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 01-1.97 0z" fill="#fff">

                    </path>
                  </g>
                  <defs><filter id="newAbove_svg__filter0_d_1651_162618" x="5.861" y="8.883" width="14.898" height="9.842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix">

                    </feFlood>
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1651_162618"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1651_162618" result="shape"></feBlend>
                  </filter></defs>
                </svg>
              </div>
              <div data-e2e="video-switch-next-arrow" class="xgplayer-playswitch-next">
                <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 26 26">
                  <g filter="url(#newBelow_svg__filter0_d_1646_162559)">
                    <path d="M7.269 9.29a1.393 1.393 0 000 1.97l5.056 5.056a1.393 1.393 0 001.97 0l.011-.011 5.045-5.045a1.393 1.393 0 10-1.97-1.97l-4.071 4.072L9.239 9.29a1.393 1.393 0 00-1.97 0z" fill="#fff"></path>
                  </g>
                  <defs>
                    <filter id="newBelow_svg__filter0_d_1646_162559" x="5.861" y="8.883" width="14.898" height="9.842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1646_162559"></feBlend>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1646_162559" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div> -->
        <div class="OFZHdvpl">
          <!-- 用户头像和底下的加关注按钮 -->
          <!-- <div class="NRiH5zYV">
            <div class="YTu_A7CW bx6jfq7y xfVAG0BN">
              <a href="//www.douyin.com/user/MS4wLjABAAAAcOdJAhwT-CaQM0MkxpjxF9EmvRPiL9zpXtBKt2HsqWeb7s69Qs2yxpU5nl83MlBT" class="B3AsdZT9 mygoURxc" data-e2e="video-avatar" target="_blank" rel="noopener noreferrer">
                <div class="NRiH5zYV">
                  <div class="F55pZYYH zzYG7dwz avatar-component-avatar-container pXlwVyyi" data-e2e="live-avatar">
                    <img src="//p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/douyin-user-image-file_7bd1f45037e3ff68a9fc5464263a031f.jpeg?from=116350172" alt="" class="PbpHcHqa">
                  </div>
                </div>
              </a>
              <div class="NRiH5zYV">
                <div class="E9RYG4AQ" data-e2e="feed-follow-icon">
                  <div class="Fivj58Eg">
                    <div class="H2HjqV3h">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" width="90" height="90" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                        <defs><clipPath id="__lottie_element_1513"><rect width="90" height="90" x="0" y="0"></rect></clipPath></defs>
                        <g clip-path="url(#__lottie_element_1513)">
                          <g transform="matrix(1,0,0,1,45,45)" opacity="1" style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path fill="rgb(254,44,85)" fill-opacity="1" d=" M0,-36 C19.881999969482422,-36 36,-19.881999969482422 36,0 C36,19.881999969482422 19.881999969482422,36 0,36 C-19.881999969482422,36 -36,19.881999969482422 -36,0 C-36,-19.881999969482422 -19.881999969482422,-36 0,-36z"></path>
                            </g>
                          </g>
                          <g transform="matrix(1,0,0,1,45,45)" opacity="1" style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="6" d=" M-13.5,0 C-13.5,0 13.562000274658203,0 13.562000274658203,0 C13.562000274658203,0 -13.5,0 -13.5,0z"></path>
                            </g>
                            <g opacity="1" transform="matrix(0,1,-1,0,0,0)">
                              <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="6" d=" M-13.5,0 C-13.5,0 13.562000274658203,0 13.562000274658203,0 C13.562000274658203,0 -13.5,0 -13.5,0z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div hidden="" class="H2HjqV3h">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" width="90" height="90" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                        <defs><clipPath id="__lottie_element_1521"><rect width="90" height="90" x="0" y="0"></rect></clipPath></defs>
                        <g clip-path="url(#__lottie_element_1521)">
                          <g style="display: none;"></g>
                          <g style="display: none;">
                            <g><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"></path></g>
                            <g><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"></path></g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- 喜爱爱心 -->
          <!-- <div class="NRiH5zYV">
            <div class="kEqb4PZ6 up9tZldE MHeBD3KS" data-e2e-state="video-player-no-digged" data-e2e="video-player-digg">
              <div class="lHmTa40e">
                <div class="HNBvVrcV">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 94" width="90" height="94" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs>
                      <clipPath id="__lottie_element_1328"><rect width="90" height="94" x="0" y="0"></rect></clipPath>
                      <clipPath id="__lottie_element_1330"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1334"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1338"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1345"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1352"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1362"><path d="M0,0 L168,0 L168,168 L0,168z"></path></clipPath>
                      <clipPath id="__lottie_element_1366"><path d="M0,0 L1680,0 L1680,1680 L0,1680z"></path></clipPath>
                      <clipPath id="__lottie_element_1370"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1377"><path d="M0,0 L1200,0 L1200,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1384"><path d="M0,0 L1200,0 L1200,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1394"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                    </defs>
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
              </div>
              <div class="PK0tKym9 TwlaIXPW iyKyroyp">77.4万</div>
            </div>
          </div> -->
          <!-- 评论图标 -->
          <!-- <div class="NRiH5zYV">
            <div class="pBxTZJeH Qz1xVpFH aLzJ7lUV" data-e2e="feed-comment-icon">
              <div class="tzVl3l7w">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 99" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs><clipPath id="__lottie_element_1416"><rect width="99" height="99" x="0" y="0"></rect></clipPath></defs>
                    <g clip-path="url(#__lottie_element_1416)"><g transform="matrix(0.6600000262260437,0,0,0.6600000262260437,76.25495910644531,52.904117584228516)" opacity="1" style="display: block;">
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
              </div>
              <div class="hfgGrUTS Y006Bsbt">7.0万</div>
            </div>
          </div> -->
          <!-- 收藏五角星图标 -->
          <!-- <div class="NRiH5zYV">
            <div class="CT3y5rWY jtnwH7Q7 UgpbNsc3" data-e2e-state="video-player-no-collect" data-e2e="video-player-collect">
              <div class="ywWMyrCr">
                <div class="H2e1f_wM">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="100" height="100" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                    <defs><clipPath id="__lottie_element_1421"><rect width="100" height="100" x="0" y="0"></rect></clipPath>
                      <clipPath id="__lottie_element_1426"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath>
                      <clipPath id="__lottie_element_1448"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1455"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1462"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1469"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1482"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                      <clipPath id="__lottie_element_1495"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath>
                    </defs>
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
              </div>
              <div class="qc4FQDvn eEBI4Egz">5.2万</div>
            </div>
          </div> -->
          <!-- 转发图标 -->
          <!-- <div class="ZfrXkYoG">
            <div class="NRiH5zYV">
              <div class="Q79kf5XP h9JNjSBI sgXcrzaL" data-e2e="video-player-share">
                <div class="I2wsWzIQ">
                  <div class="BwiwR0v7">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 99" width="99" height="99" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                        <defs><clipPath id="__lottie_element_1508"><rect width="99" height="99" x="0" y="0"></rect></clipPath></defs>
                        <g clip-path="url(#__lottie_element_1508)"><g transform="matrix(0.6399999856948853,0,0,0.6399999856948853,49.20100021362305,52.65055847167969)" opacity="1" style="display: block;">
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path fill="rgb(255,255,255)" fill-opacity="1" d=" M0.8149999976158142,4.76200008392334 C0.8149999976158142,4.76200008392334 0.8149999976158142,-4.929999828338623 0.8149999976158142,-4.929999828338623 C0.8149999976158142,-4.929999828338623 -5.2179999351501465,-5.49399995803833 -9.244999885559082,-1.1749999523162842 C-13.272000312805176,3.1440000534057617 -13.517000198364258,11.817000389099121 -10.842000007629395,7.74399995803833 C-8.062000274658203,3.510999917984009 0.8149999976158142,4.76200008392334 0.8149999976158142,4.76200008392334z M10.514378547668457,2.995445728302002 C12.168766021728516,1.5337685346603394 12.21668815612793,-0.8918964862823486 10.621323585510254,-2.4177768230438232 C10.621323585510254,-2.4177768230438232 3.705676317214966,-9.032222747802734 3.705676317214966,-9.032222747802734 C2.110311985015869,-10.558103561401367 0.8149999976158142,-10.263825416564941 0.8149999976158142,-8.375499725341797 C0.8149999976158142,-8.375499725341797 0.8149999976158142,-4.953999996185303 0.8149999976158142,-4.953999996185303 C0.8240000009536743,1.8849999904632568 0.8149999976158142,1.0850000381469727 0.8149999976158142,1.0850000381469727 C0.8149999976158142,3.292600154876709 0.8149999976158142,6.536843776702881 0.8149999976158142,8.324999809265137 C0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 0.8149999976158142,8.324999809265137 C0.8149999976158142,10.113155364990234 2.158234119415283,10.378231048583984 3.812621593475342,8.916553497314453 C3.812621593475342,8.916553497314453 10.514378547668457,2.995445728302002 10.514378547668457,2.995445728302002z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    </div>
                  </div>
                  <div class="MjEhjbTL"></div>
                </div>
                <div class="_09xOZR9">15.9万</div>
              </div>
            </div>
            <div data-e2e="video-share-container">
              <div class="xccodDG4 o1olQOk8 DhEeeU3v J8_Uj1cS nFZmQGu5" data-inuser="false" style="display: none;"></div>
            </div>
          </div> -->
          <!-- 更多，可以选择不感兴趣，举报等等 -->
          <!-- <div class="NRiH5zYV">
            <div class="V5Rmr_ZY IS7FyuLE" data-e2e="video-play-more">
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                <path d="M13.556 17.778a1.778 1.778 0 11-3.556 0 1.778 1.778 0 013.556 0zM19.778 17.778a1.778 1.778 0 11-3.556 0 1.778 1.778 0 013.556 0zM24.222 19.556a1.778 1.778 0 100-3.556 1.778 1.778 0 000 3.556z" fill="#fff"></path>
              </svg>
              <div class="se14DHcz" style="display: none; width: 240px;">
                <div class="LIEWFkBs"><div class="FbuERyN5" data-e2e="video-player-no-like">
                  <div class="Ejbx5dGa">
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.749 8.693c1.775-.25 3.457.38 4.9 1.662a.95.95 0 01.32.693l.043 2.458 2.438 1.799a.95.95 0 01.208 1.316L17.86 19.14l1.21 2.554a.95.95 0 01-1.718.813l-1.448-3.059a.95.95 0 01.086-.958l1.579-2.212-2.063-1.522a.95.95 0 01-.386-.748l-.043-2.493c-1.018-.795-2.053-1.083-3.063-.94-2.102.294-3.808 2.711-3.408 5.558.011.081.021.141.03.193l.005.03v.001l.015.108.004.037c.052.28.175.692.335 1.12.172.461.353.848.467 1.031l.014.024c1.036 1.78 2.92 3.612 4.648 5.066a46.926 46.926 0 002.25 1.772c.3.223.552.404.74.54l.058.041c.14.1.282.203.349.26.075.065.125.106.172.142a.573.573 0 00.103.063h.01a.241.241 0 00.081-.013.951.951 0 01.277-.085h.002c.001-.001.01-.005.027-.017a.836.836 0 00.08-.066c.04-.035.08-.074.136-.13.07-.07.213-.184.337-.284l.031-.024.058-.046c.153-.124.348-.28.575-.466.514-.419 1.195-.99 1.935-1.662 1.477-1.34 3.134-3.037 4.186-4.713.103-.242.191-.406.344-.64.05-.115.106-.236.165-.35.04-.076.09-.169.154-.264.183-.58.285-1.006.332-1.5l.001-.047.007-.1.003-.03c.004-.05.01-.108.015-.187.195-2.783-1.623-5.003-3.667-5.146-1.16-.08-2.493.442-3.14 1.337a.95.95 0 01-1.54-1.111c1.104-1.53 3.133-2.238 4.813-2.12 3.366.234 5.676 3.641 5.43 7.172l-.019.228-.002.02c0 .03 0 .06-.003.09-.066.765-.229 1.384-.47 2.128a.95.95 0 01-.185.329l-.001.002a1.002 1.002 0 00-.042.075c-.04.076-.085.175-.14.302a.943.943 0 01-.081.152 2.119 2.119 0 00-.25.462.938.938 0 01-.07.137c-1.193 1.926-3.032 3.791-4.563 5.181a50.77 50.77 0 01-2.598 2.203c-.02.015-.04.03-.057.045l-.188.152-.038.03-.03.03c-.188.186-.555.55-1.125.68-.15.06-.31.102-.48.126-.923.13-1.502-.367-1.79-.616l-.03-.025-.04-.03-.243-.174c-.19-.136-.449-.324-.76-.554a48.738 48.738 0 01-2.341-1.845c-1.76-1.48-3.852-3.48-5.062-5.554-.21-.343-.44-.86-.625-1.356-.189-.505-.368-1.081-.442-1.542a.95.95 0 01-.01-.098l-.002-.011c-.008-.052-.022-.134-.037-.239-.504-3.589 1.611-7.225 5.025-7.704z" fill="#2F3035" fill-opacity="0.9"></path>
                    </svg>
                  </div>
                  <div class="n0iTjXhb">不感兴趣</div>
                </div>
                <div class="FbuERyN5" data-e2e="video-player-report">
                  <div class="Ejbx5dGa">
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                      <path d="M28.928 23.422c1.014 1.647-.225 3.843-2.367 3.843H9.315c-2.029 0-3.269-2.196-2.254-3.843l8.68-14.604c.45-.879 1.352-1.318 2.253-1.318.902 0 1.804.44 2.255 1.318l8.68 14.604zm-1.766 1.008l-.016-.027-8.68-14.604-.058-.106c-.07-.137-.213-.217-.414-.217-.2 0-.342.08-.413.217l-.058.106-8.696 14.63c-.216.352.077.86.488.86h17.246c.519 0 .82-.504.6-.86zm-9.368-10.545c-.513 0-.924.301-.924.678v5.343c0 .377.41.679.924.679H18c.513 0 .924-.302.924-.679v-5.343c0-.377-.411-.678-.924-.678h-.206zm-.924 8.872c0 .253.11.505.3.684a1.073 1.073 0 001.453 0 .95.95 0 00.3-.684.95.95 0 00-.3-.683 1.073 1.073 0 00-1.452 0 .95.95 0 00-.3.683z" fill="#2F3035" fill-opacity="0.9"></path>
                    </svg>
                  </div>
                  <div class="n0iTjXhb">举报</div>
                </div>
                <div class="FbuERyN5 ouFbTbn7" data-e2e="video-player-shoret-cut">
                  <div class="Ejbx5dGa"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                    <rect x="6" y="9" width="24" height="18" rx="2" stroke="#fff" stroke-opacity="0.8" stroke-width="2"></rect>
                    <path stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" d="M11 22h14M11 14h2M17 14h2M23 14h2M23 18h2M17 18h2M11 18h2"></path>
                  </svg>
                </div>
                <div class="n0iTjXhb">快捷键列表</div>
              </div>
            </div>
            <div class="ZJznjerU" data-e2e="more-music-detail" style="max-width: unset;">
              <div class="_zchYV_g">
                <div class="_simaUMV">
                  <div class="cR16sIWE">
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.783 8.886c.041.001.082.005.124.009V8.89l-.124-.004zm18.337 1.208a1.631 1.631 0 00-.537-1.24 1.589 1.589 0 00-1.277-.4h-.004l-10.57 1.641a1.58 1.58 0 00-1.365 1.553l-.215 11.82a3.2 3.2 0 00-2.438-1.241c-1.76-.048-3.212 1.355-3.244 3.134-.032 1.78 1.368 3.261 3.127 3.31 1.76.047 3.212-1.356 3.245-3.135l.17-9.368 12.307-2.026-.176 9.709a3.2 3.2 0 00-2.459-1.269c-1.76-.048-3.212 1.355-3.244 3.135-.033 1.779 1.368 3.26 3.127 3.309 1.76.048 3.212-1.356 3.244-3.135l.309-15.797z" fill="#fff" fill-opacity="0.8"></path>
                    </svg>东北跑山猪创作的原声
                  </div>
                  <div class="C0K0FFgN">0人使用</div></div></div><div class="MwxqXGbB oh9dyY7y"></div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- 会弹出的登录界面 -->
          <!-- <div class="disturb-login-panel"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.switch-prev{
  background-color: rgba(0,0,0,.18);
  border: 1px solid hsla(0,0%,100%,.15);
  border-radius: 32px;
  box-sizing: content-box;
}
/* .xgplayer * {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
.xgplayer.xgplayer-pc div.xgplayer-playswitch.filter-bg .xgplayer-icon {
    border: 1px solid hsla(0,0%,100%,.15);
    border-radius: 32px;
    box-sizing: content-box;
}
.xgplayer.xgplayer-pc div.xgplayer-playswitch.filter-bg .xgplayer-icon .xgplayer-playswitch-tab {
    -webkit-backdrop-filter: unset;
    backdrop-filter: unset;
    background-color: rgba(0,0,0,.18);
    opacity: 1;
    width: 35px;
} */

.videoFullShow{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ZCHTRJzJ {
    -webkit-app-region: no-drag;
    cursor: pointer;
    height: 64px;
    left: 35px;
    position: fixed;
    top: 35px;
    width: 64px;
    z-index: 1000;
}
.ZCHTRJzJ .bFdMjgdW {
    background-color: rgba(0,0,0,.18);
    border: .5px solid hsla(0,0%,100%,.15);
    border-radius: 32px;
    height: 64px;
    width: 64px;
}
.ZCHTRJzJ .mcc8KhCO {
    height: 18px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 18px;
}
.videoFullShow::before{
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:linear-gradient(to top, rgb(74, 72, 72, 0.9), rgba(77, 76, 76, 0.9)), url("assets\\back.png") ;
  filter: blur(10px);
  background-size: 100% 100%;
  z-index: -1;
}
.videodetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.upbutton {
  width: 80px;
  z-index: 1;
}
.downbutton {
  width: 80px;
  z-index: 1;
}
.likebutton {
  width: 80px;
  z-index: 1;
}
.commentbutton {
  width: 80px;
  z-index: 1;
}
.collectbutton {
  width: 80px;
  z-index: 1;
}
.transmitbutton {
  width: 80px;
  z-index: 1;
}

/* 设置视频的样式 */
.video {
  /*flex: 1; !* 视频占据剩余的可用空间 *!*/
  /*max-width: 90%; !* 可根据需要调整视频的宽度 *!*/
  width: 100%;
  height: 650px;
}

/* 设置按钮组的样式 */
.button-group {
  /*width: 10%;*/
  /*margin-right: 10%;*/
  /*flex: 1; !* 按钮组占据剩余的可用空间 *!*/
  /*display: flex; !* 使用弹性布局 *!*/
  flex-direction: column; /* 垂直排列按钮 */
  z-index: 1;
  /*width: 100px;*/
  /*margin: 50px;*/
  /*justify-content: space-between; !* 按钮之间的间距最大化 *!*/
}

/* 设置单个按钮的样式 */
.button {
  /*margin: 10px 0; !* 顶部和底部边距 *!*/
}
</style>
<script setup>
import { router } from '@/router';
import { Delete, Star, Search, Share, StarFilled, Comment, Upload, ArrowUpBold, ArrowDownBold } from '@element-plus/icons-vue'
function getvideo(){
  return { id: 1, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' }
}
function backTOHome(){
  router.push('/homepage')
}
const videos = [
  { id: 1, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 2, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 3, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 4, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 5, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 6, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  // 添加更多视频数据...
];
</script>
