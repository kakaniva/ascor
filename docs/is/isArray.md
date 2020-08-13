> 判断是否为 Array 类型

```javascript
import { isArray } from "ascor";

isArray([12]); //true
isArray("12"); //false
// 判断多个值
isArray.all([1], 2, "3"); //false
isArray.or([1], 2, "3"); //true
```