/**
 * 格式化数值，每三位加逗号
 * @param  num 传入需要格式化的数值
 * @return string 返回格式化后的数值
 */

export const toThousands = (num: string | number) => {
	if (isNaN(<number>num)) {
		return num;
	}
	num = (num || 0).toString();
	let number = 0,
		floatNum = "",
		intNum: string | string[] = "";
	// 判断是否有小数位，有则截取小数点后的数字
	if (num.indexOf(".") > 0) {
		number = num.indexOf("."); // 获取小数点出现的位置
		floatNum = num.substr(number); // 截取arr.substr(form, length)
		intNum = num.substring(0, number); // 截取arr.substring(start, end)
	} else {
		intNum = num;
	}
	let result = [],
		counter = 0;
	intNum = intNum.split("");
	// 利用3的倍数，向数组插入','
	for (let i = intNum.length - 1; i >= 0; i--) {
		counter++;
		result.unshift(intNum[i]);
		if (!(counter % 3) && i != 0) {
			result.unshift(",");
		}
	}
	return result.join("") + floatNum || "";
};
