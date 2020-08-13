#### isString 
> 判断是否为字符串

```javascript
import { isString } from "ascor";

isString("123"); //true;
isString(""); //true;
isString([]); //false;
isString({}); //false;
isString(null); //false;
isString.all(null, "str"); //false;
isString.or(null, "str"); //true;
```