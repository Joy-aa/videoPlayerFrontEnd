<template>
  <el-form
      ref="register"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      style="width: 420px;margin-left: 33%"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" placeholder="请输入邮箱"/>
    </el-form-item >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" placeholder="请输入用户名"/>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码"/>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
          v-model="ruleForm.checkPass"
          type="password"
          placeholder="请确认密码"
      />
    </el-form-item>

    <el-form-item label="权限等级" prop="Authority">
      <el-select v-model="ruleForm.authority" class="m-2" placeholder="user" size="large" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="验证码" >
<!--      <el-input v-model="ruleForm.verificationCode" />-->
      <verification-code ref="verificationCode" placeholder="请输入验证码"></verification-code>
    </el-form-item>
<!--    <verification-phone ref="verificationCode"/>-->
    <el-form-item>
      <el-button type="primary" @click="userRegister">注册</el-button>
<!--      <el-button @click="resetForm(register)">Reset</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {router} from '@/router'
import type {FormInstance} from "element-plus";
import request from '../../../api'
import VerificationPhone from "./verificationEmail.vue";
import VerificationCode from "./verificationCode.vue";
import axios from "axios";
const verificationCode=ref()
const register = ref<FormInstance>();

const checkUsername = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入用户名"));
  } else {
    value = value.toString();
    if (value.length > 20) return callback(new Error("用户名太长！"));
    return callback();
  }
};

const checkEmail = (rule: any, value: any, callback: any) => {
  let emailString = value.toString();
  if (!value) {
    callback(new Error("请输入邮箱"));
  }
  // setTimeout(() => {
  //   if (!Number.isInteger(value)) {
  //     callback(new Error("请输入数字"));
  //   } else {
  //     console.log(emailString.length);
  //     if (emailString.length !== 11) {
  //       callback(new Error("手机号必须为11位数字！"));
  //     } else {
  //       callback();
  //     }
  //   }
  // }, 300);
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!register.value) return;
      register.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入的密码不同！"));
  } else {
    callback();
  }
};

const checkVerificationCode =(rule:any,value:any,callback:any)=>{
  if(!value){
    callback(new Error("请输入验证码"))
  }else{
    ruleForm.verificationCode=verificationCode.value.verCode
    if(verificationCode.value.verificateFlag()) return callback()
    return callback(new Error("验证码错误!"))
  }
}
const options=[
  {
    value: 0,
    label: '用户',
  },
  {
    value: 1,
    label: '管理员',
  }
  // ,
  // {
  //   value: 2,
  //   label: 'root',
  // }
]
const ruleForm = reactive({
  email: "",
  username: "",
  pass: "",
  checkPass: "",
  verificationCode:"",
  authority:0
});

const rules = reactive({
  email: [{validator: checkEmail, trigger: "blur"}],
  pass: [{validator: validatePass, trigger: "blur"}],
  checkPass: [{validator: validatePass2, trigger: "blur"}],
  username: [{validator: checkUsername, trigger: "blur"}],
  verificationCode: [{validator: checkVerificationCode, trigger: "blur"}]
});

function userRegister() {
  if(!verificationCode.value.verificateFlag()){
    let formInstance = new FormData()
    formInstance.append('authority','214')
    console.log(formInstance)
    console.log(formInstance.get('authority'))
    alert("验证码错误！")
    return false
  }

  console.log("submit!");
  let formInstance = new FormData()
  formInstance.append('email',ruleForm.email)
  formInstance.append('username',ruleForm.username)
  formInstance.append('password',ruleForm.pass)
  formInstance.append('authority',ruleForm.authority.toString())
  formInstance.append('code',verificationCode.value.verCode)
  const instance = axios.create({
    baseURL:'/api',
    //baseURL:'http://localhost:7667',
    timeout:1000,
    headers:{'Content-Type':'multipart/form-data;charset=utf-8'}
  })
  instance
      .post('/user/register',formInstance)
      .then(res=>{
        console.log("结果:")
        console.log(res)
        if (res.data.msg == "注册失败！用户名为空")
          alert("注册失败！用户名为空")
        else if (res.data.msg == "注册失败！密码为空")
          alert("注册失败！密码为空")
        else if (res.data.msg == "注册失败！邮箱为空")
          alert("注册失败！邮箱为空")
        else if (res.data.msg == "验证码错误！")
          alert("验证码错误！")
        else if (res.data.msg == "注册失败！邮箱已存在")
          alert("注册失败！邮箱已存在")
        else if (res.data.msg == "注册成功！") {
          alert("注册成功！")
          // router.push('/login')
        }
      })
      .catch(err=>{
        console.log("出错了:")
        console.log(err)
      })

}

// const resetForm = (formEl: FormInstance | undefined) => {
//   console.log(ruleForm)
//   if (!formEl) return;
//   formEl.resetFields();
// };
</script>