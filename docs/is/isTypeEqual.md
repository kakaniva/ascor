> 判断两个值是否类型一样

```javascript
import { isTypeEqual } from "ascor";

isTypeEqual(456, "456"); //false;
isTypeEqual(456, 123); //true;
isTypeEqual(456, null); //false;
isTypeEqual(undefined, null); //false;
isTypeEqual({}, "{}"); //false;
```