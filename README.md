# asco

### 介绍

一些常用的 js 工具,ts 编写，但只转为 es6 语法，所以需要转 es5 的，请自行搞掂，一般的脚手架都会集成 babel 转码的，如:@vue/cli,create-react-app,@angular/cli

### 安装教程

```bash
# 使用npm
npm install -S asco

# 使用yarn
yarn add -S asco
```

### 使用教程

```javascript
import { isNumber } from "asco";
//或
import * as asc from "asco";

isNumber(45); // true
isNumber("45"); // false
isNumber.all("45", 45); // false
isNumber.or("45", 45); // true

asc.isNumber(12); //true
asc.isNumber.all(12, 23); //true
asc.isNumber.or(12, 23, 45); //true
```

### API

#### is 相关函数

-   **isArray** 判断是否为数组
-   **isDeepEqual** 判断两个值是否深度相等
-   **isEmail** 判断是否为正确的电子邮箱
-   **isEmpty** 判断是否为空值
-   **isNumber** 判断是否为 Number 类型
-   **isFunction** 判断是否为函数
-   **isString** 判断是否为字符串
-   **isNull** 判断是否为 null
-   **isUndefined** 判断是否为 undefined
-   **isObject** 判断是否为对象
-   **isPhone** 判断是否为正确的手机号码
-   **isTel** 判断是否为正确的固定电话号码
-   **isPositiveNumber** 判断是否为正数
-   **isTypeEqual** 判断两个值是否类型相同

#### Array 相关函数

-   **arrayHasRepeat** 判断数组是否存在重复元素
-   **arrayHasValue** 判断数组是否存在指定元素
-   **arraySort** 数组排序
-   **arrayUnique** 数组去重

#### date 相关函数

-   **Countdown** 倒计时类
-   **dateFormat** 时间格式化
-   **delay** 延时执行
-   **getCurrentTime** 获取当前时间
-   **Timer** 计时器

#### utils 相关函数

-   **createTree** 创建树（森林）
-   **deepMergeObject** 对象深度合并
-   **getRanStr** 获取随机字符串
-   **toThousands** 数值每三位加逗号
-   **trim** 去除字符串首尾空格
-   **trimL** 去除字符串左边空格
-   **trimR** 去除字符串右边空格
