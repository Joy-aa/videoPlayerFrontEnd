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
          <div class="TxoC9G6_" style="color: white;">{{ getuserinfo().follow }}</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-fans">
          <div class="Y150jDoF" style="color: white;">粉丝</div>
          <div class="TxoC9G6_" style="color: white;">{{ getuserinfo().fans }}</div>
        </div>
        <div class="AULCPX_8 LEaniV4W" data-e2e="user-info-like">
          <div class="Y150jDoF" style="color: white;">获赞</div>
          <div class="TxoC9G6_" style="color: white;">{{ getuserinfo().likes }}</div>
        </div>
      </div>
      <p class="wTV10cVL">
        <span class="aH7rLkZZ" style="color: white;">七牛云视频号：{{ userInfo.userId }}</span>
      </p>
    </div>

    <div class="VYCEfmrZ">
      <button @click="openModal" class="GIg8IFtS" >修改资料</button>
      <div v-if="showModal" class="edit-modal">
        <div class="modal-content">
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
          <i class="el-icon-menu"></i>
          <span>作品</span>
<!--          <span v-if="videoInfo.length!=0">   {{   videoInfo.length }}</span>-->
        </el-menu-item>
        <el-menu-item index = "likes">
          <i class="el-icon-menu"></i>
          <span>喜欢</span>
        </el-menu-item>
        <el-menu-item index = "star">
          <i class="el-icon-menu"></i>
          <span>收藏</span>
        </el-menu-item>
        <el-menu-item index = "history">
          <i class="el-icon-menu"></i>
          <span >观看历史</span>
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
    <ul class="video-model" data-e2e="scroll-list">
      <li class="video-list" v-for="(video, index) in videoInfo" :key="index" >
        <div class = "video-item">
<!--          <a :href=video.src class="B3AsdZT9 chmb2GX8 DiMJX01_" target="_blank" rel="noopener noreferrer">-->
          <router-link :to="`/videopage/${video.videoId}`">

          <div class="video-cover">
              <div class="cover-img">
                <img :src= video.pageshot  :alt=video.videoName class="">
              </div>
<!--              <div class="rhqAcHmo">-->
<!--              </div>-->
              <svg width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24" id="svg_icon_digg">
                <path d="M12.159 5.3l-.96.924a1.333 1.333 0 002.051-.159L12.16 5.3zm9.255 3.75h-1.333a1.333 1.333 0 002.54.566l-1.207-.567zm0 0l1.334-.001a1.333 1.333 0 00-2.54-.566l1.206.566zm0 .311l1.334.024c.003-.201-.039-.4-.123-.582l-1.21.558zm-.319 1.875l.998.885c.133-.15.231-.33.286-.524l-1.284-.36zm-.319.625l1.121.722c.047-.073.087-.15.12-.232l-1.24-.49zm-.319.625l1.145.682c.04-.067.074-.137.102-.21l-1.247-.472zm-3.248 3.976l-.943-.942-.003.003.946.94zm-5.216 4.207l.023-1.333h-.018l-.005 1.333zm-1.204-.654l.834-1.04a1.275 1.275 0 00-.043-.033l-.79 1.073zm-4.408-3.877l.958-.928-.005-.004-.953.932zm-3.182-4.269l1.21-.56a1.432 1.432 0 00-.017-.036l-1.193.596zm-.614-2.508l-.94-.945c-.26.258-.401.61-.393.975l1.333-.03zm13.404-7.27c-1.926 0-3.776.81-4.921 2.442l2.182 1.532c.577-.821 1.554-1.307 2.739-1.307V2.091zm6.759 6.958c0-3.743-3.014-6.958-6.76-6.958v2.667c2.18 0 4.093 1.925 4.093 4.291h2.667zm-.003.232c.001-.05.003-.13.003-.232H20.08l-.002.171 2.666.06zm-.12-.478a1.3 1.3 0 01.113.408c.006.054.006.093.006.1v-.03l-2.665-.06c0 .021-.002.075-.001.123 0 .024 0 .078.008.142.003.033.02.222.118.434l2.421-1.117zm-.246 2.794c.21-.751.354-1.406.369-2.212l-2.667-.047c-.008.48-.086.886-.27 1.538l2.568.72zm-.363.754a3.97 3.97 0 01.114-.266c.013-.028.02-.038.019-.037l-.014.02a.732.732 0 01-.043.053l-1.994-1.77a2.501 2.501 0 00-.362.56 6.522 6.522 0 00-.2.46l2.48.98zm-.312.607a1.71 1.71 0 01.075-.177c.018-.036.047-.088.118-.198l-2.242-1.444a4.08 4.08 0 00-.445.875l2.494.944zm-.319.562c.075-.117.147-.234.217-.352l-2.29-1.364c-.056.092-.113.185-.174.28l2.247 1.436zm-3.234 3.885c1.151-1.15 2.35-2.498 3.234-3.885l-2.247-1.436c-.736 1.154-1.784 2.348-2.872 3.436l1.886 1.885zm-4.134 3.716c.73-.603 2.443-2.014 4.137-3.719l-1.89-1.88c-1.595 1.604-3.218 2.943-3.943 3.54l1.696 2.059zm-.275.224c-.026.027-.042.04-.024.024l.06-.05c.057-.049.136-.113.239-.198l-1.696-2.058c-.157.13-.368.3-.464.397l1.885 1.885zM12 22.003c.286 0 1.061.023 1.742-.658l-1.885-1.885a.537.537 0 01.22-.117c.034-.01.052-.01.04-.009a2.463 2.463 0 01-.119.002L12 22.003zm-.03 0H12l-.002-2.667h.018l-.046 2.666zm-1.98-.925c.278.279.885.92 1.997.924l.011-2.666c-.019 0-.013-.002.008.004a.201.201 0 01.046.02c.006.003-.003-.002-.033-.029a3.343 3.343 0 01-.143-.138L9.99 21.078zm-.035-.022l.044.035.028.023.005.004a.448.448 0 01-.042-.04l1.886-1.885c-.085-.084-.204-.179-.253-.218l-1.668 2.08zm-4.532-3.99a39.936 39.936 0 004.576 4.023l1.58-2.147a37.31 37.31 0 01-4.24-3.732l-1.916 1.855zm-3.434-4.638c.772 1.67 2.123 3.296 3.438 4.642l1.907-1.864C6.09 13.932 4.99 12.566 4.41 11.31l-2.421 1.118zm-.737-3.037c.01.498.125 1.104.253 1.613.127.506.304 1.066.502 1.461l2.385-1.192c-.069-.138-.191-.48-.3-.918-.11-.435-.17-.817-.174-1.023l-2.666.059zm.003-.102v.022a1.298 1.298 0 01.062-.362c.026-.078.107-.313.327-.533l1.881 1.89a1.342 1.342 0 00.397-.955l-.001-.132-2.666.07zm-.004-.24c0 .106.002.188.004.24l2.666-.07a6.11 6.11 0 01-.003-.17H1.251zm6.76-6.958c-3.748 0-6.76 3.214-6.76 6.958h2.667c0-2.368 1.912-4.291 4.092-4.291V2.091zm5.108 2.283c-1.4-1.453-3.15-2.283-5.109-2.283v2.667c1.146 0 2.226.467 3.189 1.466l1.92-1.85z" fill="#fff"></path>
              </svg>

              <span class="author-card-user-video-like">
                <svg width="18" height="17" viewBox="0 0 18 17" style="stroke: white">
                  <use xlink:href="#svg_icon_digg" ></use>
                </svg>
                <span>{{ video.likeNum }}</span>
              </span>

            </div>
          <p class="show-video-name">{{ video.videoName }}</p>
