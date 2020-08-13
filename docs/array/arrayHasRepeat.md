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