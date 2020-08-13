#### isPositiveNumber 
> 判断是否为正数

```javascript
import { isPositiveNumber } from "ascor";

isPositiveNumber(12.12); //true;
isPositiveNumber("12"); //true;
isPositiveNumber("12f"); //false;
isPositiveNumber("-12"); //false;
isPositiveNumber("-12.12"); //false;
isPositiveNumber.all("-12.12", 12); //false;
isPositiveNumber.or("-12.12", 12); //true;
```