<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
            mode="horizontal"
            background-color="#7951B0"
            text-color="#fff"
            active-text-color="#ffd04b"
            :ellipsis="false"
            router="router"
        >
          <el-menu-item index="homepage" style="font-size: 15px">主页</el-menu-item>
          <el-menu-item index="datasetPreview" style="font-size: 15px">数据集介绍及管理</el-menu-item>
          <el-menu-item index="Algorithm" style="font-size: 15px">算法选择式入口</el-menu-item>
          <el-menu-item index="document" style="font-size: 15px">使用文档</el-menu-item>
<!--          <el-menu-item index="dam3d">三维结果展示</el-menu-item>-->
          <div class="flex-grow" />
          <el-menu-item v-if="!store.state.isAut" class="right" index="signin" style="font-size: 15px">登录 / 注册</el-menu-item>
          <el-sub-menu v-else class="right">
            <template #title>{{store.state.username}}</template>
            <el-menu-item index="user" style="font-size: 15px">个人信息</el-menu-item>
            <el-menu-item index="" @click="login_out" style="font-size: 15px">退出登陆</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >Confirm</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" >
import {ref} from "vue";
import store from './store'
import request from "@/api";
import {router} from "@/router";
import Cookies from 'js-cookie'



function login_out(){
  console.log("login out")
  store.commit("loginOut")
  Cookies.remove("userTicket")
  // router.push('/')
  // router.go(0)
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


<style lang="css" scoped>
.holly-title{
  font-size: 15px
}
.flex-grow {
  flex-grow: 1;
}
.el-header {
  position: sticky;
  top: 0;
  padding: 0;
  margin: 0;
}
.el-menu {
  padding: 0;
  margin: 0;
  padding-inline: 40px;
  //border: 0;
  text-align: left;
  /*border: 5px solid #000000;*/
}
.el-sub-menu {
  padding: 0;
  margin: 0;
  //border: 0;
  text-align: left;
  /*border: 5px solid #000000;*/
}
.el-menu-item{
}
.el-main {
  padding: 0;
  margin: 0;
  background-color: white;
  /*background-image: linear-gradient(transparent,#fff 100%), url("http://10.214.242.155:7667/img/background/background_purple.jpg");*/
}
.right{
  /*position: absolute;*/
  right: 0;
  /*margin-inline: 20px;*/
  /*display: flex;*/
}
.common-layout{
  height: 100%;
}
.el-container,
.el-menu,
.el-main {
  height: 100%;
}
/* <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>