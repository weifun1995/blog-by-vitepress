---
name: sh脚本
description: 日常中使用脚本可以帮我们完成一些半自动化的操作流程，比如git的自动提交脚本可以使我们简化系列的命令行输入。
tag: JS
---


## Shell 环境

创建`.sh`文件时我们在首行写入`#!/bin/sh`或者`#!/bin/bash`告诉系统其后路径所指定的程序即是解释此脚本文件的 Shell 程序。

```bash 
#!/bin/sh
# 或者
#!/bin/bash
```

## shell常用操作

- **执行**：在可以执行脚本的环境下执行脚本路径

  ```bash 
  ./test.sh
  ```

  

- **echo**：输出信息

  ```bash 
  echo "Hello World !"
  ```



- **printf**

  ```bash 
  printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg 
  ```

  

- **变量**

  ```bash 
  # 定义变量【注意:等号两边不能有空格】
  name="weifun"

  # 设置默认值【当name为null时和会取右边的默认值】
  str=${name-"weifun"}

  # 使用变量
  echo $name
  
  # 设置为只读变量【注意:此时变量不能重新赋值了】
  readonly name
  
  # 删除变量
  unset name
  
  # 函数
  function fun() {}
  ```

  

- **字符串**

  ```bash 
  string="abcd"
  
  # 长度
  echo ${#string} #输出 4
  
  # 截取
  echo ${string:1:2} # 输出 bc
  
  # 查找子字符串,查找字符 i 或 o 的位置【注意格式】
  string="runoob is a great site"
  echo `expr index "$string" io`  # 输出 4
  ```



- **数组**

  ```bash 
  # 使用空格分割
  arr=(1 2 3)
  
  # 使用
  ${arr[0]} # 1
  ```

  

- **运算符**

  | 运算符 | 说明                                          | 举例                          |
  | :----- | :-------------------------------------------- | :---------------------------- |
  | +      | 加法                                          | `expr $a + $b` 结果为 30。    |
  | -      | 减法                                          | `expr $a - $b` 结果为 -10。   |
  | *      | 乘法                                          | `expr $a \* $b` 结果为  200。 |
  | /      | 除法                                          | `expr $b / $a` 结果为 2。     |
  | %      | 取余                                          | `expr $b % $a` 结果为 0。     |
  | =      | 赋值                                          | a=$b 把变量 b 的值赋给 a。    |
  | ==     | 相等。用于比较两个数字，相同则返回 true。     | [ $a == $b ] 返回 false。     |
  | !=     | 不相等。用于比较两个数字，不相同则返回 true。 | [ $a != $b ] 返回 true。      |

  | 运算符 | 说明                                                  | 举例                       |
  | :----- | :---------------------------------------------------- | :------------------------- |
  | -eq    | 检测两个数是否相等，相等返回 true。                   | [ $a -eq $b ] 返回 false。 |
  | -ne    | 检测两个数是否不相等，不相等返回 true。               | [ $a -ne $b ] 返回 true。  |
  | -gt    | 检测左边的数是否大于右边的，如果是，则返回 true。     | [ $a -gt $b ] 返回 false。 |
  | -lt    | 检测左边的数是否小于右边的，如果是，则返回 true。     | [ $a -lt $b ] 返回 true。  |
  | -ge    | 检测左边的数是否大于等于右边的，如果是，则返回 true。 | [ $a -ge $b ] 返回 false。 |
  | -le    | 检测左边的数是否小于等于右边的，如果是，则返回 true。 | [ $a -le $b ] 返回 true。  |

  | 运算符 | 说明                                                | 举例                                     |
  | :----- | :-------------------------------------------------- | :--------------------------------------- |
  | !      | 非运算，表达式为 true 则返回 false，否则返回 true。 | [ ! false ] 返回 true。                  |
  | -o     | 或运算，有一个表达式为 true 则返回 true。           | [ $a -lt 20 -o $b -gt 100 ] 返回 true。  |
  | -a     | 与运算，两个表达式都为 true 才返回 true。           | [ $a -lt 20 -a $b -gt 100 ] 返回 false。 |

  | 运算符 | 说明       | 举例                                       |
  | :----- | :--------- | :----------------------------------------- |
  | &&     | 逻辑的 AND | [[ $a -lt 100 && $b -gt 100 ]] 返回 false  |
  | \|\|   | 逻辑的 OR  | [[ $a -lt 100 \|\| $b -gt 100 ]] 返回 true |

- **判断**

  `if...then...fi `是条件语句，后续将会讲解

  ```bash 
  if [ $a != $b ]
  then
     echo "a 不等于 b"
  fi
  
  
  if [ $a -eq $b ]
  then
     echo "$a -eq $b : a 等于 b"
  else
     echo "$a -eq $b: a 不等于 b"
  fi
  ```



- **循环**

  ```bash 
  for loop in 1 2 3 4 5
  do
      echo "The value is: $loop"
  done
  
  
  while condition
  do
      command
  done
  
  
  until condition
  do
      command
  done
  ```



- **条件执行**

  ```bash 
  case 值 in
  模式1)
      command1
      command2
      ...
      commandN
      ;;
  模式2)
      command1
      command2
      ...
      commandN
      ;;
  esac
  ```

  

## 文件包含

```
. filename   # 注意点号(.)和文件名中间有一空格

或

source filename
```



## shell传递参数

命令行输入

```bash 
$ ./test.sh 1 2 3
```

脚本内可以通过以下方式获取

```bash 
$0 $1 ...
```



## 命令执行

一般情况下是至上而下执行

```bash 
# 先执行command1再执行command2
command1  && command2

# command1执行失败才执行command2
command1  || command2
```



## 实战

> vuepress自动化脚本部署到GitHub Pages

```bash 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

