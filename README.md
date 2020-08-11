# kacore

### 介绍

一些常用的 js 工具,ts 编写，但只转为 es6 语法，所以需要转 es5 的，请自行搞掂，一般的脚手架都会集成 babel 转码的，如:@vue/cli,create-react-app,@angular/cli

### 安装教程

```bash
# 使用npm
npm install -S kacore

# 使用yarn
yarn add -S kacore
```

### 使用教程

```javascript
import { isNumber } from "kacore";
//或
import * as kc from "kacore";

isNumber(45); // true
isNumber("45"); // false
isNumber.all("45", 45); // false
isNumber.or("45", 45); // true

kc.isNumber(12); //true
kc.isNumber.all(12, 23); //true
kc.isNumber.or(12, 23, 45); //true
```

### API

#### is 相关函数

-   isArray
-   isDeepEqual
-   isEmail
-   isEmpty
-   isNumber
-   isFunction
-   isString
-   isNull
-   isUndefined
-   isObject
-   isPhone
-   isTel
-   isPositiveNumber
-   isTypeEqual

#### Array 相关函数

-   arrayHasRepeat
-   arrayHasValue
-   arraySort
-   arrayUnique

#### date 相关函数

-   Countdown
-   dateFormat
-   delay
-   getCurrentTime
-   Timer

#### utils 相关函数

-   createTree
-   deepMergeObject
-   getRanStr
-   toThousands
-   trim
-   trimL
-   trimR
