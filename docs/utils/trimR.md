> 去除字符串右边空格、制表符、回车

```javascript
import { trimR } from "ascor";

trimR("   something      "); // "   something"
trimR("   some   thing      "); // "   some   thing"
```