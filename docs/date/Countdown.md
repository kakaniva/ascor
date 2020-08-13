#### Countdown 
> 倒计时

```javascript
import { Countdown } from "ascor";

let c1 = new Countdown(5); //设置5秒倒计时
c1.run((t) => {
	//每秒触发一次
	console.log(t); //剩余秒数
	// do something
});

let c2 = new Countdown(10, 1); //设置10秒倒计时，第二个参数为倒计时间隔，默认1秒
c2.run((t) => {
	console.log(t);
	if (t == 8) {
		c.reset(4, 2); //重置倒计时数和间隔
	}
});
```