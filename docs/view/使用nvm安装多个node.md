---
name: nvm
description: 日常开发中node版本不一致导致项目可能运行失败,如果对node进行卸载重装显得麻烦,使用nvm可以很好的规避这个问题,可以在本地安装多个node版本,并快速的切换和使用。
tag: 配置
---

# nvm

## 安装

> node包版本管理，方便的可以在本地安装多个nodejs环境。[下载](!https://github.com/coreybutler/nvm-windows/releases)

```bash
#常用命令有：
# 查看本地所有版本
nvm list

# 查看网络可安装版本
nvm list available

# 安装最新版本
nvm install

# 切换到指定版本
nvm use <version>

# 安装指定版本
nvm install <version>

# 卸载指定版本
nvm uninstall <version>
```

::: tip
> 当我们不能通过命令行安装node时，可以进行手动安装。
> 
1. 去[node官网](!https://nodejs.org/zh-cn/download/releases/)下载指定版本的压缩包
2. 解压下载的依赖包到nvm安装的根目录
3. 重命名解压包为`v + 版本号`格式

![](/md/nvm1.webp)
![](/md/nvm2.webp)
:::