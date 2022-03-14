---
name: SVG实现一个流动的线
description: svg描边动画在实际开发中可以实现以下比较酷炫得到效果
tag: JS
---

## 原理
通过更改虚线的其实偏移量从0虚线的一个长度的倍数，如此返回可以实现虚线流动的效果

## 主要属性
`stroke-dasharray`: 设置虚线的间隔
`stroke-dashoffset`: 设置虚线起点偏移量


```html
<svg width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
  <polyline
    points="50,50 200,150 300,150 400,50"
    class="line"
    style="fill: none; stroke: black; stroke-width: 1"
  ></polyline>
</svg>
```

```css
.line {
  stroke-dasharray: 5;
  animation: move linear 2s infinite;
}

@keyframes move {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 50;
  }
}
```

## 描边动画
与此相同我们把一个路径的偏移量从-100%到0可以实现一个酷炫的描边动画
![](/md/miaobian.png)