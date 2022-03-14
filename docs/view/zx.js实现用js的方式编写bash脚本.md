---
name: ZX.js
description: 谷歌官方的开源项目,类似shell.js一样,帮助我们使用js语法编写bash脚本,对前端更加友好
tag: 插件
---

:::tip
更多用法请看[官方](https://github.com/google/zx)
:::

:::warning 需要node版本>=14.8.0
node>=14.8.0
:::

## 安装及使用

创建`script.mjs`,node环境下使用es moudle规范的js脚本
```bash
# 全局
npm install -g zx
zx script.mjs

# 局部【推荐】
npm install -S zx
npx zx script.mjs
# 这可以方便的集成到项目的package.json中,作为项目指令
```

## 创建脚本文件
- 创建`.mjs`文件
- 首行添加环境指向
  ```js
  #!/usr/bin/env zx
  ```

```js
#!/usr/bin/env zx

console.log('666')
$`node -v`
```

![](/md/zx1.png)

## 常用执行语句
- $`command`
  > 执行命令,返回退出码`exitCode`,当`0`时执行正常
  ```js
  $`node -v`
  ```

- await
  > 异步执行,不需要写`sync`,`mjs`顶层实现了

  ```js
  await $`node -v`
  ```

- cd()
  > 进入工作目录

  ```js
  cd('/tmp')
  ```

- fetch()
  > 封装了`node-fetch`包,实现接口调用

  ```js
  let resp = await fetch('http://wttr.in')
  if (resp.ok) {
    console.log(await resp.text())
  }
  ```

- question()
  > 封装`readline`包,可以在终端进行问答交互

  ```js
  let bear = await question('What kind of bear is best? ')
  let token = await question('Choose env variable: ', {
    choices: Object.keys(process.env)
  })

  console.log({bear, token})
  ```
  ![](/md/zx2.png)

- sleep()
  > 休眠或者`setTimeout`

  ```js
  await sleep(1000)
  ```

- pipe()
  > 可用于重定向stdout
  
  ```js
  await $`cat file.txt`.pipe(process.stdout)
  ```

- nothrow()
  > 更改`$`的行为以不对非零退出代码引发异常

## 注意

### 自带包依赖
- `chalk`
- `yaml`
- `fs-extra`
- `globby`
- `os`
- `minimist`

### 配置项
- `$.shell`:指定bash环境
  ```js
  $.shell = '/usr/bin/bash'
  ```
- `$.prefix`:指定命令行前缀

- `$.quote`:指定用于在命令替换期间转义特殊字符的函数
- 
- `$.verbose`:终端是否显示详细的脚本运行过程输出


### 全局变量
- `__filename`
- `__dirname`
- `require()`


## 简易实战
```js
#!/usr/bin/env zx

let msg = await question('本次提交的信息?')
await $`git add .`
await $`git commit -m ${msg}`
await $`git push`
```
