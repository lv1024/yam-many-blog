<template>
  <div id="login">
    <h2>登录</h2>
    <input v-model="username" placeholder="请输入用户名">
    <input @keyup.enter="onLogin" v-model="password" type="password" placeholder="请输入密码">
    <el-button @click="onLogin" type="primary">登录</el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
    
  </div>
</template>


<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
