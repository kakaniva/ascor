#### arraySort 
> 数组排序，正序：纯数字 >> 中文 >> 字母，倒序 ： 字母 >> 中文 >> 纯数字，中文则按拼音首字母排列

```javascript
import { arraySort } from "ascor";

arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "desc" });
//[89, 69, 66, 37, 9, 5, 5, 3, 2, 1]

arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "asc" });
//[1, 2, 3, 5, 5, 9, 37, 66, 69, 89]

arraySort(["dfa", "sd", "bt", "aa", "ebe", "sg"], { mode: "asc" });
//["aa", "bt", "dfa", "ebe", "sd", "sg"]

arraySort(["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"], { mode: "asc" });
//["李四", "孙七", "王五", "吴九", "张三", "赵六", "郑十", "周八"]

arraySort([{ id: 456 }, { id: 12 }, { id: "asdf" }, { id: 9 }], { mode: "asc", key: "id" });
//[{ id: 9 }, { id: 12 }, { id: 456 }, { id: "asdf" }]
```