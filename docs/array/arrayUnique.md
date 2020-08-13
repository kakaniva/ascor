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