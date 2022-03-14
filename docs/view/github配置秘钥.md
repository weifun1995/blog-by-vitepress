---
name: github配置秘钥
description: 可以ssh方式,这样在每次提交的时候不用频繁的输入账号密码
tag: 配置
---


## 配置用户名和邮箱

```bash
git config --global user.name "用户名"
git config --global user.email "邮箱"
# 引号内输入自己的信息
```


## 查看配置项是否成功

```bash
git config --list
```


## 命令生成公钥和私钥

```bash
ssh-keygen -t rsa -C "your_email@youremail.com"
```



## 在github网站配置ssh

![](/md/github_ssh.png)