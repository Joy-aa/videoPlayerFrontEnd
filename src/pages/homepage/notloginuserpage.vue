
<template>
<!--  显示用户信息-->
  <div class = "container">


  <div class="showusrinfo">
    <div class="showuseravatar" data-e2e="live-avatar">
<!--      <img src="//p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_3791_5070639578~c5_300x300.jpeg?from=2956013662" alt="用户1929602996046头像" class="useravatar">-->
    </div>

    <div class="usrinfo" data-e2e="user-info">
      <div class="usrinfo_name_row">
        <h1 class="usrinfo_name">
          <span>
            <span class="Nu66P_ba">
              <span>
                <span>
                  <span>
                    <span>未登录</span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <div class="eDwMD7wB">
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-follow">
          <div class="Y150jDoF">关注</div>
          <div class="TxoC9G6_">.</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-fans">
          <div class="Y150jDoF">粉丝</div>
          <div class="TxoC9G6_">.</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-like">
          <div class="Y150jDoF">获赞</div>
          <div class="TxoC9G6_">.</div>
        </div>
      </div>
      <p class="wTV10cVL">
        <span class="aH7rLkZZ">抖音号：<!-- -->89506608795</span>
      </p>
    </div>
    <div class="VYCEfmrZ">
      <button type="button" class="GIg8IFtS">编辑资料</button>
    </div>
  </div>
  <div class = "uservideoinfo" >
    <el-menu
        mode="horizontal"
        :ellipsis="false"
        router="router"
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color = rgb(43,45,48)
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="/user/作品">
        <i class="el-icon-menu"></i>
        <span>作品</span>
      </el-menu-item>
      <el-menu-item index="/user/作品">
        <i class="el-icon-menu"></i>
        <span>喜欢</span>
      </el-menu-item>
      <el-menu-item index="/user/收藏">
        <i class="el-icon-menu"></i>
        <span>收藏</span>
      </el-menu-item>
      <el-menu-item index="/user/观看历史">
        <i class="el-icon-menu"></i>
        <span>观看历史</span>
      </el-menu-item>
    </el-menu>
  </div>

  <div class="web-login-scan-code">
    <div class="web-login-scan-code_wrapper">
      <h2>Oooops.... Please login first to get videos</h2>
      <div class="agile_404_pos">
        <h3><span>未</span>登录 </h3>
        <img src="./assets/1.png" alt=" ">
      </div>
    <img alt="" src = "./assets/3.png"
         class="web-login-scan-code__content__qrcode-wrapper__qrcode" tabindex="0" aria-label="二维码">
    </div>
  </div>
  </div>
<!--  <div class="UuBdeq3u">-->
<!--    <div class="cwaJF3XD">-->
<!--      <div>-->
<!--        <div>-->
<!--          <div style="padding-bottom: 0px;"></div>-->
<!--          <div class="gX8AKvzT" style="padding:0" id="user-tabbar">-->
<!--            <div class="_UJeiIOr">-->
<!--              <div class="NnpDSweB">-->
<!--                <div class="qYqKgR2A" data-e2e="user-work-tab">-->
<!--&lt;!&ndash;                  <h2 class="OdX5EIvH">&ndash;&gt;-->
<!--                    <span class="UQ3wN7h5">作品</span>-->
<!--                    <span class="J6IbfgzH" data-e2e="user-tab-count">0</span>-->
<!--&lt;!&ndash;                  </h2>&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="qYqKgR2A GTnzp897" data-e2e="user-like-tab">-->
<!--                  <span class="UQ3wN7h5">喜欢</span>-->
<!--                  <div class="rjzNC9MJ" data-e2e="user-tab-icon">-->
<!--                    <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M2.824 5.647h-.942C.842 5.647 0 6.49 0 7.53v6.589C0 15.158.843 16 1.882 16h9.412c1.04 0 1.883-.843 1.883-1.882V7.529c0-1.04-.843-1.882-1.883-1.882h-.941V3.765a3.765 3.765 0 10-7.53 0v1.882zm1.882 0H8.47V3.765a1.882 1.882 0 10-3.765 0v1.882z" fill="#A9AAB7"></path>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="qYqKgR2A" data-e2e="user-favorite-tab">-->
<!--                  <span class="UQ3wN7h5">收藏</span>-->
<!--                  <div class="rjzNC9MJ W9ySWPuh" data-e2e="user-tab-icon">-->
<!--                    <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M2.824 5.647h-.942C.842 5.647 0 6.49 0 7.53v6.589C0 15.158.843 16 1.882 16h9.412c1.04 0 1.883-.843 1.883-1.882V7.529c0-1.04-.843-1.882-1.883-1.882h-.941V3.765a3.765 3.765 0 10-7.53 0v1.882zm1.882 0H8.47V3.765a1.882 1.882 0 10-3.765 0v1.882z" fill="#A9AAB7"></path>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="qYqKgR2A" data-e2e="">-->
<!--                  <span class="UQ3wN7h5">观看历史</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--导航栏-->











