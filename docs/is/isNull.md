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