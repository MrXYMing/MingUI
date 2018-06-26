# beflamStyle框架

## 项目结构

```js
|----demo        //测试用例
|       |----index.html       //测试页html
|       |
|       |----index.js         //测试页js用例
|
|----dist        //打包资源
|       |----assets           //字体、图片等资源
|       |
|       |----main.css         //css文件
|       |
|       |----main.js          //js文件
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
|----template     //模板页
|       |----index1.html   //html模板1
```

### 调试命令

- 运行：`npm start`；

- 打包：`npm run build`