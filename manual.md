## API

### is 相关函数

#### isNumber

> 判断是否为 Number 类型

```javascript
import { isNumber } from "ascor";

isNumber(12); //true
isNumber("12"); //false
// 判断多个值
isNumber.all(1, 2, "3"); //false
isNumber.or(1, 2, "3"); //true
```

#### isArray

> 判断是否为 Array 类型

```javascript
import { isArray } from "ascor";

isArray([12]); //true
isArray("12"); //false
// 判断多个值
isArray.all([1], 2, "3"); //false
isArray.or([1], 2, "3"); //true
```

#### isDeepEqual

> 判断两个值是否深度相等，值使用全等于判断，所以 '12' !== 12

```javascript
import { isDeepEqual } from "ascor";

isDeepEqual([12], [12]); //true
isDeepEqual([12], ["12"]); //false
isDeepEqual({ a: 1 }, { a: "1" }); //false
isDeepEqual({ a: 1 }, { a: 1 }); //true
```

#### isEmail

> 判断是否为正确的电子邮箱，支持名称为中文

```javascript
import { isEmail } from "ascor";

isEmail("123@qq.com"); //true
isEmail("中文@some.com"); //true
isEmail("123@中文.cn"); //false
// 判断多个
isEmail.all("123@qq.cn", "123"); //false
isEmail.or("123@qq.cn", "123"); //true
```

#### isEmpty

> 判断是否为空值 ， 空字符串'' ,null ,undefined 都认为是空值

```javascript
import { isEmpty } from "ascor";

isEmpty(null); //true;
isEmpty(undefined); //true;
isEmpty(""); //true;
isEmpty(0); //false;
isEmpty(NaN); //false;
// 判断多个
isEmpty.all(NaN, 11); //false;
isEmpty.or(null, 11); //true;
```

#### isFunction

> 判断是否为函数

```javascript
import { isFunction } from "ascor";

isFunction({ a: 1 }); //false;
isFunction(undefined); //false;
// 判断多个
isFunction.all(undefined, () => {}); //false;
isFunction.or(undefined, () => {}); //true;
```

#### isNull

> 判断是否为 null

```javascript
import { isNull } from "ascor";

isNull(null); //true;
isNull("null"); //false;
isNull({ a: 1 }); //false;
isNull(undefined); //false;
isNull.all(undefined, null); //false;
isNull.or(undefined, null); //true;
```

#### isObject

> 判断是否为对象 如：{a:1}、{}

```javascript
import { isObject } from "ascor";

isObject(null); //false;
isObject([]); //false;
isObject([{ a: 1 }, { a: 2 }]); //false;
isObject({ a: 1 }); //true;
isObject(undefined); //false;
isObject.all(undefined, {}); //false;
isObject.or(undefined, {}); //true;
```

#### isPhone

> 判断是否为正确的手机号码

```javascript
import { isPhone } from "ascor";

isPhone("13413899999"); //true;
isPhone("1341899999"); //false;
isPhone("1234189999"); //false;
isPhone(13413899090); //true;
isPhone.all(13413899090, 123456); //false;
isPhone.or(13413899090, 123456); //true;
```

#### isPositiveNumber

> 判断是否为正数

```javascript
import { isPositiveNumber } from "ascor";

isPositiveNumber(12.12); //true;
isPositiveNumber("12"); //true;
isPositiveNumber("12f"); //false;
isPositiveNumber("-12"); //false;
isPositiveNumber("-12.12"); //false;
isPositiveNumber.all("-12.12", 12); //false;
isPositiveNumber.or("-12.12", 12); //true;
```

#### isString

> 判断是否为字符串

```javascript
import { isString } from "ascor";

isString("123"); //true;
isString(""); //true;
isString([]); //false;
isString({}); //false;
isString(null); //false;
isString.all(null, "str"); //false;
isString.or(null, "str"); //true;
```

#### isTel

> 判断是否为固话，支持分机号 xxxx-xxxxxxx-xxxx

```javascript
import { isTel } from "ascor";

isTel("13413899999"); //false;
isTel("0758-88888888"); //true;
isTel("0758-7777777"); //true;
isTel("0758-7777777-1234"); //true;
isTel("07587777777-1234"); //false;
isTel.all("0758-7777777-1234", "123456"); //false;
isTel.or("0758-7777777-1234", "123456"); //true;
```

