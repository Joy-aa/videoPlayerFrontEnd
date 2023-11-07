<template>
  <div class="common-layout" style="background-color: #2c3e50">
    <el-container>
      <el-aside class="el-aside" style="width:120px;">
        <img class="menu-image" src="./assets/OIP.jpg" alt="Your Image" style="width:120px">>
<!--        <img src="https://www-static.qbox.me/_next/static/media/logo.0fc18feaa621d2068a7180631f742256.jpg" style="display:none">-->
        <el-row>
          <el-col>

            <el-menu
                default-active=1
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#2c3e50"
                text-color="#fff"
                active-text-color="#ffd04b">

              <template v-if="userId != null">
                <router-link :to="`/userpage/${userId}`">
                  <el-menu-item style="color: white" >
<!--                    <i class="el-icon-document"></i>-->
                    <span>我的</span>
                  </el-menu-item>
                </router-link>
              </template>
              <template v-else>
                <router-link :to="`/notloginpage/`">
                  <el-menu-item style="color: white" >
<!--                    <i class="el-icon-document"></i>-->
                    <span>我的</span>
                  </el-menu-item>
                </router-link>
              </template>

                <el-menu-item
                    v-for="(tag, index) in tagList"
                    :key="index"
                    :index="tag.tagId"
                    style="color: white"
                    @click="handleMenuSelect(tag.tagId)"
                >
                    <span>
                      {{ tag.tagName }}
                    </span>
                </el-menu-item>

            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="container" style="margin-top: 10px">
            <el-row align="middle">
              <div class="AFTy15pW">
                <div class="lPytbapz XClSex3D">
                  <form class="zyznJl4l" action="" target="_blank"><input class="igFQqPKs qYYUxsS2"
                                                                          data-e2e="searchbar-input" type="text"
                                                                          maxlength="100"
                                                                          placeholder="搜索你感兴趣的内容"
                                                                          v-model="searchcontent"
                  ></form>
                  <button class="rB8dMXOc" @click="searchbuttonclick" data-e2e="searchbar-button" type="button">
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="FhOy97Hs">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.875 1.5a6.375 6.375 0 103.642 11.608l3.063 3.063a1.125 1.125 0 001.59-1.591l-3.062-3.063A6.375 6.375 0 007.875 1.5zM3.75 7.875a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z"
                            fill="#4F5168"></path>
                    </svg>
                    <span class="btn-title">搜索</span></button>
                </div>
              </div>


              <el-button class="upload-button" :icon="Upload" @click="openModal">发布</el-button>
              <div v-if="showModal" class="edit-modal">
                <div class="modal-content">
<!--                  <div class = "close-button">-->
<!--                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36" @click="closeModal">-->
<!--                      <path d="M24.601 24.6a1.362 1.362 0 01-1.927 0L18.5 20.427l-4.174 4.175a1.362 1.362 0 01-1.927-1.927l4.174-4.174-4.174-4.175a1.362 1.362 0 011.927-1.926l4.174 4.174 4.174-4.174a1.362 1.362 0 111.927 1.927L20.427 18.5l4.174 4.174a1.362 1.362 0 010 1.927z" fill="#fff" fill-opacity="0.8"></path>-->
<!--                    </svg>-->
<!--                  </div>-->

                  <h3  style="color: white; margin-left: 45px;">上传视频</h3>
                  <!--            修改头像-->
                  <div >
                    <div class="head-model">

                      <div class="layui-upload-drag" @click="openFilePicker" @dragover.prevent @drop="handleFileDrop"  >
                        <p v-if="!fileSelect">点击上传，或将文件拖拽到此处</p>
                        <p v-else>已接收到视频</p>
                        <input type="file"  @change="handleFileChange" id = "upload-video-button" style="display: none" required>

<!--                        <p>已接收到上传文件</p>-->
                      </div>
                    </div>

                  </div>
                  <!--          修改用户名-->
                  <div class="name-model">
                    <div class="name-tips">视频名</div>
                    <div class="name-content">
                      <input type="text" v-model="videoName" placeholder="记得为视频填写名字" maxlength="20" required>
                      <!--              <span class="Z0yinT0U">15/20</span>-->
                    </div>
                  </div>

                  <!--          <input type="text" v-model="username" placeholder="用户名">-->
                  <div class="intro-tips">选择标签</div>
                  <div class="tag-content">
                    <select v-model="selectedTag">
                      <option class = "tag-list" v-for = "(tag,index) in tagList" :key="index" :value="tag.tagId" >#{{ tag.tagName }}</option>
                    </select>
                  </div>
                  <div class="button-model">

                    <button type="button" class="save-button" @click="saveChanges">上传</button>
                    <button type="button" class="cancel-button" @click="closeModal">取消</button>
                  </div>


                </div>
              </div>
<!--                  <el-button v-if="!store.state.isAut" index="/signin" style="font-size: 15px;">登录 / 注册</el-button>-->


            <!--                  <el-button v-if="!store.state.isAut" index="/signin" style="font-size: 15px;">登录 / 注册</el-button>-->

<!--                  <el-button v-if="store.state.isAut" index="user" style="font-size: 15px;">{{store.state.username}}</el-button>-->
              <el-button
                  router="router" v-if="!store.state.isAut" class="login-button" @click="login_signin" style="font-size: 15px;">登录 / 注册
              </el-button>

                <img v-else v-bind:src="headshot? headshot:require('./assets/img.png')"  class="avatar" @click="click_avatar">


<!--                <el-menu v-if="isOptionsVisible"-->
<!--                    mode="vertical"-->
<!--                    class="options-box"-->
<!--                    :ellipsis="false"-->
<!--                    router="router"-->
<!--                    default-active="1"-->
<!--                    @open="handleOpen"-->
<!--                    @close="handleClose"-->
<!--                >-->
<!--                  <el-menu-item style="height: 20px">个人信息</el-menu-item>-->
<!--                  <el-menu-item @click="login_out" style="height: 20px">退出登录</el-menu-item>-->
<!--                </el-menu>-->


