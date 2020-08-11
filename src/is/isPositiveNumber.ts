/**
 * 校验正数值
 * @param arg
 * @return Boolean 返回布尔值
 */

const isPositiveNumber = (arg: any) => {
	let reg = /^(0|[1-9][0-9]*)(\.\d+)?$/;
	return reg.test(arg);
};

/**
 * isPositiveNumber()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isPositiveNumber.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isPositiveNumber(m));
};

/**
 * isPositiveNumber()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isPositiveNumber.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isPositiveNumber(m));
};

export { isPositiveNumber };
