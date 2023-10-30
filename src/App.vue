<template xmlns:el-row="http://www.w3.org/1999/html">
  <div class="common-layout" style="background-color: #2c3e50">
    <el-container>
      <el-aside class="el-aside" style="width:120px;">
        <img class="menu-image" src="./assets/img.png" alt="Your Image">

        <el-row>
          <el-col>

            <el-menu
                default-active="1"
                router="router"
                class="el-menu-vertical-demo"
                @select="handleMenuSelect"
                @open="handleOpen"
                @close="handleClose"
                background-color="#2c3e50"
                text-color="#fff"
                active-text-color="#ffd04b">

              <el-menu-item index="/homepage/首页">
                <i class="el-icon-menu"></i>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="/homepage/推荐">
                <i class="el-icon-document"></i>
                <span>推荐</span>
              </el-menu-item>
              <el-menu-item index="/homepage/本地">
                <i class="el-icon-document"></i>
                <span>本地</span>
              </el-menu-item>
              <el-menu-item index="/homepage/知识">
                <i class="el-icon-setting"></i>
                <span>知识</span>
              </el-menu-item>

              <el-menu-item index="/homepage/娱乐">
                <i class="el-icon-menu"></i>
                <span>娱乐</span>
              </el-menu-item>
              <el-menu-item index="/details/游戏">
                <i class="el-icon-document"></i>
                <span>游戏</span>
              </el-menu-item>
              <el-menu-item index="/details/二次元">
                <i class="el-icon-document"></i>
                <span>二次元</span>
              </el-menu-item>
              <el-menu-item index="/details/美食">
                <i class="el-icon-setting"></i>
                <span>美食</span>
              </el-menu-item>

              <el-menu-item index="/details/体育">
                <i class="el-icon-menu"></i>
                <span>体育</span>
              </el-menu-item>
              <el-menu-item index="/details/时尚">
                <i class="el-icon-document"></i>
                <span>时尚</span>
              </el-menu-item>
              <el-menu-item index="/details/财经">
                <i class="el-icon-document"></i>
                <span>财经</span>
              </el-menu-item>
              <el-menu-item index="/details/健康">
                <i class="el-icon-setting"></i>
                <span>健康</span>
              </el-menu-item>

              <el-menu-item index="/details/体育">
                <i class="el-icon-menu"></i>
                <span>体育</span>
              </el-menu-item>
              <el-menu-item index="/details/时尚">
                <i class="el-icon-document"></i>
                <span>时尚</span>
              </el-menu-item>
              <el-menu-item index="/details/财经">
                <i class="el-icon-document"></i>
                <span>财经</span>
              </el-menu-item>
              <el-menu-item index="/details/健康">
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
            <el-row>
              <el-col :span="4">
                <div class="search-bar">
                  <el-input type="text" class="search-input" style="display: inline" placeholder="搜索..."/>
                  <el-button class="search-button" :icon="Search" style="display: inline" @click="searchbuttonclick">搜索</el-button>
                </div>
              </el-col>

              <el-col :span="4">
                <div>
                  <el-button class="upload-button" :icon="Upload" style="display: inline" @click="uploadbuttonclick">发布</el-button>
                </div>
              </el-col>

<!--                  <el-button v-if="!store.state.isAut" index="/signin" style="font-size: 15px;">登录 / 注册</el-button>-->
<!--                  <el-button v-if="store.state.isAut" index="user" style="font-size: 15px;">{{store.state.username}}</el-button>-->
              <el-col :span="4">
                <div>
                  <el-menu
                      mode="horizontal"
                      :ellipsis="false"
                      router="router"
                      default-active="1"
                      class="el-menu-vertical-demo"
                      @open="handleOpen"
                      @close="handleClose"
                      background-color="#2c3e50"
                      text-color="#fff"
                      active-text-color="#ffd04b">
                    <el-menu-item v-if="!store.state.isAut" class="right" index="/signin" style="font-size: 15px;">登录 / 注册</el-menu-item>
                    <el-sub-menu v-else class="right">
                      <template #title>{{store.state.username}}</template>
                      <el-menu-item index="user" style="font-size: 15px">个人信息</el-menu-item>
                      <el-menu-item index="" @click="login_out" style="font-size: 15px">退出登陆</el-menu-item>
                    </el-sub-menu>
                  </el-menu>
                </div>
              </el-col>
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

