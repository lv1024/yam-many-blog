# vue_blog-client

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

header.js 中的 js报错部分

`import { mapGetters, mapActions } from 'Vuex'` 中的 Vuex 要大写

```js
// import auth from '@/api/auth'
/* Vuex 提供的函数，经过处理映射到当前文件 */
import auth from '@/api/auth'
window.auth = auth

import { mapGetters, mapActions } from 'Vuex'

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
  created(){
    this.checkLogin()
  },
  methods: {
    /* 获取判断用户登录状态的方法，引入到当前组件中
     * 当前组件中就可以直接使用该方法 */
    ...mapActions([
      'checkLogin',
      'logout'
    ])
  }
}
```