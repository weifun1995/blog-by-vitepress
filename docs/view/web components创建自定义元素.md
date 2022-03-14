---
name: 初识web component
description: 一种使用原生html的方式实现页面组件化复用
tag: 框架
---

## 简述
原生html可以通过如下三部曲来实现web component组件化

- 创建自定义类继承HTMLElement
- 创建Shadow DOM实现组件dom和样式隔离
- 注册自定义元素


## 创建自定义类

### 生命周期
- `connectedCallback`：当 custom element首次被插入文档DOM时，被调用。
- `disconnectedCallback`：当 custom element从文档DOM中删除时，被调用。
- `adoptedCallback`：当 custom element被移动到新的文档时，被调用。
- `attributeChangedCallback`: 当 custom element增加、删除、修改自身属性时，被调用。

### observedAttributes
返回需要监听属性的数组
```js
static get observedAttributes() {
    return ['text']
}
```

### get和set
实现类内部属性时使用`get`控制读取行为,`set`控制设置行为

### getAttribute
获取自定义组件上的属性值

```js
class MySection extends HTMLElement {
    constructor() {
      // 必须首先调用 super方法
      super()
    }

    render () {
      // 创建渲染函数
    }

    connectedCallback () {
      console.log('挂载')
    }
    
    disconnectedCallback () {
      console.log('删除')
    }

    adoptedCallback () {
      console.log('移动时')
    }

    attributeChangedCallback (key, oldV, newV) {
      console.log('属性变化', key, oldV, newV)
    } 

    static get observedAttributes() {
      return ['text']
    }

    get text () {
      return this.getAttribute('text')
    }

    set text (value) {
      return this.getAttribute('text', value)
    }
}
```

### 创建Shadow DOM
实现封闭的dom结构和样式

### 插槽
同vue的插槽和具名插槽
```html
<slot name="header"></slot>
<slot></slot>
```

### 样式
除了常用的样式外，Shadow DOM有几个专属的伪类样式
- `:host`:宿主样式，表示Shadow DOM根样式
- `:host-context()`：如`:host-context(.box)`,表示选择Shadow DOM下box类的样式

### 向外部传递数据
监听响应的事件，然后手动js调用事件，传递响应的参数

```js
/*
* @{mode} 【open/closed】外部js是否可以访问到shadow root节点
*/
let shadowRoot  = this.attachShadow({ mode: 'open' })

shadowRoot.innerHTML = `
<style>
:host {
  color: red;
}
</style>
<div>
  <slot name="header"></slot>
  这是一个自定义元素
  <slot></slot>
</div>
`

shadowRoot.addEventListener('click', (ev) => {
  this.onClick("hello")
})
```

```html
<my-div class="ww">
  <div class="header">这是头部</div>
  这是插槽
</my-div>

<script>
document.querySelector('.ww').onClick = value => {
  console.log(value)
}
</script>
```
![](/md/shadowDom1.png)




## 注册自定义元素
```js
/*
* @{第一个} 元素名称
* @{第二个} 自定义元素类
* @{第三个} 当前只有一个属性表示继承哪个元素
*/
window.customElements.define('my-div', MySection, { extends: 'p' })
```
:::warning 提示
名称不能是单个单词，且其中必须`要有短横线`。
:::

## 在vite项目中使用注意的地方
- 设置可以识别自定义元素
  ```js
  // vite.config.js
  export default defineConfig({
    plugins: [vue({
      template: {
        compilerOptions: {
          // 将所有包含短横线的标签作为自定义元素处理
          isCustomElement: tag => tag.includes('-')
        }
      }
    })]
  })
  ```

- 传递参数
  直接传递属性,在 在自定义组件中无法接收到，需要使用`.data`或者`:data.prop`传递属性
  且不会触发`attributeChangedCallback`函数,但是会触发`set data()`方法
  ```html
  <my-div .data="{text: data.text}"></my-div>
  ```