> 去除字符串左边空格、制表符、回车

```javascript
import { trimL } from "ascor";

trimL("   something      "); // "something      "
trimL("   some   thing      "); // "some   thing      "
```