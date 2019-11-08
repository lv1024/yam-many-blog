## 项目预览地址

[Vue 多人博客项目](https://chenning02.github.io/git-hunger-vue_blog-client/dist/)

## Build Setup

```bash
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

md 插件

```bash
npm i marked --save
```

接口改为https

打开根目录下 `src > helpers > request.js` 将请求的域名改为：

```js
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
```

