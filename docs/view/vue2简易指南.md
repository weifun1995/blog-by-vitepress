---
name: vue2简易指南
description: 记录一些vue2的知识点
tag: 框架
---

:::tip
更新更全信息请看[官网](https://cn.vuejs.org/v2/guide/)
:::

## v-model

> 默认情况下 prop 传递的值是 value 和 change 事件，但是我们可以改变它

```js
model: {
  prop: 'checked',
  event: 'change'
}
```

## sync

> vue 新增的修饰符

```html
<!-- 父组件 -->
<div :name.sync="value"></div>
```

```js
// 子组件
this.$emit('update:name', value)
```

## 具名插槽

> 可以很方便的把元素插入到对应的位置

```html
<!-- 组件 -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```html
<!-- 使用组件 -->
<base-layout>
  <template v-slot:header>
    <h1>header</h1>
  </template>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

## 全局变量

```js
vue.prototype.变量 = 值
```

## 路由

```bash
npm install vue-router --save
```

```js
import Vue from 'vue'
import Router from 'vue-roouter'00
 Vue.use(Router)  //Vue全局使用Router
 export default new Router({
   routes: [
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }
    // 配置404页面
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
```

## vuex

```bash
npm install vuex --save
```

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    age: '18',
  },
  mutations: {},
  actions: {},
})
```

## main.js

```js
import store from './store'
import router from './route'
new Vue({
  el: '#app',
  router,
  store, //新加的
  components: { App },
  template: '<App/>',
})
```

## eventBus

### 创建一个 bus.js

```js
import Vue from 'vue'
export default new Vue()
```

### 在需要的 js 中导入

```js
import Bus from 'bus.js'

// 触发
methods: {
   addCart(event) {0
   Bus.$emit('getTarget', event.target);
   }
}

// 监听
created() {
  Bus.$on('getTarget', this.dothing)
},
beforeDestroy () {
  Bus.$off('getTarget', this.dothing)
}
```

## 自定义指令
```js
Vue.directive('focus', {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function () => {},
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted: function () => {},
  // 所在组件的 VNode 更新时调用
  update: function () => {},
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated: function () => {},
  // 只调用一次，指令与元素解绑时调用。
  unbind: function () => {},
})
```