<!--              <el-menu-->
<!--                  v-else-->
<!--                  class="menu"-->
<!--                  mode="horizontal"-->
<!--                  :ellipsis="false"-->
<!--                  router="router"-->
<!--                  default-active="1"-->
<!--                  @open="handleOpen"-->
<!--                  @close="handleClose">-->
<!--                  <el-image :src="avatar_url" class="avatar" ></el-image>-->
<!--                  <el-sub-menu>-->
<!--                    <el-menu-item style="font-size: 15px">个人信息</el-menu-item>-->
<!--                    <el-menu-item @click="login_out" style="font-size: 15px">退出登录</el-menu-item>-->
<!--                  </el-sub-menu>-->

<!--              </el-menu>-->
            </el-row>

            <div v-if="isOptionsVisible" class="options-box">
              <el-menu class="twoitem" style="height:30px;margin-left:0px;background-color: #475669; border-color: #475669">
                <el-menu-item @click="clickuserinfo" style="height:20px;margin-top:8px;color:white;font-size: 15px">个人信息</el-menu-item>
                <el-menu-item @click="log_out" style="height:20px;margin-top:13px;color:white;font-size: 15px">退出登录</el-menu-item>
              </el-menu>
              <!--              <span style="color:lightgrey;font-size: 15px">个人信息</span>-->
              <!--              <span @click="login_out" style="color:lightgrey;font-size: 15px">退出登录</span>-->

            </div>
          </div>


        </el-header>
        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>


<script setup lang="ts" >
import {ref, toRaw} from "vue";
import store from './store'
import request from "@/api";
import Cookies from 'js-cookie'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import avatar_url from '@/assets/img.png'
import { useRoute, useRouter } from 'vue-router';
const qiniu = require('qiniu-js');
const activeMenu = ref('/');
const route = useRoute();
const router = useRouter();


const userId = localStorage.getItem("currentUserId")
console.log(userId)


const isOptionsVisible = ref(false);

const searchcontent = ref("请搜索")
const headshot = ref("")
// const tagList = ref([])

