/**
 * 判断传入参数是否为数值,例：isNumber(45)
 * @param arg 需要判断的值
 * @return Boolean 返回布尔值
 */

const isNumber = (arg: any): Boolean => {
	return typeof arg === "number";
};

/**
 * isNumber()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isNumber.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isNumber(m));
};

/**
 * isNumber()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isNumber.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isNumber(m));
};
export { isNumber };
