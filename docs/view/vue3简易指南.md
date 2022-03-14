---
name: vue3简易指南
description: vue3全家桶使用及一些相较于vue2的新写法
tag: 框架
---

## 组合式api
```js
import { computed, watch, reactive, ref, provide, inject} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  props: {
    title: String
  },
  setup (props, context) {
    const store = useStore()

    const router = useRouter()
    const route = useRoute()
    router.push('/')
    console.log(route.params.id)

    const data = reactive({})
    const age = ref(18)
    data.age = 18
    age.value = 18

    provide('age', 18)
    const age = inject('age', 18)

    const counter = ref(0)
    watch(counter, (newValue, oldValue) => {
      console.log('The new counter value is: ' + counter.value)
    })

    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double)
    }
  }
}

```

## 路由
```bash
npm install vue-router@4
```

```js
import {createRouter, createWebHashHistory} from 'vue-router'

const home = () =>import('../view/home.vue')
const notfound = () =>import('../view/404.vue')

const routes = [
  {
    path: '/',
    component: home
  },
  // 配置404页面
  {
    name: 'notfound',
    path: '/:catchAll(.*)',
    component: notfound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

```

## vuex
```bash
npm install vuex@next --save
```

```js
import { createStore } from "vuex"

export default createStore({
  state: {
    theme: '测试',
    tagList: []
  },
  mutations: {
    setTagList(state,change) {
      state.tagList = change
    }
  }
})


```