#### isTypeEqual

> 判断两个值是否类型一样

```javascript
import { isTypeEqual } from "ascor";

isTypeEqual(456, "456"); //false;
isTypeEqual(456, 123); //true;
isTypeEqual(456, null); //false;
isTypeEqual(undefined, null); //false;
isTypeEqual({}, "{}"); //false;
```

#### isUndefined

> 判断两个值是否类型一样

```javascript
import { isUndefined } from "ascor";

isUndefined([]); //false;
isUndefined({ a: 1 }); //false;
isUndefined(undefined); //true;
isUndefined(); //true;
isUndefined.all(12, undefined); //false;
isUndefined.or(12, undefined); //true;
```

### Array 相关函数

#### arrayHasRepeat

> 判断数组是否存在重复值,使用全等于对比， 12 !== '12'

```javascript
import { arrayHasRepeat } from "ascor";

arrayHasRepeat([12, 45, 67, 89, 67, 12]); //true;
arrayHasRepeat(["12", 45, "67", 89, 67, 12]); //false;
arrayHasRepeat([{ a: 1 }, { a: 2 }, { a: 1 }]); //true;
arrayHasRepeat([{ a: 1 }, { a: 2 }, { a: "1" }]); //false;
arrayHasRepeat([{ a: { c: 1 } }, { a: 2 }, { a: "1" }, { a: { c: 1 } }]); //true;
```

#### arrayHasValue

> 判断数组是否存在某个值，第一个参数为数组，第二个参数为要搜索的值，如果存在返回数组的下标，否则返回-1

```javascript
import { arrayHasValue } from "ascor";

arrayHasValue([12, 45, 67, 89, 67, 12], 12); // 0
arrayHasValue([12, 45, 67, 89, 67, 12], 89); // 3
arrayHasValue([{ a: 1 }, { a: 2 }], { a: 1 }); // 0
arrayHasValue([{ a: 1 }, { a: 2 }], { a: 3 }); // -1
```

#### arraySort

> 数组排序，正序：纯数字 >> 中文 >> 字母，倒序 ： 字母 >> 中文 >> 纯数字，中文则按拼音首字母排列

```javascript
import { arraySort } from "ascor";

arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "desc" });
//[89, 69, 66, 37, 9, 5, 5, 3, 2, 1]

arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "asc" });
//[1, 2, 3, 5, 5, 9, 37, 66, 69, 89]

arraySort(["dfa", "sd", "bt", "aa", "ebe", "sg"], { mode: "asc" });
//["aa", "bt", "dfa", "ebe", "sd", "sg"]

arraySort(["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"], { mode: "asc" });
//["李四", "孙七", "王五", "吴九", "张三", "赵六", "郑十", "周八"]

arraySort([{ id: 456 }, { id: 12 }, { id: "asdf" }, { id: 9 }], { mode: "asc", key: "id" });
//[{ id: 9 }, { id: 12 }, { id: 456 }, { id: "asdf" }]
```

#### arrayUnique

> 数组去重,第一个参数传入需要去重的数组，第二个参数传入数组元素对比的唯一 key，不传则深度对比去重

```javascript
import { arrayUnique } from "ascor";

arrayUnique([1, 2, 3, 4, 2, 5, 6, 8, "2"]);
//[1, 2, 4, 3, 5, 6, 8, "2"]);

arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }]);
//[{ a: 2 }, { a: 1 }]);

arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }], "a");
//[{ a: 1 }, { a: 2 }]);

arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }, { a: 3 }, { a: "3" }], "a");
//[{ a: 1 }, { a: 2 }, { a: 3 }, { a: "3" }]);

arrayUnique([null, undefined, "a", "", null, null, undefined, "", 2]);
//[null, undefined, "a", "", 2]);
```

### date 相关函数

#### Countdown

> 倒计时

```javascript
import { Countdown } from "ascor";

let c1 = new Countdown(5); //设置5秒倒计时
c1.run((t) => {
	//每秒触发一次
	console.log(t); //剩余秒数
	// do something
});

let c2 = new Countdown(10, 1); //设置10秒倒计时，第二个参数为倒计时间隔，默认1秒
c2.run((t) => {
	console.log(t);
	if (t == 8) {
		c.reset(4, 2); //重置倒计时数和间隔
	}
});
```

