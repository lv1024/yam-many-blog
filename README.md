## 项目预览

[https://chenning02.github.io/git-hunger-vue_blog-client/dist/index.html](https://chenning02.github.io/git-hunger-vue_blog-client/dist/index.html)

## 运行

**初始化**

```sh
npm install
```

**测试**

```sh
npm run dev
```

**打包**

```sh
npm run build
```


## 遇到的问题

缺少 md 插件

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

