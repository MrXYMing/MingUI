# beflamStyle框架

## 项目结构

```js
|----demo        //最终的demo用例
|       |----index.html       //demo用例的html页面，直接导入打包后的js和css文件
|       |
|       |----index.js         //demo用例所需的辅助js
|       |
|       |----index.css         //demo用例所需的辅助css
|
|----dist        //打包资源
|       |----assets           //字体、图片等资源
|       |
|       |----main.css         //css文件
|       |
|       |----main.js          //js文件，命令空间 `style`
|
|----src         //核心代码
|       |----assets           //字体、图标等资源
|       |
|       |----scripts          //js文件夹
|       |
|       |----styles           //样式文件夹
|                 ----main                 //代码文件
|                        |----mixins                  //函数文件夹
|                        |
|                        |----partials                //分布页、组件化文件夹
|                        |
|                        |----_minxins.scss           //导入所有函数
|                        |
|                        |----_variables.scss         //变量
|                 |
|                 |----_reset.scss         //重置浏览器样式
|                 |
|                 |----main                //主css
|----example     //测试例子，用于开发测试
|       |----button          //button测试实例
|                 ----index.html           //必须以index.html命名
|                 ----index.js             //必须以index.js命名
|                 ----index.scss
|       |----...
```

### 调试命令

- 运行：`npm start`；

- 打包：`npm run build`

### 目录说明

- src目录：所有核心代码均在此目录下，包括UI样式、js核心代码以及必要的静态资源；

- example目录：测试用例均在此目录下，添加新测试用例需遵循项目结构中给出的结构

### 测试路径

`http://localhost:8080/example/*.html`