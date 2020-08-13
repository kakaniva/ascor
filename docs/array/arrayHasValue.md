#### arrayHasValue 
> 判断数组是否存在某个值，第一个参数为数组，第二个参数为要搜索的值，如果存在返回数组的下标，否则返回-1

```javascript
import { arrayHasValue } from "ascor";

arrayHasValue([12, 45, 67, 89, 67, 12], 12); // 0
arrayHasValue([12, 45, 67, 89, 67, 12], 89); // 3
arrayHasValue([{ a: 1 }, { a: 2 }], { a: 1 }); // 0
arrayHasValue([{ a: 1 }, { a: 2 }], { a: 3 }); // -1
```