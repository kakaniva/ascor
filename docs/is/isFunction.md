> 判断是否为函数

```javascript
import { isFunction } from "ascor";

isFunction({ a: 1 }); //false;
isFunction(undefined); //false;
// 判断多个
isFunction.all(undefined, () => {}); //false;
isFunction.or(undefined, () => {}); //true;
```