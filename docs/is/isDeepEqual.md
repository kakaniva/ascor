> 判断两个值是否深度相等，值使用全等于判断，所以 '12' !== 12

```javascript
import { isDeepEqual } from "ascor";

isDeepEqual([12], [12]); //true
isDeepEqual([12], ["12"]); //false
isDeepEqual({ a: 1 }, { a: "1" }); //false
isDeepEqual({ a: 1 }, { a: 1 }); //true
```