<!--          </a>-->
          </router-link>

          <!--          <div class="lYacWPe5">-->
<!--          </div>-->
        </div>
      </li>
    </ul>


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
  //margin: 0px auto 0px;
  max-width: 1208px;
  //position: fixed;
  width: 100%;
  //background-color: #2B2D40;
  //position: ;
  //top:0;
  //left:0;
  //width: 100%;
  //height: 100%;
  //background-image: linear-gradient(90deg,rgba(26,28,39,0),#1a1c27 calc(100% - 852px),rgba(32,32,53,.35) 64.63%,rgba(33,33,57,.2)),url(//lf3-cdn-tos.bytegoofy.com/obj/goofy/ies/douyin_web/image/dark_bg_default.29cfccfa.png);
  background-image: url("./assets/banner.jpg");


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
  top: auto;
  bottom: auto;
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


//编辑资料弹窗css
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
  //background: var(--color-bg-b1);
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
  //color: rgba(22,24,35,.6);
  //color: var(--color-text-t3);
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
  height: 100vh;

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

.modal-content {
  background-color: #252632;
  //background-color: rgba(25,26,32);
  padding: 20px;
  border-radius: 5px;
  height: 588px;
  width: 480px;

}

.modal-content input,
.modal-content textarea {
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
  //padding-left: 8px;
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

.video-cover
{ width: 100%;
  height: 0;
  padding-bottom: 177.77%;
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
  //object-fit: cover; /* 控制图片填充方式，可选值包括：fill, contain, cover, none, scale-down */
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


const isHeadImageChosed = ref(false);
const handleFileChange = (event) => {
  // let selectedFile = document.getElementById('upload-head-button');
  let selectedFile = event.target.files[0];
  // console.log(selectedFile.type)
  uploadVideo(selectedFile);
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
async function uploadVideo(newheadshot){
  let token = ''
  await request.post("/video/getVideoToken").then(res => {token = res.data})
  // console.log('jhggk',token)
  console.log(newheadshot.name);
  const uploadfilename = newheadshot.name;
  const file_type = uploadfilename.substring((uploadfilename.lastIndexOf('.')));
  var key = userId + file_type;
  console.log(key);
  const observable = qiniu.upload(newheadshot, key, token)
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
const url = ref('');
async function getHeadShotUrl(fileName){
  const p = {
    fileName: fileName
  }
  // console.log(p)
  await request
      .get("/video/getDownLoadVideoUrl", {params: p})
      .then(res => {
        // console.log(res)
        if(res.data.code != 1)
          url.value =  res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  console.log(url.value)
}

async function saveChanges (){
  let formData = new FormData();
  await getuser(userId);
  console.log(userInfo.value.email)
  formData.append('email',userInfo.value.email);
  formData.append('username',username.value);
  formData.append("introduction",bio.value);
  if(isHeadImageChosed.value){
    const fileName = userId + '.jpg';
    await getHeadShotUrl(fileName);
    formData.append('headshot',url)
  }
  else formData.append('headshot',userInfo.value.headshot)
  request
      .post('/user/updateUser', formData)
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