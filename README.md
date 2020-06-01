## 项目预览

[Vue 多人博客项目](https://chenning02.github.io/git-hunger-vue_blog-client/dist/)

## 运行

```sh
npm run dev
```

## 打包

```sh
npm run build
```

## 项目概述

- 该项目使用 Vue 实现了一个在线博客分享的平台。包含首页、用户文章列表、个人管理等页面，实现了登录、注册、编辑、发布等功能。项目使用 Grid 作页面布局，以 Vue CLI 为基础创建项目模版，使用 Less 作 CSS 预处理，引用 Element UI 作交互。通过 Vue Router 实现路由的跳转、异步加载、权限验证等，通过 vuex 实现状态管理，用 Axios 获取数据，并对接口进行了封装。
- 技术栈：Vue CLI/ Vue2/ Axios/ Vue Router/ Vuex/ ES6/ Npm/ Grid/ Less

## 开发踩坑记录

md 插件

```bash
npm i marked --save
```

接口改为 https

打开根目录下 `src > helpers > request.js` 将请求的域名改为：

```js
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
```

配置 icon 图标路径

打开根目录下 ` build > utils.js` 其中的这部分 在 `fallback` 后追加一个属性 `publicPath: '../../'`

```js
// Extract CSS when that option is specified
// (which is the case during production build)
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
```

