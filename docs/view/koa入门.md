---
name: koa入门
description: koa实现简易的node服务端项目
tag: 全栈
---


:::tip
详情请看[官网](https://koa.bootcss.com/)
:::

## 安装
```bash
npm i koa -S
```

## 搭建HTTP 
我们命名为`server.js`

```js
const Koa = require('koa')
const app = new Koa()
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
```

## 静态资源加载
在主目录新建public文件夹,`server.js`增加以下代码 
```js
// 将 public 目录设置为静态资源目录
const static = require('koa-static')
const staticFile = static(__dirname + '/public')
app.use(staticFile)
```

## 模板引擎
服务器处理完数据后发送html给前端显示

```bash
npm install koa-views -S
```

在`server.js`配置
```js
const views = require('koa-views')
app.use(views(__dirname + '/views'))
```

## 路由中间件

```bash
#  安装 
npm install koa-router
```

创建`route.js`
```js
#  使用  
const router = require('koa-router')() // 引入自调用
 
router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

router.get('/about', async ctx => {
  await ctx.render('about')
})
module.exports = router
```

在`server.js`引入路由文件
```js
const Koa = require('koa')
const app = new Koa()
const myRoutes = require('./route.js')
// app.use(myRoutes.routes(), myRoutes.allowedMethods())
app.use(router.routes())
app.use(router.allowedMethods())
// allowedMethods处理的业务是当所有路由中间件执行完成之后,
// 若ctx.status为空或者404的时候,丰富response对象的header头.  
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
});
```

## 处理404页面
在所有路由的最后面配置一个默认的请求，当前面的没有生效时会执行到这一步
```js
router.get('*', async (ctx, next) => {
    ctx.body = { status : 404 }
})
```

## get请求
GET请求通过request接收，我们可以方法有两种：query和querystring。
- `query`：返回的是格式化好的参数对象。
- `querystring`：返回的是请求字符串。

## post请求
因为node和koa没有提供解析post请求参数的功能，因此在koa中如果要解析post请求，我们需要借助`koa-bodyparser`中间件。使用后可以在koa的ctx.req对象中增加一个`body`属性，我们需要的数据就在这个body中了

```bash
npm i koa-bodyparser -S
```

在`server.js`引入，新增以下代码
```js
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
```

## Context 对象
Koa 提供一个 Context 对象，将 node 的 request 和 response 对象封装到单个对象中，表示一次对话的上下文（可以理解为上(request)下(response)沟通的环境）。通过加工这个对象，就可以控制返回给用户的内容。每个请求都将创建一个 Context，并在中间件中作为接收器引用，或者 ctx 标识符。如：

```js
app.use(async ctx => {
  ctx; // 这是 Context
  ctx.request; // 这是 koa Request
  ctx.response; // 这是 koa Response
})
```
