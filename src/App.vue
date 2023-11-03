<template>
  <div class="common-layout" style="background-color: #2c3e50">
    <el-container>
      <el-aside class="el-aside" style="width:120px;">
        <img class="menu-image" src="./assets/img.png" alt="Your Image">

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

              <el-button class="upload-button" :icon="Upload" @click="uploadbuttonclick">发布</el-button>
<!--                  <el-button v-if="!store.state.isAut" index="/signin" style="font-size: 15px;">登录 / 注册</el-button>-->
<!--                  <el-button v-if="store.state.isAut" index="user" style="font-size: 15px;">{{store.state.username}}</el-button>-->

              <el-button
                  router="router" v-if="!store.state.isAut" class="login-button" @click="login_signin" style="font-size: 15px;">登录 / 注册
              </el-button>
              <el-image v-else :src="avatar_url" class="avatar" ></el-image>
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
import {ref} from "vue";
import store from './store'
import request from "@/api";
import Cookies from 'js-cookie'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import avatar_url from '@/assets/img.png'
import { useRoute, useRouter } from 'vue-router';
const activeMenu = ref('/');
const route = useRoute();
const router = useRouter();

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
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log('当前页面类别' + index)
  console.log(videos)
  store.commit("setVideosOfCategory", videos)

  await request
      .get("/tagrecord/findUserOfVideoByTag", {params: p})
      .then(res => {
        users = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log('当前页面类别' + index)
  console.log(users)
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
        console.log(res);
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
  console.log("localStorage", _username, access)
  if(_username!=null){
    console.log("setUsername", _username)
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

  await request
      .get("/tagrecord/findUserOfVideoByTag", {params: p})
      .then(res => {
        users = res.data.data
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      });
  console.log(users)
  store.commit("setUsersOfCategory", users)

  for (var i = 0; i < videos.length; i++) {
    heights.push(Math.floor(Math.random()*200) + 280);
  }
  store.commit("setHeights", heights)

  console.log(store.state.videos)
  console.log(store.state.users)
  console.log(store.state.heights)
}
login_init()

</script>

<style>

.menu-image {
  height: 80px;
  width: 120px;
}
.el-menu-vertical-demo {
  border-right:0!important;
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
</style>
