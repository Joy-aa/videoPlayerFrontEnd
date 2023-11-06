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

              <el-menu-item style="color: white" @click="handleMenuSelect(1)">
                <i class="el-icon-menu"></i>
                <span>首页</span>
              </el-menu-item>

              <template v-if="userId != null">
              <router-link :to="`/userpage/${userId}`">
              <el-menu-item style="color: white" >
                <i class="el-icon-document"></i>
                <span>我的</span>
              </el-menu-item>
              </router-link>
              </template>
              <template v-else>
                <router-link :to="`/notloginpage/`">
                  <el-menu-item style="color: white" >
                    <i class="el-icon-document"></i>
                    <span>我的</span>
                  </el-menu-item>
                </router-link>
              </template>

              <el-menu-item style="color: white" @click="handleMenuSelect(2)">
                <i class="el-icon-document"></i>
                <span>推荐</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(3)">
                <i class="el-icon-document"></i>
                <span>本地</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(4)">
                <i class="el-icon-setting"></i>
                <span>知识</span>
              </el-menu-item>

              <el-menu-item style="color: white" @click="handleMenuSelect(5)">
                <i class="el-icon-menu"></i>
                <span>娱乐</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(6)">
                <i class="el-icon-document"></i>
                <span>游戏</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(7)">
                <i class="el-icon-document"></i>
                <span>二次元</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(8)">
                <i class="el-icon-setting"></i>
                <span>美食</span>
              </el-menu-item>

              <el-menu-item style="color: white" @click="handleMenuSelect(9)">
                <i class="el-icon-menu"></i>
                <span>体育</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(10)">
                <i class="el-icon-document"></i>
                <span>时尚</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(11)">
                <i class="el-icon-document"></i>
                <span>财经</span>
              </el-menu-item>
              <el-menu-item style="color: white" @click="handleMenuSelect(12)">
                <i class="el-icon-setting"></i>
                <span>健康</span>
              </el-menu-item>

            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <div class="container" style="margin-top: 20px">
            <el-row align="middle">
              <div class="search-bar">
                <el-input v-model="searchcontent" type="text" class="search-input" style="display: inline"/>
                <el-button router="router" class="search-button" :icon="Search" style="display: inline" @click="searchbuttonclick">搜索</el-button>
              </div>

              <el-button class="upload-button" :icon="Upload" @click="openModal">发布</el-button>
              <div v-if="showModal" class="edit-modal">
                <div class="modal-content">
                  <div class = "close-button">
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36" @click="closeModal">
                      <path d="M24.601 24.6a1.362 1.362 0 01-1.927 0L18.5 20.427l-4.174 4.175a1.362 1.362 0 01-1.927-1.927l4.174-4.174-4.174-4.175a1.362 1.362 0 011.927-1.926l4.174 4.174 4.174-4.174a1.362 1.362 0 111.927 1.927L20.427 18.5l4.174 4.174a1.362 1.362 0 010 1.927z" fill="#fff" fill-opacity="0.8"></path>
                    </svg>
                    <!--            <button  @click="closeModal" >x</button>-->
                  </div>

                  <h3  style="color: white; margin-left: 45px;">上传视频</h3>
                  <!--            修改头像-->
                  <div >
                    <div class="head-model">

                      <div class="layui-upload-drag" @click="openFilePicker" @dragover.prevent @drop="handleFileDrop"  >
                        <input type="file"  @change="handleFileChange" id = "upload-video-button" style="display: none" required>
                        <p>点击上传，或将文件拖拽到此处</p>
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
<!--                  <el-button v-if="store.state.isAut" index="user" style="font-size: 15px;">{{store.state.username}}</el-button>-->
              <el-button
                  router="router" v-if="!store.state.isAut" class="login-button" @click="login_signin" style="font-size: 15px;">登录 / 注册
              </el-button>
              <el-image v-else :src="avatar_url" @click="login_out" class="avatar" ></el-image>
<!--                <el-menu-->
<!--                    mode="horizontal"-->
<!--                    :ellipsis="false"-->
<!--                    router="router"-->
<!--                    default-active="1"-->
<!--                    class="el-menu-vertical-demo"-->
<!--                    @open="handleOpen"-->
<!--                    @close="handleClose"-->
<!--                    background-color="#2c3e50"-->
<!--                    text-color="#fff"-->
<!--                    active-text-color="#ffd04b">-->
<!--                  <el-menu-item v-if="!store.state.isAut" class="right" index="/signin" style="font-size: 15px;">登录 / 注册</el-menu-item>-->
<!--                  <el-menu-item v-else class="right">-->
<!--                    <template #title>{{store.state.username}}</template>-->
<!--&lt;!&ndash;                    <el-menu-item index="user" style="font-size: 15px">个人信息</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-menu-item index="" @click="login_out" style="font-size: 15px">退出登陆</el-menu-item>&ndash;&gt;-->
<!--                  </el-menu-item>-->
<!--                </el-menu>-->
            </el-row>
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

const searchcontent = ref("请搜索")
async function searchbuttonclick() {
  console.log(searchcontent.value)
  const p = {
    content: searchcontent.value
  }
  var relatedusers = ""
  await request
      .get("/user/findUsers", {params: p})
      .then(res => {
        relatedusers = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log(relatedusers)
  store.commit("setRelatedUsers", relatedusers)

  var relatedvideos = ""
  await request
      .get("/video/findVideoByName", {params: p})
      .then(res => {
        relatedvideos = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log(relatedvideos)
  store.commit("setRelatedVideos", relatedvideos)

  router.push("/searchpage")
}

function uploadbuttonclick() {
// 处理按钮点击事件
}

function login_signin() {
  if (!store.state.isAut)
    router.push("/signin")
  // else
  //   router.push("/userinfo")
}

async function handleMenuSelect(index) {
  console.log("父组件" + index)
  activeMenu.value = index;
  const p = {
    tagId : index,
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
  // console.log('当前页面类别' + index)
  // console.log(users)
  store.commit("setUsersOfCategory", users)

  for (var i = 0; i < videos.length; i++) {
    heights.push(Math.floor(Math.random()*200) + 280);
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
  // else {
  //   // 存储了用户信息
  //   router.push({ name: '/user' });
  // }
};

function login_out(){
  console.log("login out")
  store.commit("loginOut")
  Cookies.remove("userTicket")
  request.get("user/logout").then(
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
  location.reload()  //刷新当前页面
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
    heights.push(Math.floor(Math.random()*200) + 280);
  }
  store.commit("setHeights", heights)

  // console.log(store.state.videos)
  // console.log(store.state.users)
  // console.log(store.state.heights)
}
// 上传视频功能

const showModal = ref(false);
// const selectedFile = ref(null);

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

// 上传头像到七牛云服务器中，其中头像以 userid命名。

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
  closeModal();
}
function openFilePicker(){
  const fileInput = document.getElementById('upload-video-button');
  fileInput.click();
}

const handleFileChange = (event) =>  {
  selectedFile= event.target.files[0];
  validateFile(selectedFile);

};

const handleFileDrop= (event) =>   {
  event.preventDefault();
  selectedFile = event.dataTransfer.files[0];
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
.search-input {
  margin-left: 60%;
}

.upload-button {
  /*margin-left: 3%;*/
  margin-left: 3%;
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