</template>

<style >
:root {
  /*申明css全局变量*/
  --white: 255,255,255;
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
}

.container{
  display: flex;
  flex-direction: column;
}

.showusrinfo {
  display: flex;
  margin: 28px auto 21px;
  max-width: 1208px;
  position: relative;
  width: 100%;
  background-image: linear-gradient(90deg,rgba(26,28,39,0),#1a1c27 calc(100% - 852px),rgba(32,32,53,.35) 64.63%,rgba(33,33,57,.2)),url(//lf3-cdn-tos.bytegoofy.com/obj/goofy/ies/douyin_web/image/dark_bg_default.29cfccfa.png);
  background-color: #2B2D40;

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
  margin: 0;
}

.showuseravatar {
    flex: none;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    width: 112px;
    height: 112px;
    background-image : url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxyZWN0IHdpZHRoPSIxMTIiIGhlaWdodD0iMTEyIiByeD0iNTYiIGZpbGw9IiMyNTI2MzIiLz48cGF0aCBkPSJNMTMuOTYyIDkzQzI0LjIyNCA4MS4zNTIgMzkuMjUzIDc0LjAwMiA1NiA3NC4wMDJzMzEuNzc1IDcuMzUgNDIuMDM3IDE5Yy0xMC4yNjIgMTEuNjUtMjUuMjkxIDE5LTQyLjAzNyAxOXMtMzEuNzc1LTcuMzUtNDIuMDM3LTE5Wk03NS45OTkgNDYuMDAxYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwcy0yMC04Ljk1NC0yMC0yMCA4Ljk1NC0yMCAyMC0yMCAyMCA4Ljk1NCAyMCAyMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjM0Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHJlY3Qgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiIHJ4PSI1NiIgZmlsbD0iI2ZmZiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==);
    background-size:cover;



}
.usrinfo {
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  margin-left: 32px;
  min-height: 120px;


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
.uservideoinfo {


}

 .web-login-scan-code {

   justify-content: center;
   align-items: center;

}
.web-login-scan-code_wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  //background-color: #2B2D40;
  background-image: url(./assets/banner.jpg);
}
.web-login-scan-code_wrapper h2{
  font-size:0.5em;
  color:#fff;
  margin-bottom: 15px;
}

.web-login-scan-code img{
  //max-height: 100%;
  //max-width: 100%;
  //height: 150px;
  width: 40%;

}

.agile_404_pos h3{
  font-size:4em;
  color:#fff;
  font-family: 'Alfa Slab One', cursive;
}
.agile_404_pos h3 span{
   color:crimson;
 }
.agile_404_pos{
  position: absolute;
  top: 52%;
  left: 39%;
}
.agile_404_pos img{
  position: absolute;
  top: 22%;
  left: 100%;
}
</style>

<script>

// import "@/pages/homepage/newuserpagestyle.css";




</script>