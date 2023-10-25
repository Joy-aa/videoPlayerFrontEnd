<template>
  <div style="text-align: -webkit-center">
    <el-form :model="user" label-width="120px" style="width: max-content">
      <el-form-item label="账号:">
        <el-input
            v-model="user.username"
            placeholder="请输入用户名/手机号"
            clearable
        />
      </el-form-item>
      <el-form-item label="密码:">
        <el-input
            v-model="user.password"
            type="password"
            show-password
            placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item label="验证码：">
        <verification-code ref="verificationCode"/>
      </el-form-item>
      <el-form-item style="margin-left: 120px">
        <el-button type="primary" @click="loginIn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {router} from "@/router";
import {useStore} from "vuex";
import VerificationCode from "./verificationCode.vue";
import request from "@/api";

const verificationCode = ref();
const store = useStore();
let user = reactive({
  code: "",
  username: "",
  password: "",
});

function loginIn() {
  // router.push('/datasetPreview')
  if (verificationCode.value.verificateFlag() === true) {
    let temp = {
      code: verificationCode.value.verCode,
      username: user.username,
      password: user.password,
    };
    console.log(temp);
    // console.log("登录访问验证码session" + JSON.parse(sessionStorage.getItem("captcha")));
    request
        .post("/user/login", temp)
        .then((res) => {
          console.log(res)
          if (res.data.msg === "登陆成功") {
            console.log("登陆成功")
            const userInfo = res.data.data.userInfo
            let access = userInfo.authority
            store.commit("loginIn");
            store.commit("setAccount", user.username)
            store.commit('setAccess', access)
            store.commit('setPhone', userInfo.telephone)
            // if (store.state.isAut === true) {
            //   alert("登录成功！");
            router.push('homepage')
            // }
          } else if (res.data.msg==="用户不存在"){
            alert("用户不存在！")
            verificationCode.value.getCode()
            console.log(res);
          }else if(res.data.msg==="用户名或密码错误"){
            alert("用户名或密码错误!")
            verificationCode.value.getCode()
          }
        })
        .catch((err) => {
          console.log((err));
        });
  } else {
    alert("验证码错误");
  }
}
</script>

<style scoped>
</style>