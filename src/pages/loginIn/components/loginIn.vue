<template>
  <div style="text-align: -webkit-center">
    <el-form :model="user" label-width="120px" style="width: max-content">
      <el-form-item label="邮箱:">
        <el-input
            v-model="user.email"
            placeholder="请输入邮箱"
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
  email: "",
  password: "",
});

function loginIn() {
  // router.push('/datasetPreview')
  if (verificationCode.value.verificateFlag() === true) {
    let temp = {
      code: verificationCode.value.verCode,
      email: user.email,
      password: user.password,
    };
    console.log(temp);
    // console.log("登录访问验证码session" + JSON.parse(sessionStorage.getItem("captcha")));
    request
        .post("/user/login", temp)
        .then((res) => {
          console.log(res)
          if (res.data.msg === "登录成功！") {
            console.log("登录成功！")
            const userInfo = res.data.data.user
            let access = userInfo.authority
            console.log(userInfo)
            localStorage.setItem("userId", userInfo.userId)
            // store.commit('setUserId', userInfo.userId)
            store.commit("loginIn");
            store.commit("setEmail", userInfo.email)
            store.commit('setUsername', userInfo.username)
            store.commit('setAccess', access)
            // if (store.state.isAut === true) {
            //   alert("登录成功！");
            router.push('homepage')
            // }
          } else if (res.data.msg==="用户不存在！"){
            alert("用户不存在！")
            verificationCode.value.getCode()
          } else if(res.data.msg==="密码错误！"){
            alert("密码错误!")
            verificationCode.value.getCode()
          } else if(res.data.msg==="验证码错误！"){
            alert("验证码错误!")
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