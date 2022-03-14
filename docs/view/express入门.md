---
name: express入门
description: express实现简易的node服务端项目
tag: 全栈
---

:::tip
详情请看[官网](https://www.expressjs.com.cn/)
:::

## 安装

``` bash
npm i express -S
```

## 搭建HTTP 
创建`server.js`文件

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
```

## 静态资源
在主目录新建public文件夹,`server.js`现在


``` js
// 将 public 目录设置为静态资源目录，可以设置多个
app.use(express.static('public'))
app.use(express.static('public2'))

// 设置别名
app.use('/static', express.static('public'));
```

## 模板引擎
服务器处理完数据后发送html给前端显示

### 安装
```bash
npm install express-art-template --save
```

### 配置
在`server.js`配置,当后缀渲染为`art`的模板时 使用`express-art-template`
```js
app.engine('art', require('express-art-template'))
app.set('view engine', 'art')
```

## 路由中间件

创建`router.js`
```js 
var express = require('express')
var router = express.Router()

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page')
})
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds')
})
module.exports = router
```

在`server.js`中使用
```js
//  可以接收请求： /api 和 /api/about
var myRouter = require('./router');

app.use('/api', myRouter );
```

## 404页面
在 Express 中，404 并不是一个错误（error）。因此，错误处理器中间件并不捕获 404。这是因为 404 只是意味着某些功能没有实现。也就是说，Express 执行了所有中间件、路由之后还是没有获取到任何输出。你所需要做的就是在其所有中间件的后面添加一个处理 404 的中间件。

```js
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

// 或者 在所有路由后面添加*的路由处理
app.get('*', function(req, res){
    res.render('404.html', {
        title: 'No Found'
    })
})
```


## 处理get请求
GET请求通过request接收，我们可以`.query`属性

## 处理post请求
因为node和Express没有提供解析post请求参数的功能，因此在Express中如果要解析post请求，我们需要借助body-parser中间件。使用后可以在express的req对象中增加一个body属性值（默认情况下，它是undefined），我们需要的数据就在这个body中了

```bash
npm install body-parser
```

在`server.js`引入，新增以下代码
```js
// 拦截所有请求
// extended:false 方法内部使用querystring模块处理请求参数的格式
// extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({extended:false}))
app.post('/params',(req,res)=>{
  // 接收post请求参数
  res.send(req.body);
```

## 常见响应方法
- res.download()	`提示下载文件`
- res.end() 	`终结响应处理流程`
- res.JSON()	`发送一个 JSON 格式的响应`
- res.jsonp()	`发送一个支持 JSONP 的 JSON 格式的响应`
- res.redirect()	`重定向请求`
- res.render()	`渲染视图模板`
- res.send() 	`发送各种类型的响应`
- res.sendFile()	`以八位字节流的形式发送文件`
- res.sendStatus() 	`设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。`