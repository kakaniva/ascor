#### delay 
> 延时执行，相当于 setTimeout，只是封装成 Promise,比较适合 async 异步函数内配合 await 使用，如 await delay(3000)

```javascript
import { delay } from "ascor";

const delay3 = async () => {
	await delay(3000); //单位：毫秒， 延时3000毫秒
	//do something
};
```