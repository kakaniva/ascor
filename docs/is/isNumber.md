> 判断是否为 Number 类型

```javascript
import { isNumber } from "ascor";

isNumber(12); //true
isNumber("12"); //false
// 判断多个值
isNumber.all(1, 2, "3"); //false
isNumber.or(1, 2, "3"); //true
```
