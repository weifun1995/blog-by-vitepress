---
name: SVG入门
description: 日常项目中偶尔会接触到svg构图,需要经常去搜索一些用法,避免麻烦记下笔记
tag: JS
---


## 基本用法
> `xmlns`指定svg的命名空间,防止在其他XML文本中不能正确解析svg
```js
<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">
  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
```

## 常用元素

### circle
> 圆

`cx`:圆心的x坐标

`cy`:圆心的y坐标

`r`:圆的半径

```html
<svg width="200" heigth="200" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```
![](/md/svg-circle.png)


### clipPath
> 定义一条剪切路径,路径外的部分不可见,包裹其他的svg元素,作为其他元素的`clip-path`的值

```html
<svg width="100" height="100">
    <clipPath id="myClip">
      <!--
        圆圈外的所有东西都会被裁剪掉，因此不可见。
      -->
      <circle cx="40" cy="35" r="35" />
    </clipPath>
  
    <!-- 作为引用元素（英文原文：for reference）的黑色心形 -->
    <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
  
    <!--
      和上述黑色心形形状相同的红色心形，剪切路径是上面定义的圆；
      红色心形只有在圆内的部分可见。
    -->
    <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
  </svg>
```
![](/md/svg-clippath.png)

### ellipse
> 椭圆

`cx`:椭圆心的x坐标

`cy`:椭圆心的y坐标

`rx`:椭圆x方向的半径

`ry`:椭圆y方向的半径

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  <ellipse cx="50" cy="50" rx="50" ry="20"
        fill="red"  />
</svg>
```

![](/md/svg-ellipse.png)

### rect
> 矩形

`x`:左顶点x坐标

`y`:左顶点y坐标

`width`:宽

`height`:高

`rx`:水平轴向的圆角半径尺寸

`ry`:垂直轴向的圆角半径尺寸

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  <ellipse cx="50" cy="50" rx="50" ry="20"
        fill="red"  />
</svg>
```

![](/md/svg-rect.png)


### polygon
> 多边形，最后一点连接到第一点

`points`:多个坐标点，使用`空格`连接

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  <polygon points="10,10 10,50 50,50 50,10"
     style="fill:lime;stroke:purple;stroke-width:1"/>
</svg>
```
![](/md/svg-polygon.png)


### polyline
> 多线段

`points`:多个坐标点，使用`空格`连接

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  <polyline points="10,10 10,50 50,50 50,10"
     style="fill:none;stroke:black;stroke-width:1"/>
</svg>
```
![](/md/svg-polyline.png)


### path
> 路径，通过指令和坐标进行线路绘制

`d`:多个指令和坐标点，使用`空格`连接，坐标点也使用空格分隔

**M**:移动到某个点,后面接`坐标点x y`,只会移动不会绘制，通常作为路径起点指令
**L**:绘制线段到某个点,后面接`坐标点x y`
**H**:绘制平行线,后面接`移动的距离`
**V**:绘制垂直线,后面接`移动的距离`
**S**:平滑曲线
**Q**:二次贝塞尔曲线
**T**:平滑二次贝塞尔曲线
**A**:椭圆弧
**Z**:从当前点画一条直线到路径的起点

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  <path d="M10 10 L10 50 L50 50 L50 10 Z"
     style="fill:none;stroke:black;stroke-width:1"/>
</svg>
```
![](/md/svg-path.png)


### line
> 两点一线

`x1`:第一个点x坐标

`y1`:第一个点y坐标

`x2`:第二个点x坐标

`y2`:第二个点y坐标

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
     <line x1="10" y1="10" x2="50" y2="50" stroke="red"></line>
</svg>
```
![](/md/svg-line.png)


### text
> 文本
`x`:左顶点x坐标

`y`:左顶点点y坐标

`dx`:x轴方向上的偏移

`dy`:y轴方向上的偏移

`rotate`:旋转

`textLength`:文本绘制宽度

`lengthAdjust`:控制文本如何拉伸

### textPath
> 指定路径方式显示文本环绕

`startOffset `:相对于路径起点的偏移量,百分比或者数值

`method`:呈现文本的方法,注意兼容性

`spacing`:字符间距

![](/md/svg-line.png)


### tspan
> 类似text,但是tspan的dx和dy接收多个值,对每个字符进行影响

