---
name: vue2自定义指令
description: 除了核心功能默认内置的指令 (例如 `v-model` 和 `v-show`)，Vue 也允许注册自定义指令。方便的对普通 DOM 元素进行底层操作
tag: 框架
---


## 使用
全局范围使用
```js
const app = Vue.createApp({})
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()
  }
})
```

组件内局部使用
```js
directives: {
  focus: {
    // 指令的定义
    mounted(el) {
      el.focus()
    }
  }
}
```

##  生命周期钩子函数
:::warning 提示
相对于vue2的生命周期钩子函数，vue3版本的命名趋向于与组件生命周期钩子函数命名一致
:::
一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
created：在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。

- `beforeMount`：当指令第一次绑定到元素并且在挂载父组件之前调用。

- `mounted`：在绑定元素的父组件被挂载前调用。

- `beforeUpdate`：在更新包含组件的 VNode 之前调用。

- `updated`：在包含组件的 VNode 及其子组件的 VNode 更新后调用。

- `beforeUnmount`：在卸载绑定元素的父组件之前调用

- `unmounted`：当指令与元素解除绑定且父组件已卸载时，只调用一次。


## 钩子函数的参数
> 钩子函数的参数(即 el、binding、vnode 和 prevVnode)
> 
```html
<span v-demo:top="100">测试自定义指令</span>
```

```js
  directives: {
    demo: {
      mounted(el, binding, vnode, prevVnode) {
        console.log(el)
        console.log(binding)
        console.log(vnode)
        console.log(prevVnode)
      }
    }
  },

```
![](/md/directives.png)


可以知道
- `el`: 真实的dom结构
- `vnode`: 更新后的虚拟dom结构
- `prevVnode`: 更新前的虚拟dom结构
- `binding`: 可以解析自定义指令传递的参数

## 动态参数
```html
<span v-demo:[变量名]="变量值">测试自定义指令</span>
```

## 对象字面量
```html
<span v-demo="{color: 'white', text: 'hello!' }">测试自定义指令</span>
```


## 钩子函数简写
当 `mounted` 和 `updated` 时触发相同行为，而不关心其他的钩子函数。我们可以简写如下：

```js
 directives: {
    demo: (el, binding)=> {
      // 执行一些操作
    }
  },
```

#### 项目中批量注册

**directives.js**
```js
export const demo = {
  mounted () {
    // do something
  }
}
```

**app.js**
```js
import * as directives from directives.js

// 方法一
for (let key in directives) {
  app.directive(key, directives[key])
}

// 方法二
Object.key(directives).forEach(key => {
  app.directive(key, directives[key])
})

```

#### 实战水印
```js
directives: {
    waterMask: (el, binding) => {
      // 当容易没有定位属性时给relative否则就使用自身的定位属性
      let position = el.style.position || 'relative'
      el.style.position = position

      // 创建水印dom
      let waterMaskBox = document.createElement('div')
      waterMaskBox.style.position = 'absolute'
      waterMaskBox.style.width = '100%'
      waterMaskBox.style.height = '100%'
      waterMaskBox.style.pointerEvents = 'none'
      let src = initCanvas()
      waterMaskBox.style.backgroundImage = `url(${src})`
      el.appendChild(waterMaskBox)

      function initCanvas () {
        const vmOptions = {
          // 单个水印文字块的字体颜色、宽、高、旋转角度
          width: 100,
          height: 100,
          color: 'red',
          rotate: 30,
          text: '测试水印',
          font: '12px serif'
        }
        let userOption = binding.value
        const { width, height, text, font, color, rotate } = Object(vmOptions, userOption)
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        ctx.translate(width / 2, height / 2)
        ctx.rotate(-rotate * Math.PI / 180)
        ctx.translate(-width / 2, -height / 2)

        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = color
        ctx.font = font
        ctx.fillText(text, width / 2, height / 2)
        return canvasToBase64(canvas)
      }
      function canvasToBase64(canvas) {
        return canvas.toDataURL('image/png')
      }
    }
  },
```