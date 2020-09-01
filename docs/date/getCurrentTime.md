#### getCurrentTime 

> 获取当前时间，参数，默认 false 返回时间实例，true 返回时间戳（13 位）,也可以传入格式化的字符串 如: ‘YYYY-mm-dd HH:MM:SS’

```javascript
import { getCurrentTime } from "ascor";

getCurrentTime(false); //Tue Aug 11 2020 15:33:20 GMT+0800 (中国标准时间) {} ,实际运行时，以系统时间为准
getCurrentTime(true); //1597131200000,实际运行时，以系统时间为准
getCurrentTime('YYYY-mm-dd HH:MM:SS'); //2020-09-01 20:12:24 ,实际运行时，以系统时间为准
```