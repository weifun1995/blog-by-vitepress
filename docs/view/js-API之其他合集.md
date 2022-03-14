---
name: 一些js-api方法
description: 一些js api的方法
tag: JS
---


## getcomputedstyle
> 通过调用`documentElement.getcomputedstyle()`我们可以获取dom的实际样式，`仅读取`，相对于`documentElement.style`只能获取`style`属性上的值及内联样式,getcomputedstyle读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。


## getboundingclientrect
> 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
- `top`：元素上边到视窗上边的距离;
- `right`：元素右边到视窗左边的距离;
- `bottom`：元素下边到视窗上边的距离;
- `left`：元素左边到视窗左边的距离;
- `width`：是元素自身的宽
- `height`: 是元素自身的高
  
![](/md/getboundingclientrect.png)


## requestanimationframe
> 与传统的js动画给根据`setInterval`指定时间去重复执行一段函数,`requestanimationframe`会根据屏幕的刷新率执行js动画,且不会进行重绘或回流

```js
// 执行
let id = requestAnimationFrame(callback)

// 取消
cancelAnimationFrame(id)
```

## 根字体
```js
document.documentElement.style.fontSize = 'xx'
```

## CSS变量
```js 
document.documentElement.style.setProperty('--color', "red")
```