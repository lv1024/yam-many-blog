<template>
  <div id="login">
    <h2>注册</h2>
    <!-- <h4>用户名</h4> -->
    <!-- <p class="error">当前用户名已注册</p> -->
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <!-- <h4>密码</h4> -->
    <!-- <p class="error">当前密码错误</p> -->
    <el-input v-model="password" type="password" placeholder="请输入密码" ></el-input>
    <el-button type="primary">注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">去登录</router-link></p>
    
  </div>
</template>


<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
