---
name: 判断两个dom的包含关系
description: contains(),可以判断两个dom的包含关系,方便我们需要判断一个事件是否发生在自身dom上,比如下拉选择框,常见的场景是我们点击列表之外的区域时需要关闭下拉。
tag: JS
---



## 介绍
`.contains()`可以判断两个dom的包含关系,如果A包含B则返回`true`

## 实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>

.box {
  width: 200px;
  height: 200px;
  background: red;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain {
  width: 100px;
  height: 100px;
  background: yellow;
}


</style>
<body>
  <div class="box">
    <div class="contain"></div>
  </div>
</body>
<script>
  window.addEventListener('click', doClick)
  function doClick () {
    let box = document.querySelector('.box')
    let result = box.contains(event.target)
  }
</script>
</html>
```

依次点击白色区域->红色区域->黄色区域

![](/md/contains.png)

![](/md/contains1.png)