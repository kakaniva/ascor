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