#### dateFormat

> 时间格式化,第一个参数为时间戳或时间实例，第二个参数为格式化字符串：如： yyyy-mm-dd HH:MM:SS

```javascript
import { dateFormat } from "ascor";

dateFormat(new Date(1597131200000), "YYYY-mm-dd HH:MM"); // 2020-08-11 15:33
dateFormat(new Date(1597131200000), "YYYY-mm-dd"); // 2020-08-11
dateFormat(1597131200000, "YYYY-mm-dd"); // 2020-08-11
```

#### delay

> 延时执行，相当于 setTimeout，只是封装成 Promise,比较适合 async 异步函数内配合 await 使用，如 await delay(3000)

```javascript
import { delay } from "ascor";

const delay3 = async () => {
	await delay(3000); //单位：毫秒， 延时3000毫秒
	//do something
};
```

#### getCurrentTime

> 获取当前时间，参数，默认 false 返回时间实例，true 返回时间戳（13 位）

```javascript
import { getCurrentTime } from "ascor";

getCurrentTime(false); //Tue Aug 11 2020 15:33:20 GMT+0800 (中国标准时间) {} ,实际运行时，以系统时间为准
getCurrentTime(true); //1597131200000,实际运行时，以系统时间为准
```

#### Timer

> 计时器（秒表）

```javascript
import { Timer } from "ascor";

let t = new Timer();
t.start(); //开始计时，没有调用start，step和stop均返回0

console.log(t.step()); //计次，第一次返回距离开始的毫秒数
console.log(t.step()); //计次，第二次返回距离开始的毫秒数
console.log(t.stop()); //停止并返回距离开始的毫秒数
```

### utils 相关函数

#### createTree

> 创建树或森林

```javascript
import { createTree } from "ascor";

createTree(
	[
		{ pid: 1, id: "1-2" },
		{ pid: "1-2", id: "1-2-3" },
		{ pid: 1, id: "1-3" },
		{ pid: "1-3", id: "1-3-2" },
		{ pid: "2", id: "2-3" },
	],
	{ parentKey: "pid", ownKey: "id" }
);

// [
// 	{
// 		children: [
// 			{
// 				children: [],
// 				id: "1-2-3",
// 				isLeaf: true,
// 				pid: "1-2",
// 			},
// 		],
// 		id: "1-2",
// 		isLeaf: false,
// 		pid: 1,
// 	},
// 	{
// 		children: [
// 			{
// 				children: [],
// 				id: "1-3-2",
// 				isLeaf: true,
// 				pid: "1-3",
// 			},
// 		],
// 		id: "1-3",
// 		isLeaf: false,
// 		pid: 1,
// 	},
// 	{
// 		children: [],
// 		id: "2-3",
// 		isLeaf: true,
// 		pid: "2",
// 	},
// ]
```

#### deepMergeObject

> 深度合并对象

```javascript
import { deepMergeObject } from "ascor";

deepMergeObject({ a: { b: 3 } }, { a: { b: 4 } }); //{ a: { b: 4 } }
deepMergeObject({ a: { b: 3, c: "12" } }, { a: { b: 4 } }); //{ a: { b: 4, c: "12" } }
```

#### getRanStr

> 获取随机字符串，默认 36 位

```javascript
import { getRanStr } from "ascor";

getRanStr(12); //生成12位的随机字符串 如：OAGPuIlwRkjB
getRanStr(36); //生成12位的随机字符串 如：xRw7kHUchL6alWKRyK18Y9vaaIduRN69ow1v
```

#### toThousands

> 数组格式化 如 4567893 => 4,567,893

```javascript
import { toThousands } from "ascor";

toThousands(47894564); // 47,894,564
toThousands(9566526); // 9,566,526
```

#### trim

> 去除字符串首尾空格、制表符、回车

```javascript
import { trim } from "ascor";

trim("   something      "); // "something"
trim("   some   thing      "); // "some   thing"
```

#### trimL

> 去除字符串左边空格、制表符、回车

```javascript
import { trimL } from "ascor";

trimL("   something      "); // "something      "
trimL("   some   thing      "); // "some   thing      "
```

#### trimR

> 去除字符串右边空格、制表符、回车

```javascript
import { trimR } from "ascor";

trimR("   something      "); // "   something"
trimR("   some   thing      "); // "   some   thing"
```
