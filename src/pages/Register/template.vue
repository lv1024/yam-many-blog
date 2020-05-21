<template>
  <div id="register">
    <div class="register-main">
      <h2>注册</h2>
      <input v-model="username" placeholder="请输入用户名">
      <input v-model="password1" type="password" placeholder="请输入密码" @keyup.enter="onRegister" >
      <input v-model="password2" type="password" placeholder="请输入确认密码" @keyup.enter="onRegister" >
      <el-button @click="onRegister" type="primary">注册</el-button>
      <p class="notice">已有账号？<router-link to="/login">去登录</router-link></p>
    </div>
  </div>
</template>


<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
