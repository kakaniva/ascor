> 判断是否为固话，支持分机号 xxxx-xxxxxxx-xxxx

```javascript
import { isTel } from "ascor";

isTel("13413899999"); //false;
isTel("0758-88888888"); //true;
isTel("0758-7777777"); //true;
isTel("0758-7777777-1234"); //true;
isTel("07587777777-1234"); //false;
isTel.all("0758-7777777-1234", "123456"); //false;
isTel.or("0758-7777777-1234", "123456"); //true;
```