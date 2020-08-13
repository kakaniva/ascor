#### isEmpty 
> 判断是否为空值 ， 空字符串'' ,null ,undefined 都认为是空值

```javascript
import { isEmpty } from "ascor";

isEmpty(null); //true;
isEmpty(undefined); //true;
isEmpty(""); //true;
isEmpty(0); //false;
isEmpty(NaN); //false;
// 判断多个
isEmpty.all(NaN, 11); //false;
isEmpty.or(null, 11); //true;
```