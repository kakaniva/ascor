> 容量格式化，转化为人类习惯的单位，如 1024B => 1.00 KB ,保留 2 位小数 最小单位B

```javascript
import { diskSize } from "ascor";

diskSize(1024); //"1.00 KB"
diskSize(12456465); //"11.88 MB"
diskSize(42965465); //"40.98 MB"
```