async function searchbuttonclick() {
  console.log(searchcontent.value)
  const p1 = {
    currentUserId: localStorage.getItem("currentUserId"),
    content: searchcontent.value
  }
  localStorage.setItem("searchcontent", searchcontent.value)
  var relatedusers = ""
  await request
      .get("/user/findUsers", {params: p1})
      .then(res => {
        relatedusers = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log("findusers")
  console.log(relatedusers)
  store.commit("setRelatedUsers", relatedusers)
  localStorage.setItem("relatedusers", relatedusers)

  const p2 = {
    content: searchcontent.value
  }
  var relatedvideos = ""
  await request
      .get("/video/findVideoByName", {params: p2})
      .then(res => {
        relatedvideos = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log(relatedvideos)
  store.commit("setRelatedVideos", relatedvideos)

  var heights = []
  for (var i = 0; i < relatedvideos.length; i++) {
    heights.push(380);
  }
  store.commit("setHeights", heights)

  router.push("/searchpage")
}

function clickuserinfo() {
  isOptionsVisible.value = false
  router.push("/userpage/" + localStorage.getItem("currentUserId"))
}

function click_avatar() {
  console.log("click avatar")
  console.log(isOptionsVisible.value)
  isOptionsVisible.value = isOptionsVisible.value != true;
  console.log(isOptionsVisible.value)
}
function uploadbuttonclick() {
// 处理按钮点击事件
}

function login_signin() {
  if (!store.state.isAut)
    router.push("/signin")
}

async function handleMenuSelect(tagId) {
  console.log("父组件" + tagId)
  activeMenu.value = tagId;
  const p = {
    tagId : tagId,
  }

  var videos = ""
  var users = ""
  var heights = []
  await request
      .get("/tagrecord/findVideoByTag", {params: p})
      .then(res => {
        videos = res.data.data
        // console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  // console.log('当前页面类别' + index)
  // console.log(videos)
  store.commit("setVideosOfCategory", videos)

  await request
      .get("/tagrecord/findUserOfVideoByTag", {params: p})
      .then(res => {
        users = res.data.data
        // console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  store.commit("setUsersOfCategory", users)

  for (var i = 0; i < videos.length; i++) {
    heights.push(380);
  }
  store.commit("setHeights", heights)

  router.push("/homepage")
}

const global_user_name = ref(store.state.username);
const ifsignoruser = () => {

  // 检查是否存储了用户信息
  const hasUserInfo = store.state.isAut;

  if (!hasUserInfo) {
    // 没有存储用户信息
    router.push({ name: '/signin' });
  }
};

// function aaa() {
//   router.push("/homepage")
// };

async function log_out(){
  isOptionsVisible.value = false
  console.log("login out")
  store.commit("loginOut")

  await request.get("user/logout").then(
      res => {
        // console.log(res);
        //console.log(res.data.data.code);
        if (res.status === 200) {
          console.log("退出成功了");
        } else
          console.log("退出时出现了错误");
      }
  ).catch(err => {
    console.log(err);
    console.log("logout error");
  });
  await Cookies.remove("userTicket")
  router.push("/homepage")
  // location.reload()  //刷新当前页面
  // window.location.reload();

  // router.push("/signin")
}

async function login_init(){
  const _username = localStorage.getItem("username")
  const _email = localStorage.getItem("email")
  const access = localStorage.getItem('access')
  // console.log("localStorage", _username, access)
  if(_username!=null){
    // console.log("setUsername", _username)
    store.commit("loginIn")
    store.commit("setUsername", _username)
    store.commit("setEmail", _email)
    store.commit('setAccess', access)
  }
  let p1 = {
    userId: localStorage.getItem("currentUserId")
  }
  await request
  .get("/user/findUserUpdatHeadShot", {params: p1})
  .then(res => {
    // console.log(res)
    if(res.data.code != 1) {
      localStorage.setItem("headshot", res.data.data.headshot)
      headshot.value = res.data.data.headshot
      console.log("xxxxxxxxxxxxxxxxxxxxxx")
      console.log(headshot.value)
    }
  })
  .catch(err => {
    console.log(err)
  })

  // await request
  //     .get("/tag/getalltag")
  //     .then(res => {
  //       // console.log(res)
  //       if(res.data.code != 1) {
  //         localStorage.setItem("tagList", res.data.data)
  //         tagList.value = res.data.data
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  const p = {
    tagId : 1,
  }
  var videos = ""
  var users = ""
  var heights = []
  await request
      .get("/tagrecord/findVideoByTag", {params: p})
      .then(res => {
        videos = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log('当前页面类别' + 1)
  console.log(videos)
  store.commit("setVideosOfCategory", videos)
  localStorage.setItem("videos", JSON.stringify(videos))

  await request
      .get("/tagrecord/findUserOfVideoByTag", {params: p})
      .then(res => {
        users = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  // console.log(users)
  store.commit("setUsersOfCategory", users)

  for (var i = 0; i < videos.length; i++) {
    heights.push(380);
  }
  store.commit("setHeights", heights)

  // console.log(store.state.videos)
  // console.log(store.state.users)
  // console.log(store.state.heights)
}
// 上传视频功能

let showModal = ref(false);
let fileSelect = ref(false);

const bio = ref('');
const videoName = ref('');
const openModal = () => {
  if(userId==null){
    alert('请先登录');
    return ;
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
const isVideoChosed = ref(false);

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

// 上传视频到七牛云服务器中

let key = ref('')
async function uploadVideo(videoFile){
  let token = ''
  await request.post("/video/getVideoToken").then(res => {token = res.data})
  // console.log('jhggk',token)
  console.log(videoFile.name);
  console.log(videoFile.type);
  const uploadfilename = videoFile.name;
  key = uploadfilename;
  console.log(key);
  const observable = qiniu.upload(videoFile,key,token)
  const subscription = observable.subscribe(observer)
  console.log(subscription)

}
let selectedFile = ref('');
async function saveChanges(){

  if(videoName.value == ''){
    alert('文件名不能为空');
  }
  else  if(!isVideoChosed.value){
    alert('请上传视频');
  }
  await uploadVideo(selectedFile);
  console.log(selectedTag.value)
  console.log(videoName.value)

  let formData = new FormData();

  formData.append('videoName',videoName.value);
  formData.append('userId',userId);
  formData.append("introduction",key);
  await request
      .post('/video/uploadVideo', formData)
      .then(res =>{
        if(res.data.code !=0)
          console.log(res.data.msg)
        else {
          console.log("视频成功上传到数据库")
          console.log(res.data.msg)
          uploadvideoid.value = res.data.data.videoId
          console.log(uploadvideoid.value)
        }
      })
      .catch(error => {
        console.error(error);
      })
  await addTagRecord();
  await addVideoPage();
  closeModal();
}
function openFilePicker(){
  const fileInput = document.getElementById('upload-video-button');
  fileInput.click();
}

const handleFileChange = (event) =>  {
  selectedFile= event.target.files[0];
  validateFile(selectedFile);
  fileSelect.value = true;

  console.log(selectedFile.name);

};

const handleFileDrop= (event) =>   {
  event.preventDefault();
  selectedFile = event.dataTransfer.files[0];
  fileSelect.value = true;
  validateFile(selectedFile);
}

function validateFile(upLoadFile :File) {
  const allowedTypes = ['video/mp4', 'video/mpeg', 'video/quicktime'];
  if (allowedTypes.includes(upLoadFile.type)) {
    // 文件类型验证通过，执行上传操作
    isVideoChosed.value= true;
  } else {
    // 文件类型不符合要求，给出错误提示
    alert('请上传视频文件');
  }
}
const selectedTag =ref()
let uploadvideoid = ref()

const tagList = ref([])
async function gettaglist(){

  await request
      .get("/tag/getalltag")
      .then(res => {
        tagList.value =  res.data.data;
      })
      .catch(err => {
        console.log(err)
      });

  console.log(toRaw(tagList))
}
gettaglist()
async function addTagRecord(){
  let formData = new FormData();
  formData.append('videoId',uploadvideoid.value);
  formData.append('tagID',selectedTag.value);
  console.log(uploadvideoid.value)
  console.log(selectedTag.value)
  await request
      .post('/tagrecord/addTagrecord', formData)
      .then(res =>{
        if(res.data.code !=0)
          console.log(res.data.msg)
        else {
          console.log("tag绑定成功")
          console.log(res.data.msg)
        }
      })
      .catch(error => {
        console.error(error);
      })
}
async function addVideoPage(){
  const p = {
    videoId: uploadvideoid.value
  }

  await request
      .get('/video/addVideoPage', {params: p})
      .then(res =>{
        if(res.data.code !=0)
          console.log(res.data.msg)
        else {
          console.log("封面增加成功")
          console.log(res.data.msg)
        }
      })
      .catch(error => {
        console.error(error);
      })
}


let likesInfo = ref([]);

async function getlikesInfo(userId) {
  const p = {
    userId: userId
  }

  // console.log(p)
  await request
      .get("/user/findUserlikesstars", {params: p})
      .then(res => {
        // console.log(res)
        if(res.data.code != 1)
          likesInfo.value = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  console.log(toRaw(likesInfo.value[0]))
  store.commit("setdUsersLikeInfo", likesInfo)
  // console.log(userInfo.value.email)
}

getlikesInfo(userId)


login_init()

</script>

<style>
.common-layout{
  background-image: url(assets/banner.jpg);
}
.menu-image {
  height: 80px;
  width: 120px;
}

.el-menu-vertical-demo {
  border-right:0!important;
  background-image: url(assets/banner.jpg);
  background-size: cover;
}

.search-bar {
  margin-left: 35%;
  color: white;
  /*background-color: #2c3e50;*/
  border-radius: 5px;
  /*margin-right: 0px;*/
  width: 25%;
  display: flex;
  background-color: white;
}

el-input{
  border:none;
  border-color: #fff;;
  background-color: white;
  padding: 0 0;
  margin: 0 0;
}

.AFTy15pW {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  box-sizing: border-box;
  /*margin: 0;*/
  margin-left: 50%;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  -webkit-locale: auto;
  position: relative;
  -webkit-app-region: no-drag;
}

.zyznJl4l {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  -webkit-locale: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  align-items: center;
  display: flex;
  flex: 1 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  /*z-index: 50;*/
  -webkit-app-region: no-drag;
}
.lPytbapz {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  margin: 0;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  -webkit-locale: auto;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  height: 40px;
  width: 100%;
  /*z-index: 100;*/
  border-radius: 12px;
  -webkit-app-region: no-drag;
  background-color: var(--color-bg-b0);
  border: 2px solid hsla(0,0%,100%,.7);
}
.igFQqPKs {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  -webkit-locale: auto;
  box-sizing: border-box;
  border: none;
  caret-color: var(--color-primary);
  flex-grow: 1;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  line-height: 22px;
  margin: 0;
  outline: none;
  /*z-index: 100;*/
  -webkit-app-region: no-drag;
  color: var(--color-text-t4);
  padding: 0 12px;
  border-bottom-left-radius: 12px!important;
  border-top-left-radius: 12px!important;
  background: transparent;
}
.XClSex3D {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  margin: 0;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  -webkit-locale: auto;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  height: 40px;
  width: 100%;
  /*z-index: 100;*/
  border-radius: 12px;
  -webkit-app-region: no-drag;
  background-color: var(--color-bg-b0);
  border: 2px solid hsla(0,0%,100%,.7);
}
.rB8dMXOc {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  -webkit-locale: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  /*z-index: 50;*/
  -webkit-app-region: no-drag;
  width: 69px;
  border-bottom-right-radius: 12px!important;
  border-top-right-radius: 12px!important;
  background: transparent;
}
.FhOy97Hs {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  -webkit-locale: auto;
  cursor: pointer;
  width: 18;
  height: 18;
  fill: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: PingFang SC,DFPKingGothicGB-Regular,sans-serif;
  outline: none;
  vertical-align: middle;
  -webkit-app-region: no-drag;
}
.btn-title {
  --white: 255,255,255;
  --black: 0,0,0;
  --primary-50: 255,232,233;
  --primary-100: 255,194,198;
  --primary-200: 255,157,166;
  --primary-300: 254,119,137;
  --primary-400: 254,81,110;
  --primary-500: 255,44,85;
  --primary-600: 210,27,70;
  --primary-700: 165,14,55;
  --primary-800: 121,5,40;
  --primary-900: 77,0,25;
  --neutral-50: 249,249,249;
  --neutral-100: 242,242,243;
  --neutral-200: 228,228,230;
  --neutral-300: 201,201,204;
  --neutral-400: 146,147,153;
  --neutral-500: 92,93,102;
  --neutral-600: 78,79,89;
  --neutral-700: 65,66,76;
  --neutral-800: 51,52,63;
  --neutral-900: 37,38,50;
  --neutral-950: 22,24,35;
  --neutral-1000: 6,7,22;
  --green-50: 232,255,237;
  --green-100: 181,243,198;
  --green-200: 135,230,163;
  --green-300: 92,218,134;
  --green-400: 54,205,109;
  --green-500: 19,193,90;
  --green-600: 12,164,78;
  --green-700: 7,135,66;
  --green-800: 3,106,54;
  --green-900: 0,77,41;
  --yellow-50: 255,254,232;
  --yellow-100: 254,250,189;
  --yellow-200: 253,242,147;
  --yellow-300: 252,232,104;
  --yellow-400: 251,220,63;
  --yellow-500: 250,206,21;
  --yellow-600: 207,161,13;
  --yellow-700: 163,122,7;
  --yellow-800: 120,85,3;
  --yellow-900: 77,51,0;
  --blue-50: 232,248,255;
  --blue-100: 189,232,254;
  --blue-200: 147,214,253;
  --blue-300: 105,193,251;
  --blue-400: 63,169,250;
  --blue-500: 22,142,249;
  --blue-600: 14,110,206;
  --blue-700: 7,80,163;
  --blue-800: 3,53,120;
  --blue-900: 0,31,77;
  --dark-blue-50: 232,247,255;
  --dark-blue-100: 170,210,232;
  --dark-blue-200: 117,172,209;
  --dark-blue-300: 71,137,187;
  --dark-blue-400: 34,103,164;
  --dark-blue-500: 4,73,141;
  --dark-blue-600: 3,60,125;
  --dark-blue-700: 2,48,109;
  --dark-blue-800: 1,37,93;
  --dark-blue-900: 0,28,77;
  --purple-50: 248,232,255;
  --purple-100: 237,200,254;
  --purple-200: 224,169,253;
  --purple-300: 208,138,252;
  --purple-400: 191,107,251;
  --purple-500: 171,76,250;
  --purple-600: 130,47,207;
  --purple-700: 92,25,163;
  --purple-800: 59,9,120;
  --purple-900: 32,0,77;
  --cyan-50: 232,255,254;
  --cyan-100: 190,251,250;
  --cyan-200: 148,246,247;
  --cyan-300: 108,237,244;
  --cyan-400: 70,226,240;
  --cyan-500: 32,213,236;
  --cyan-600: 20,170,196;
  --cyan-700: 11,130,156;
  --cyan-800: 4,92,116;
  --cyan-900: 0,57,77;
  --light-green-50: 232,255,245;
  --light-green-100: 193,252,229;
  --light-green-200: 156,248,216;
  --light-green-300: 119,245,205;
  --light-green-400: 83,241,196;
  --light-green-500: 48,238,192;
  --light-green-600: 30,198,161;
  --light-green-700: 16,157,131;
  --light-green-800: 6,117,100;
  --light-green-900: 0,77,68;
  --orange-red-50: 255,241,232;
  --orange-red-100: 255,213,189;
  --orange-red-200: 255,183,147;
  --orange-red-300: 255,149,104;
  --orange-red-400: 255,113,62;
  --orange-red-500: 255,76,19;
  --orange-red-600: 210,51,12;
  --orange-red-700: 166,33,6;
  --orange-red-800: 121,18,2;
  --orange-red-900: 77,8,0;
  --orange-50: 255,247,232;
  --orange-100: 255,230,191;
  --orange-200: 255,210,151;
  --orange-300: 255,187,110;
  --orange-400: 255,162,70;
  --orange-500: 255,133,29;
  --orange-600: 210,101,18;
  --orange-700: 166,72,9;
  --orange-800: 121,47,3;
  --orange-900: 77,25,0;
  --gold-50: 255,252,232;
  --gold-100: 255,244,185;
  --gold-200: 255,233,139;
  --gold-300: 254,219,93;
  --gold-400: 254,202,46;
  --gold-500: 254,180,0;
  --gold-600: 210,143,0;
  --gold-700: 165,107,0;
  --gold-800: 121,75,0;
  --gold-900: 77,45,0;
  --header-height: 68px;
  --header-drag-height: 56px;
  --dropdown-top: 50px;
  --navigation-width: 72px;
  --navigation-fold-width: 72px;
  --navigation-expend-width: 160px;
  --swiper-theme-color: #007aff;
  --secondary-bg-color: #3c3e49;
  --secondary-bg-color-hover: #31323a;
  --color-primary: #fe2c55;
  --color-primary-hover: rgba(var(--primary-600),1);
  --color-primary-active: rgba(var(--primary-700),1);
  --color-primary-disable: rgba(var(--primary-100),.4);
  --color-primary-default: rgba(var(--primary-500),1);
  --color-secondary-default: rgba(var(--neutral-100),.08);
  --color-secondary-hover: rgba(var(--neutral-100),.12);
  --color-secondary-active: rgba(var(--neutral-100),.16);
  --color-secondary-disable: rgba(var(--neutral-100),.04);
  --color-tertiary-default: rgba(var(--white),0);
  --color-tertiary-hover: rgba(var(--white),.04);
  --color-tertiary-active: rgba(var(--white),.08);
  --color-tertiary-disable: rgba(var(--white),0);
  --color-bg-b0: rgba(var(--neutral-950),1);
  --color-bg-b1: rgba(var(--neutral-900),1);
  --color-bg-b2: rgba(var(--neutral-800),1);
  --color-bg-b3: rgba(var(--neutral-700),1);
  --color-bg-nav: rgba(var(--neutral-1000),1);
  --color-bg-toast: rgba(var(--neutral-800),1);
  --color-bg-b1-white: rgba(var(--neutral-900),1);
  --color-bg-b2-white: rgba(var(--neutral-800),1);
  --color-bg-b3-white: rgba(var(--neutral-700),1);
  --color-fill-hover: rgba(var(--neutral-100),.08);
  --color-fill-press: rgba(var(--neutral-100),.12);
  --color-fill-tag: rgba(var(--primary-500),.12);
  --color-fill-tag-grey: rgba(var(--white),.15);
  --color-fill-live: linear-gradient(131.17deg,#ff1764,#ed3495 94.15%);
  --color-fill-hot: linear-gradient(268.09deg,#f01b5b 6.38%,#ff5a44 59.9%,#ff9113 91.68%);
  --color-text-t0: rgba(var(--white),1);
  --color-text-t1: rgba(var(--white),.9);
  --color-text-t2: rgba(var(--white),.75);
  --color-text-t3: rgba(var(--white),.5);
  --color-text-t4: rgba(var(--white),.34);
  --color-text-t5: rgba(var(--white),.34);
  --color-text-t3-im: rgba(var(--white),.3);
  --color-text-live: #8ce7ff;
  --color-line-l1: rgba(var(--white),.2);
  --color-line-l2: rgba(var(--white),.16);
  --color-line-l3: rgba(var(--white),.04);
  --color-mask-m1: rgba(var(--black),.9);
  --color-mask-m2: rgba(var(--black),.2);
  --color-mask-m3: rgba(var(--black),.85);
  --color-link-yellow: rgba(var(--yellow-500),1);
  --color-link-blue: rgba(var(--dark-blur-500),1);
  --color-semantic-success: rgba(var(--green-500),1);
  --color-semantic-danger: rgba(var(--orange-red-500),1);
  --color-semantic-warning: rgba(var(--orange-500),1);
  --color-const-text-white: rgba(var(--white),1);
  --color-const-text-black: rgba(var(--black),1);
  --color-const-text-primary: rgba(var(--neutral-950),1);
  --color-const-text-white90: rgba(var(--white),.9);
  --color-const-text-white75: rgba(var(--white),.75);
  --color-const-text-white60: rgba(var(--white),.6);
  --color-const-text-white34: rgba(var(--white),.34);
  --color-const-bg-white: rgba(var(--white),1);
  --color-const-bg-white30: rgba(var(--white),.3);
  --color-const-line-white: rgba(var(--white),1);
  --color-const-line-white4: rgba(var(--white),.04);
  --color-const-line-white8: rgba(var(--white),.08);
  --color-const-line-white12: rgba(var(--white),.12);
  --color-shadow1: rgba(0,0,0,.6);
  --color-shadow2: rgba(0,0,0,.9);
  --shadow-1: 0 0 24px rgba(0,0,0,.4);
  --shadow-2: 0 0 24px rgba(0,0,0,.7);
  --mask3: rgba(0,0,0,.6);
  --color-page-none-bg: rgba(22,23,34,0);
  --color-logo: #fff;
  --logo-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-small-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY0IDEzLjQzM3YtMS4zMWMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxLTUuNjQ3IDAtMTAuMjU2IDQuNTg3LTEwLjI1NiAxMC4yNSAwIDMuNDU5IDEuNzMgNi41MzYgNC4zNzIgOC4zOTNhMTAuMTc3IDEwLjE3NyAwIDAgMS0yLjc1LTYuOTczYy4wMTgtNS41OSA0LjQ4LTEwLjE0MSAxMC4wMTgtMTAuMjY5WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0xMS44NzcgMjguMzQ1YTQuNjc1IDQuNjc1IDAgMCAwIDQuNjYzLTQuNDk3VjEuNTQ1aDQuMDhhNy4yMjYgNy4yMjYgMCAwIDEtLjEyNy0xLjQyaC01LjU3NHYyMi4zMDNhNC42NzUgNC42NzUgMCAwIDEtNC42NjQgNC40OTdjLS43ODMgMC0xLjUzLS4yLTIuMTY3LS41NDdhNC42NDQgNC42NDQgMCAwIDAgMy43ODkgMS45NjdaTTI4LjI1MSA5LjExOVY3Ljg4YTcuNjgzIDcuNjgzIDAgMCAxLTQuMjI2LTEuMjU3IDcuOTE2IDcuOTE2IDAgMCAwIDQuMjI2IDIuNDk1WiIgZmlsbD0iIzAwRkFGMCIvPjxwYXRoIGQ9Ik0yNC4wNDUgNi42MjZhNy43MjEgNy43MjEgMCAwIDEtMS45MTMtNS4wOGgtMS40OTRhNy44MzYgNy44MzYgMCAwIDAgMy40MDcgNS4wOFpNMTAuMjU1IDE3LjU4NWE0LjY3OSA0LjY3OSAwIDAgMC00LjY4MiA0LjY3OWMwIDEuODAyIDEuMDIgMy4zNSAyLjUxNCA0LjEzM2E0LjcwNyA0LjcwNyAwIDAgMS0uODkyLTIuNzMxIDQuNjc5IDQuNjc5IDAgMCAxIDQuNjgxLTQuNjhjLjQ3NCAwIC45NDguMDczIDEuMzg1LjIxOXYtNS42OGMtLjQ1Ni0uMDU1LS45MTEtLjA5MS0xLjM4NS0uMDkxaC0uMjM2djQuMzdhNC4zMjMgNC4zMjMgMCAwIDAtMS4zODUtLjIyWiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yOC4yNTIgOS4xMTl2NC4zMzNjLTIuODk2IDAtNS41NTYtLjkyOS03Ljc0Mi0yLjQ5NHYxMS4zMDZjMCA1LjY0NC00LjU5IDEwLjI1LTEwLjI1NSAxMC4yNS0yLjE4NiAwLTQuMjA4LS42OTItNS44NjYtMS44NTcgMS44NzYgMi4wMDMgNC41MzYgMy4yNzcgNy41MDUgMy4yNzcgNS42NDcgMCAxMC4yNTYtNC41ODggMTAuMjU2LTEwLjI1VjEyLjM3OGExMy4yNjkgMTMuMjY5IDAgMCAwIDcuNzQyIDIuNDk0VjkuMzAxYTkuNjE2IDkuNjE2IDAgMCAxLTEuNjQtLjE4MloiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMjAuNTEgMjIuMjY0VjEwLjk1OGExMy4yNjggMTMuMjY4IDAgMCAwIDcuNzQxIDIuNDk0VjkuMTJhNy44NSA3Ljg1IDAgMCAxLTQuMjI2LTIuNDk0IDcuNjYgNy42NiAwIDAgMS0zLjM4OC01LjA4aC00LjA4djIyLjMwM2E0LjY3NSA0LjY3NSAwIDAgMS00LjY2NCA0LjQ5NyA0LjYyNSA0LjYyNSAwIDAgMS0zLjc4OS0xLjk0OCA0LjY3OCA0LjY3OCAwIDAgMS0yLjUxNC00LjEzMyA0LjY3OSA0LjY3OSAwIDAgMSA0LjY4Mi00LjY3OWMuNDczIDAgLjk0Ny4wNzMgMS4zODQuMjE4di00LjM3Yy01LjUzOC4xMjgtMTAgNC42OC0xMCAxMC4yMzMgMCAyLjY5NCAxLjAzOCA1LjE1MiAyLjc1IDYuOTczYTEwLjIxMSAxMC4yMTEgMCAwIDAgNS44NjYgMS44NTdjNS42MjkuMDE4IDEwLjIzNy00LjU4OCAxMC4yMzctMTAuMjMyWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --logo-transparent-url: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjEyIDEwLjk4OFY5LjkxM2E5LjQ1NyA5LjQ1NyAwIDAgMC0xLjEzNi0uMDc1Yy00LjYzMSAwLTguNDEgMy43NjMtOC40MSA4LjQwNiAwIDIuODM3IDEuNDE4IDUuMzYgMy41ODUgNi44ODRhOC4zNDcgOC4zNDcgMCAwIDEtMi4yNTYtNS43MTljLjAxNS00LjU4NCAzLjY3NS04LjMxNyA4LjIxNy04LjQyMVoiIGZpbGw9IiMwMEZBRjAiLz48cGF0aCBkPSJNMTAuMzE0IDIzLjIxN2EzLjgzNCAzLjgzNCAwIDAgMCAzLjgyNC0zLjY4OFYxLjIzOGgzLjM0N0E1LjkyNyA1LjkyNyAwIDAgMSAxNy4zOC4wNzNIMTIuODF2MTguMjkxYTMuODM0IDMuODM0IDAgMCAxLTMuODI1IDMuNjg4IDMuNzM4IDMuNzM4IDAgMCAxLTEuNzc3LS40NDggMy44MDkgMy44MDkgMCAwIDAgMy4xMDcgMS42MTNaTTIzLjc0MyA3LjQ1VjYuNDMzYTYuMzAxIDYuMzAxIDAgMCAxLTMuNDY2LTEuMDMgNi40OTIgNi40OTIgMCAwIDAgMy40NjYgMi4wNDVaIiBmaWxsPSIjMDBGQUYwIi8+PHBhdGggZD0iTTIwLjI5MyA1LjQwNWE2LjMzMiA2LjMzMiAwIDAgMS0xLjU2OS00LjE2NkgxNy41YTYuNDI2IDYuNDI2IDAgMCAwIDIuNzkzIDQuMTY2Wk04Ljk4NCAxNC4zOTJhMy44MzcgMy44MzcgMCAwIDAtMy44NCAzLjgzOGMwIDEuNDc4LjgzNyAyLjc0NyAyLjA2MiAzLjM4OWEzLjg2IDMuODYgMCAwIDEtLjczMi0yLjI0IDMuODM3IDMuODM3IDAgMCAxIDMuODQtMy44MzdjLjM4OCAwIC43NzYuMDYgMS4xMzUuMTh2LTQuNjZhOS40NTUgOS40NTUgMCAwIDAtMS4xMzUtLjA3NGgtLjE5NXYzLjU4M2EzLjU0OCAzLjU0OCAwIDAgMC0xLjEzNS0uMTc5WiIgZmlsbD0iI0ZFMkM1NSIvPjxwYXRoIGQ9Ik0yMy43NDQgNy40NXYzLjU1M2MtMi4zNzUgMC00LjU1Ny0uNzYyLTYuMzUtMi4wNDZ2OS4yNzNjMCA0LjYyOC0zLjc2NCA4LjQwNi04LjQxIDguNDA2YTguMzM5IDguMzM5IDAgMCAxLTQuODEtMS41MjNjMS41MzggMS42NDMgMy43MiAyLjY4OCA2LjE1NCAyLjY4OCA0LjYzMiAwIDguNDExLTMuNzYzIDguNDExLTguNDA3di05LjI3MmExMC44ODIgMTAuODgyIDAgMCAwIDYuMzUgMi4wNDZ2LTQuNTdhNy44ODYgNy44ODYgMCAwIDEtMS4zNDUtLjE0OVoiIGZpbGw9IiNGRTJDNTUiLz48cGF0aCBkPSJNMTcuMzk0IDE4LjIzVjguOTU4YTEwLjg4MiAxMC44ODIgMCAwIDAgNi4zNSAyLjA0NVY3LjQ1YTYuNDM3IDYuNDM3IDAgMCAxLTMuNDY3LTIuMDQ2IDYuMjgyIDYuMjgyIDAgMCAxLTIuNzc5LTQuMTY2aC0zLjM0NlYxOS41M2EzLjgzNCAzLjgzNCAwIDAgMS0zLjgyNCAzLjY4OCAzLjc5MyAzLjc5MyAwIDAgMS0zLjEwOC0xLjU5OCAzLjgzNyAzLjgzNyAwIDAgMS0yLjA2MS0zLjM5IDMuODM3IDMuODM3IDAgMCAxIDMuODM5LTMuODM2Yy4zODggMCAuNzc3LjA2IDEuMTM1LjE3OXYtMy41ODRjLTQuNTQxLjEwNS04LjIwMSAzLjgzOC04LjIwMSA4LjM5MmE4LjMyIDguMzIgMCAwIDAgMi4yNTUgNS43MTggOC4zNzQgOC4zNzQgMCAwIDAgNC44MTEgMS41MjNjNC42MTYuMDE1IDguMzk2LTMuNzYyIDguMzk2LTguMzkxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMjc2IDQuOTc2SDQ1LjEydjExLjMzOGwtNy4xNS42MTh2Mi4yODhsNy4xNS0uNjAydjUuMDkzaDIuMTU2di01LjI5M2wyLjIwNS0uMlYxNS45M2wtMi4yMDYuMlY0Ljk3NlptLTEyLjMgMGgtMi4xNzJ2My4xOUgzMC4yOHYyLjE3aDIuNTIzdjQuNDI1bC0yLjUyMy4zNjh2Mi4yODdsMi41MjMtLjM2N3YzLjc5YzAgLjMwMS0uMjUxLjU1Mi0uNTUyLjU1MmgtMS44MnYyLjE3aDIuNzIyYTEuODI1IDEuODI1IDAgMCAwIDEuODIxLTEuODJ2LTUuMDFsMi4yMDYtLjMzM1YxNC4xMWwtMi4yMDYuMzM0di00LjA5aDIuMjA2VjguMTgxaC0yLjIwNlY0Ljk3NlpNMzguODcgNi41OCA0NCA3LjQ5OHYyLjI4OGwtNS4xMy0uOTAyVjYuNThaTTQ0IDEyLjI1N2wtNS4xMy0uOTE5djIuMzA1bDUuMTMuOTE4di0yLjMwNFptMjMuNDM5LTIuNzIyLS4zMzQgMS43N2g0LjI0M3YyLjEySDUyLjE4NXYtMi4xMmg0LjM0NGwtLjI4NC0xLjc3aDIuMzA1bC4yNjggMS43N2g1Ljk4bC4zNTItMS43N2gyLjI4OVptMy4zMDgtMy4wNTZoLTcuMjY4bC0uMzY3LTEuNTAzaC0yLjgyNGwuMzY4IDEuNTAzaC03Ljg3djIuMTA0aDE3Ljk2MVY2LjQ3OVptLTE1LjAwMyA4LjVINjcuNzljMS4wMTkgMCAxLjgyLjgxOSAxLjgyIDEuODJ2NC45NmMwIDEuMDAyLS44MTggMS44Mi0xLjgyIDEuODJINTUuNzQ0YTEuODI1IDEuODI1IDAgMCAxLTEuODIxLTEuODJ2LTQuOTZjMC0xLjAwMS44MTgtMS44MiAxLjgyLTEuODJabTExLjI5NCAxLjk3SDU2LjUxMmMtLjMgMC0uNTUxLjIzNS0uNTM0LjU1MnYuODg1aDExLjYxMXYtLjg4NWMwLS4zLS4yNS0uNTUxLS41NTEtLjU1MVptLTEwLjUyNiA0LjY3NmgxMC41MjZjLjMgMCAuNTM1LS4yNS41MzUtLjU1di0uOTAySDU1Ljk2di45MDFjMCAuMzAxLjI1LjU1MS41NTEuNTUxWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==) no-repeat;
  --icon-close: url(//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/icon-close-dark.svg);
  --color-xigua-tab-bg: hsla(0,0%,100%,.08);
  --color-xigua-categoryTab-color: hsla(0,0%,100%,.75);
  --color-xigua-tab-color: hsla(0,0%,100%,.75);
  --color-bg-rs: #292b35;
  --color-primary-disabled: rgba(var(--primary-100),.4);
  --color-success: rgba(var(--green-500),1);
  --color-danger: rgba(var(--orange-red-500),1);
  --color-warning: rgba(var(--orange-500),1);
  --overlay-bg: rgba(var(--neutral-100),.08);
  --overlay-bg-hover: rgba(var(--neutral-100),.12);
  --overlay-bg-active: rgba(var(--neutral-100),.16);
  --overlay-bg-disabled: rgba(var(--neutral-100),.04);
  --color-text-0: rgba(var(--white),.9);
  --color-text-1: rgba(var(--white),.75);
  --color-text-2: rgba(var(--white),.5);
  --color-text-3: rgba(var(--white),.34);
  --color-text-4: rgba(var(--white),.34);
  --color-text-0-hover: rgba(var(--white),1);
  --color-border: rgba(var(--white),.2);
  --mask1: rgba(var(--black),.9);
  --mask2: rgba(var(--black),.9);
  --mask-video: rgba(var(--black),.2);
  --color-card-border: rgba(var(--white),.16);
  --color-bg-0: rgba(var(--neutral-900),1);
  --color-bg-1: rgba(var(--neutral-800),1);
  --color-bg-2: rgba(var(--neutral-700),1);
  --color-bg-3: rgba(var(--neutral-700),1);
  --color-navigation-bg: rgba(var(--neutral-1000),1);
  --color-page-bg: rgba(var(--neutral-950),1);
  --color-anti-white: rgba(var(--white),1);
  --color-bg-panel-drawer: rgba(var(--neutral-800),1);
  --color-bg-skeleton-stroke: rgba(var(--white),.04);
  --card-bg-0: rgba(var(--neutral-900),1);
  --card-bg-0-hover: rgba(var(--neutral-800),1);
  --linear-gradient-bg-1: linear-gradient(90deg,hsla(0,0%,99%,.06),hsla(0,0%,96%,0));
  --linear-gradient-bg-top: linear-gradient(90deg,#323f5a,rgba(50,63,90,0) 100%);
  --linear-gradient-bg-num: linear-gradient(90deg,#403a3a,rgba(64,58,58,0) 100%);
  --collect-btn-bg: #363741;
  --collect-btn-bg-hover: hsla(0,0%,100%,.25);
  --collect-btn-bg-active: #2b2c34;
  --icon-color: hsla(0,0%,100%,.2);
  --modal-mask1: rgba(0,0,0,.85);
  --bgbg-input: hsla(0,0%,100%,.35);
  --down-input: hsla(0,0%,100%,.3);
  --btn-color: #fff;
  --down-text-color: #fff;
  --notice-header-bg-start: #20202b;
  --notice-header-bg-end: rgba(32,32,43,0);
  --im-header-bg-start: #20202b;
  --im-header-bg-end: rgba(32,32,43,0);
  --im-shareList-bg-start: #252632;
  --im-shareList-bg-end: rgba(37,38,50,0);
  --im-swipper-mask-end: rgba(37,38,50,0);
  --container-background: linear-gradient(180deg,#060716 80%,#06071600);
  --color-secondary-default-2: rgba(54,55,65,.4);
  --divider-background: linear-gradient(180deg,rgba(6,7,22,.6),rgba(6,7,22,0));
  -webkit-locale: auto;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  -webkit-app-region: no-drag;
  font-family: PingFang SC,DFPKingGothicGB-Medium,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  user-select: none;
  margin-left: 3px;
  color: #fff;
}
.search-button {
  margin-top: 0px; 
  display: inline;
  position: relative;
  width: 30%;
}
/*.search-button:hover {*/
/*  color: black;*/
/*  background: white;*/
/*  border-color: white;*/
/*}*/

.upload-button {
  /*margin-left: 3%;*/
  margin-left: 10%;
}
.login-button {
  /*width: 50px;*/
  /*height: 50px;*/
  border-radius: 50%;
  margin-left: 2%;
  /*background-color: red;*/
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 2%;
  /*background-color: red;*/
}
.options-box {
  /*width: 100px;*/
  height: 80px;
  margin-left: 90%;
  width: 100px;
  color: #475669;
  background-color: #475669; /* 背景颜色 */
  border-radius: 8px; /* 圆角半径 */
  padding: 2px; /* 内边距，用于放置文本 */
  position: relative;
  z-index: 100;
}
.header {
  /*z-index: 5;*/
  position: relative;
}
.options-box .el-menu-item:hover {
  background-color: #475669; /* 设置悬停时的背景颜色 */
}
.el-aside {
  overflow: hidden;

}

.search-bar {
  width: 80%;
  /*display: flex;*/
}

.search-input {
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  /*margin-right: 0px;*/
  width: 50%;
}

.search-button {
  color: white;
  background-color: #2c3e50;
  border-color: #2c3e50;
  /*margin-left: 0px;*/
}
.search-button:hover {
  color: black;
  background: white;
  border-color: white;
}


//发布视频界面
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
  height: 450px;
  width: 480px;

}

.modal-content input,
.modal-content textarea {
  width: 100%;
  margin-bottom: 10px;
}



.close-button {
  position: absolute;
  top: 130px;
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
.tag-content{
  margin-top: 4px;
  //position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.tag-content select {

  font-family: Arial, sans-serif;
  //border: 1px solid #ccc;
  border: none;
  position: relative;
  width: 83%;
  display: flex;
  padding: 10px;
//justify-content: center;
  height: 40px;
  line-height: 32px;
  background: #33343f;
//border: none;
  border-radius: 4px;
  caret-color: #cccccc;
  color: #cccccc;
  font-size: 14px;
  outline: none;
//padding-left: 8px;
//width: 80%
}


.layui-upload-drag{
  position: relative;
  display: inline-block;
  padding: 30px;
//border: 1px dashed #e2e2e2;
  background: #33343f;
  text-align: center;
  cursor: pointer;
  color: #999;
  height: 160px;
  width: 70%;
  order-radius: 4px;
}

</style>
