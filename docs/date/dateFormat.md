#### dateFormat 
> 时间格式化,第一个参数为时间戳或时间实例，第二个参数为格式化字符串：如： yyyy-mm-dd HH:MM:SS

```javascript
import { dateFormat } from "ascor";

dateFormat(new Date(1597131200000), "YYYY-mm-dd HH:MM"); // 2020-08-11 15:33
dateFormat(new Date(1597131200000), "YYYY-mm-dd"); // 2020-08-11
dateFormat(1597131200000, "YYYY-mm-dd"); // 2020-08-11
```