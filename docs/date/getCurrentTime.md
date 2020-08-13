> 获取当前时间，参数，默认 false 返回时间实例，true 返回时间戳（13 位）

```javascript
import { getCurrentTime } from "ascor";

getCurrentTime(false); //Tue Aug 11 2020 15:33:20 GMT+0800 (中国标准时间) {} ,实际运行时，以系统时间为准
getCurrentTime(true); //1597131200000,实际运行时，以系统时间为准
```