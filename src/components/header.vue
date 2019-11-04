<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <div class="navigation">
      <template v-if="!isLogin">
        <router-link to="/"><h1 class="logo">share</h1></router-link>
        <p class="blog-choice">博客精选</p>
        <div class="buttons">
          <router-link to="/register"><el-button type="primary" size="medium">注册</el-button></router-link>
          <router-link to="/login"><el-button size="medium">登录</el-button></router-link>
        </div>
      </template>
      <template v-if="isLogin">
        <h1 class="logo">share</h1>
        <div class="blog-message">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <!-- <img :src="user.avatar" :alt="user.username" :title="user.username"> -->
          <el-dropdown trigger="click" placement="bottom">
            <span class="el-dropdown-link myMenu"><img src="../assets/img/zhizhang.jpg" alt="智障如我"></span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/my"><el-dropdown-item icon="el-icon-user-solid">我的主页</el-dropdown-item></router-link>
              <el-link @click="onLogout" :underline="false"><el-dropdown-item icon="el-icon-error">退出登录</el-dropdown-item></el-link>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </div>
  </header>
</template>

<script>
// import auth from '@/api/auth'
/* Vuex 提供的函数，经过处理映射到当前文件 */
import auth from '@/api/auth'
window.auth = auth

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return { }
  },
  computed: {
    /* 获取 store 中的 getters */
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  /* 每次加载都 判断用户登录状态加载内容 */
  created(){
    /* 可以使用 then 的方式处理登录的结果
     * .then(isLogin=>xxx) */
    this.checkLogin()
  },
      /* 获取判断用户登录状态的方法，引入到当前组件中
     * 当前组件中就可以直接使用该方法 */
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout(){
      this.logout()
    }
  }
}
</script>


<style scoped lang="less">
@import "../assets/base.less";

img {
  vertical-align: middle;
}

.navigation {
  max-width: @layout;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .myMenu {
    cursor: pointer;
  }
}

</style>