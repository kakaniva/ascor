#### isEmail 
> 判断是否为正确的电子邮箱，支持名称为中文

```javascript
import { isEmail } from "ascor";

isEmail("123@qq.com"); //true
isEmail("中文@some.com"); //true
isEmail("123@中文.cn"); //false
// 判断多个
isEmail.all("123@qq.cn", "123"); //false
isEmail.or("123@qq.cn", "123"); //true
```