function searchbuttonclick() {
// 处理按钮点击事件
}
function uploadbuttonclick() {
// 处理按钮点击事件
}
import { useRoute, useRouter } from 'vue-router';
const activeMenu = ref('/');
const route = useRoute();
const router = useRouter();

const handleMenuSelect = (index) => {
  activeMenu.value = index;
  router.push(index);
};

const ifsignoruser = () => {

  // 检查是否存储了用户信息
  const hasUserInfo = store.state.isAut;

  if (!hasUserInfo) {
    // 没有存储用户信息
    router.push({ name: '/signin' });
  } else {
    // 存储了用户信息
    router.push({ name: '/user' });
  }
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
function login_init(){
  const _username = localStorage.getItem("username")
  const access = localStorage.getItem('access')
  console.log("localStorage", _username, access)
  if(_username!=null){
    console.log("setAccount", _username)
    store.commit("loginIn")
    store.commit("setAccount", _username)
    store.commit('setAccess', access)
  }
}
login_init()
</script>
<style>
.upload-siginin-group {
  flex-direction: row;
}
/*.container {*/
/*  !*display: flex; !* 使用弹性布局，元素水平排列在同一行 *!*!*/
/*  align-items: center; !* 垂直居中对齐按钮和菜单 *!*/
/*}*/
.menu-image {
  height: 80px;
  width: 120px;
}
.el-menu-vertical-demo {
  border-right:0!important;
}

.el-aside {
  overflow: hidden;
}
.search-bar {
  /*width: 80%;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*!*bottom: 0;*!*/
  /*left: 50%;*/
  /*right: 0;*/
  /*margin: auto;*/
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

<!--<style lang="css" scoped>-->
<!--.holly-title{-->
<!--  font-size: 15px-->
<!--}-->
<!--.flex-grow {-->
<!--  flex-grow: 1;-->
<!--}-->
<!--.el-header {-->
<!--  position: sticky;-->
<!--  top: 0;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--}-->
<!--.el-menu {-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  padding-inline: 40px;-->
<!--  //border: 0;-->
<!--  text-align: left;-->
<!--  /*border: 5px solid #000000;*/-->
<!--}-->
<!--.el-sub-menu {-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  //border: 0;-->
<!--  text-align: left;-->
<!--  /*border: 5px solid #000000;*/-->
<!--}-->
<!--.el-menu-item{-->
<!--}-->
<!--.el-main {-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  background-color: white;-->
<!--  /*background-image: linear-gradient(transparent,#fff 100%), url("http://10.214.242.155:7667/img/background/background_purple.jpg");*/-->
<!--}-->
<!--.right{-->
<!--  /*position: absolute;*/-->
<!--  right: 0;-->
<!--  /*margin-inline: 20px;*/-->
<!--  /*display: flex;*/-->
<!--}-->
<!--.common-layout{-->
<!--  height: 100%;-->
<!--}-->
<!--.el-container,-->
<!--.el-menu,-->
<!--.el-main {-->
<!--  height: 100%;-->
<!--}-->
<!--/* <style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--*/-->
<!--/*#app {*/-->
<!--/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/-->
<!--/*  -webkit-font-smoothing: antialiased;*/-->
<!--/*  -moz-osx-font-smoothing: grayscale;*/-->
<!--/*  text-align: center;*/-->
<!--/*  color: #2c3e50;*/-->
<!--/*}*/-->
<!--</style>-->