### linearGradient
> 线性渐变，用于图形元素的填充或描边。

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```
![](/md/svg-linearGradient.png)

### radialGradient
> 径向渐变，以对图形元素进行填充或描边

`cx`:圆心的x坐标

`cy`:圆心的y坐标

`r`:半径

`fx`:定义径向渐变的焦点的 `x` 轴坐标,如果该属性没有被定义，就假定它与中心点是同一位置。

`fy`:定义径向渐变的焦点的 `y` 轴坐标,如果该属性没有被定义，就假定它与中心点是同一位置。

`fr`:定义径向渐变的焦点的半径。若该属性没有被定义，默认值为 0%。

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style="stop-color:rgb(255,255,255);
        stop-opacity:0" />
        <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="50" rx="50" ry="50" fill="url(#grad1)" />
</svg>
```
![](/md/svg-radialGradient.png)

### image
> 在svg显示图片

`xlink:href`:路径

`x`:左顶点x坐标

`y`:左顶点y坐标

`height`:高

`width`:款

```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
     <image xlink:href="https://www.naiveui.com/assets/naivelogo.93278402.svg" x="0" y="0" height="100" width="100" />
</svg>
```
![](/md/svg-image.png)

### g
> 用于定于组合元素，添加到`g`元素的变换效果会被包裹的子元素继承
```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
     <g stroke="green" fill="white" stroke-width="5">
      <circle cx="25" cy="25" r="15" />
      <circle cx="40" cy="25" r="15" />
      <circle cx="55" cy="25" r="15" />
      <circle cx="70" cy="25" r="15" />
    </g>
</svg>
```
![](/md/svg-g.png)



### defs
> 用于定义重复的图形元素，通过定义`id`值，可以在其他元素通过id引入
```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">

  <!-- 定义一个渐变色 -->
  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <!-- 重复使用这个值 -->
  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />

  <rect x="10" y="40" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```
![](/md/svg-defs.png)



### use
> SVG文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的DOM中，然后将其粘贴到use元素的位置

`x`:起点坐标x

`y`:起点坐标y

`width`:宽

`height`:高

`xlink:href`:引用一个id
```
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  
  
  <rect id="rect" x="0" y="0" width="30" height="30"  stroke="blue"></rect>

  <use x="50" y="50" xlink:href="#rect" ></use>
</svg>
```

![](/md/svg-use.png)

### pattern
> 在x轴或y轴方向以固定的间隔平铺

`x`:起点坐标的偏移量x

`y`:起点坐标的偏移量y

`width`:pattern图案占填充图形`宽`的百分比(0~1或者0%~100%)

`height`:pattern图案占填充图形`高`的百分比(0~1或者0%~100%)

`xlink:href`:水平轴向的圆角半径尺寸

`patternUnits`:填充方式,`objectBoundingBox`规定沿x轴和y轴平铺指定数量的图案,`userSpaceOnUse`指定区域内平铺，能铺多少铺多少，超出部分裁掉。

`patternContentUnits`:图案的缩放和排布

`patternTransform`:可以设置位移旋转等

`preserveAspectRatio`:否强制进行统一缩放


```html
<svg width="100px" height="100px" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <pattern id="grid" x="100" y="100" width="0.2" height="0.2" patternUnits="objextBoundingBox">
      <circle cx="10" cy="10" r="5" fill="red"></circle>
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#grid)" stroke="blue"></rect>
</svg>
```
![](/md/svg-pattern.png)


### mask
> 定义遮罩元素，其他元素通过设置`mask`属性来使用这个元素

### marker
> 在特定的`path`元素、`line`元素、`polyline`元素或者`polygon`元素上绘制的箭头或者多边标记图形。

### foreignObject
> 允许包含来自不同的XML命名空间的元素。在浏览器的上下文中，很可能是XHTML / HTML。
> 应用场景: svg展现文字对齐如居住对其，超出隐藏等不是很友好，可以使用foreignObject包裹div元素进行css控制


## 常用属性
### id 
> 指定唯一标识

### stroke  
> 定义 svg 元素的描边颜色，例如线条、文本等描边颜色

### stroke-width
> 定义 svg 元素的描边宽度

### stroke-opacity
> 定义 svg 元素的描边透明度

### stroke-linecap
> 定义 svg 元素的路径两端的形状, butt | round | square | inherit

### stroke-dasharray
> 定义 svg 元素的虚线的取值,"...x x2"

### stroke-dashoffset
> 定义 svg 元素的虚线的偏移位 正值向右 负值向左

### stroke-linejoin
> 定义 svg 元素的路径的转角处使用的形状或者绘制的基础形状

### fill
> 定义 svg 元素的填充颜色

### fill-opacity
> 定义 svg 元素的填充透明度

### transform  
> 定义 svg 元素的变换，包括移动、旋转、放缩等，与CSS类似

### fill-opacity
> 定义 svg 元素的填充透明度

### fill-opacity
> 定义 svg 元素的填充透明度