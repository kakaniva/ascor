#### isPhone 
> 判断是否为正确的手机号码

```javascript
import { isPhone } from "ascor";

isPhone("13413899999"); //true;
isPhone("1341899999"); //false;
isPhone("1234189999"); //false;
isPhone(13413899090); //true;
isPhone.all(13413899090, 123456); //false;
isPhone.or(13413899090, 123456); //true;
```