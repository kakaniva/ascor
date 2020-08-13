> 计时器（秒表）

```javascript
import { Timer } from "ascor";

let t = new Timer();
t.start(); //开始计时，没有调用start，step和stop均返回0

console.log(t.step()); //计次，第一次返回距离开始的毫秒数
console.log(t.step()); //计次，第二次返回距离开始的毫秒数
console.log(t.stop()); //停止并返回距离开始的毫秒数
```