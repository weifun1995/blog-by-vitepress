---
name: vue3 steup提案
description: vue3主要新增了<script steup>写法,相较于vue2的组合式写法有点陌生
tag: 框架
---

## steup
> 直接使用vue的<script steup>,因为最终会解析成`async setup()`，所以内部可以直接使用`awiat`


## 组件
> 直接引入组件而不需要注册了


## props
```js
import { defineProps } from "vue"

const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
    required: true
  }
})
```

## emit
```vue
<script setup>
const emit = defineEmits(['change', 'delete'])
</script>
```

## attrs
```js
import { useAttrs} from 'vue'
const attrs = useAttrs()
```


## slot
```js
import { useSlots} from 'vue'
const slots = useSlots()
```

## computed
```js
const plusOne = computed(() => count.value + 1)

const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

```

## watch
可以监听多个数据源
```js
watch(count, (count, prevCount) => {
  /* ... */
})
```

## 对外暴露数据
vue2中我们可以获取组件实例访问到组件内部的数据,使用 `<script setup>` 的组件是默认关闭的，也即通过模板 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。但是我们可以通过`defineExpose `主动暴露数据出去

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```


## 定义数据
```js
import { reactive, ref } from 'vue'

const data = reactive({}) // 定义一个响应式对象，直接使用 data.变量 取值复制

const age = ref(18) // 需要使用 age.value 取值复制

```

## 生命周期
在组合式api的生命周期前面加上`on`

## 使用路由

```js
import { useRouter, useRoute } from 'vue-router'

const router = useRouter() // 跳转路由方法
const route = useRoute()   // 路由参数详情
```

## 使用vuex
```js
import { useStore } from 'vuex'

const store = useStore() // 可以像vue2一样使用
```

