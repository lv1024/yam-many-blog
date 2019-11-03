<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <div class="navigation">
      <template v-if="!isLogin">
        <h1 class="logo">share</h1>
        <p class="blog-choice">博客精选</p>
        <div class="buttons">
          <el-button type="primary" size="medium">注册</el-button>
          <el-button size="medium">登录</el-button>
        </div>
      </template>
      <template v-if="isLogin">
        <h1 class="logo">share</h1>
        <div class="blog-message">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <img src="../assets/img/zhizhang.jpg" alt="智障如我">
        </div>
      </template>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return { isLogin: false }
  }
}
</script>


<style scoped lang="less">
@import "../assets/base.less";

.navigation {
  max-width: @layout;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: @themesColor;
  font-size: 24px;
  text-transform: uppercase;
}
.blog-choice {
  font-weight: bold;
}
.blog-message {
    display: flex;
    align-items: center;
}
.blog-message > .el-button {
  padding: 8px;
  margin-right: 20px;
}
.blog-message img {
  width: 36px;
  height: 36px;
  border-radius: 2px;
  
}
</style>