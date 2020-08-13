#### isObject 
> 判断是否为对象 如：{a:1}、{}

```javascript
import { isObject } from "ascor";

isObject(null); //false;
isObject([]); //false;
isObject([{ a: 1 }, { a: 2 }]); //false;
isObject({ a: 1 }); //true;
isObject(undefined); //false;
isObject.all(undefined, {}); //false;
isObject.or(undefined, {}); //true;
```