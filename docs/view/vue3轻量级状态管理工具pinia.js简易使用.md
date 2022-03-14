---
name: Pinia.js
description: vue3推荐的状态管理工具,被称为下一代的vuex
tag: 框架
---

## 介绍

> Pinia.js 是新一代的状态管理器，由 Vue.js团队中成员所开发的，因此也被认为是下一代的 Vuex，即 Vuex5.x，在 Vue3.0 的项目中使用也是备受推崇。



::: tip 特点

- 完整的 typescript 的支持；

- 足够轻量，压缩后的体积只有1.6kb;

- 去除 mutations，只有 state，getters，actions（这是我最喜欢的一个特点）；

- actions 支持同步和异步；

- 没有模块嵌套，只有 store 的概念，store 之间可以自由使用，更好的代码分割；

- 无需手动添加 store，store 一旦创建便会自动添加；

::: 



## 安装

```shell
npm install pinia --save
```





## 使用

###  创建main.js

```js
import { createApp } from 'vue'
import App from './App.vue'


import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app
  .use(pinia)
  .mount('#app')
```



### 创建user仓库

```js
import { defineStore } from 'pinia'

export const createUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: 'weifun',
      age: 18
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '1995'
    }
  },
  actions: {
    updateName (name) {
      this.name = name
    },
    async login () {
      // 异步函数写法
    }
  }, 
})
```

::: tip 嵌套使用

- 我们可以在user.js中引入其他定义的store
- action中的函数可以相互调用

:::

### 在页面使用

```js
import { createUserStore } from './store/user'
const userStore = createUserStore()

console.log(userStore.name)     	// 使用state定义的数据
console.log(userStore.fullName) 	// 使用getters定义的计算变量

userStore.updateName('hello')		// 使用actions更新数据
```



### 结构使用

>  state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 **storeToRefs**。

```js
// 错误
const { name } = userStore

// 正确
import { storeToRefs } from 'pinia'
const { name } = storeToRefs(userStore)
```



## 重置状态

```js
const store = useStore()

store.$reset()
```



## 一次更改多个数据

```js
// 缺点：在更改引用类型的时候，比如数组的某一项更改时能需要传递完整的数组数据
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})


// 高级写法，弥补上述更改数组的缺点
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```



## 直接新对象替换state

```js
store.$state = { counter: 666, name: 'Paimon' }
```



## 订阅状态

> 类似于state的watch函数,监听state变量变化的操作

```
userStore.$subscribe((mutation, state) => {
  
})
```



## 数据持久化

> 插件 pinia-plugin-persist 可以辅助实现数据持久化功能



### 安装

```js
npm i pinia-plugin-persist --save
```



### 使用

```js
// main.js
import piniaPluginPersist from 'pinia-plugin-persist'
pinia.use(piniaPluginPersist)

// user.js
persist: {
  enabled: true
}
```



### 拓展

> 数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。

```js
persist: {
  enabled: true,
  strategies: [
    {
      key: 'my_user',				// 	自定义key值
      storage: localStorage,		//  自定义sessionStorage/localStorage
      paths: ['name']               //  有这个选项的话就存固定的变量
    },
    {
      key: 'my_user_1',
      storage: sessionStorage,
      paths: ['age']
    }
  ]
}
```

