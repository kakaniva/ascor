/**
 * 数据容量换算，最小单位B
 * @param  num 传入需要转化的容量，单位B
 */

export const diskSize = (num: number) => {
	if (isNaN(num)) {
		return "0 B";
	}
	num = Number(num);
	if (num == 0) return "0 B";
	let k = 1024; //设定基础容量大小
	let sizeStr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]; //容量单位列表
	let i = 0; //单位下标和次幂
	for (let l = 0; l < 8; l++) {
		//因为只有8个单位所以循环八次
		if (num / Math.pow(k, l) < 1) {
			//判断传入数值 除以 基础大小的次幂 是否小于1，这里小于1 就代表已经当前下标的单位已经不合适了所以跳出循环
			break; //小于1跳出循环
		}
		i = l;
	}
	return (num / Math.pow(k, i)).toFixed(2) + " " + sizeStr[i]; //循环结束 或 条件成立 返回字符
};
