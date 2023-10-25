<template>
  <el-form
      ref="register"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
  >
    <el-form-item label="用户名" prop="account">
      <el-input v-model="ruleForm.account"/>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password"/>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
          v-model="ruleForm.checkPass"
          type="password"
      />
    </el-form-item>
    <el-form-item label="手机号" prop="phoneNumber">
      <el-input v-model.number="ruleForm.phoneNumber"/>
    </el-form-item >
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
      <verification-code ref="verificationCode"></verification-code>
    </el-form-item>
<!--    <verification-phone ref="verificationCode"/>-->
    <el-form-item>
      <el-button type="primary" @click="submitForm(register)">注册</el-button>
<!--      <el-button @click="resetForm(register)">Reset</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {router} from '@/router'
import type {FormInstance} from "element-plus";
import request from '../../../api'
import VerificationPhone from "./verificationPhone.vue";
import VerificationCode from "./verificationCode.vue";
import axios from "axios";
const verificationCode=ref()
const register = ref<FormInstance>();

const checkAccount = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入用户名"));
  } else {
    value = value.toString();
    if (value.length > 20) return callback(new Error("用户名太长！"));
    return callback();
  }
};

const checkPhoneNumber = (rule: any, value: any, callback: any) => {
  let phoneString = value.toString();
  if (!value) {
    callback(new Error("请输入手机号"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("请输入数字"));
    } else {
      console.log(phoneString.length);
      if (phoneString.length !== 11) {
        callback(new Error("手机号必须为11位数字！"));
      } else {
        callback();
      }
    }
  }, 300);
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
  account: "",
  pass: "",
  checkPass: "",
  phoneNumber: "",
  verificationCode:"",
  authority:0
});

const rules = reactive({
  pass: [{validator: validatePass, trigger: "blur"}],
  checkPass: [{validator: validatePass2, trigger: "blur"}],
  phoneNumber: [{validator: checkPhoneNumber, trigger: "blur"}],
  account: [{validator: checkAccount, trigger: "blur"}],
  verificationCode: [{validator: checkVerificationCode, trigger: "blur"}]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl){
    console.log("直接返回")
    return;
  }
  if(!verificationCode.value.verificateFlag()){
    let formInstance = new FormData()
    formInstance.append('authority','214')
    console.log(formInstance)
    console.log(formInstance.get('authority'))
    alert("验证码错误！")
    return false
  }
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      let formInstance = new FormData()
      formInstance.append('authority',ruleForm.authority.toString())
      formInstance.append('code',verificationCode.value.verCode)
      formInstance.append('password',ruleForm.pass)
      formInstance.append('telephone',ruleForm.phoneNumber)
      formInstance.append('username',ruleForm.account)
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
            router.push('/login')
          })
          .catch(err=>{
            console.log("出错了:")
            console.log(err)
          })
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

// const resetForm = (formEl: FormInstance | undefined) => {
//   console.log(ruleForm)
//   if (!formEl) return;
//   formEl.resetFields();
// };
</script>