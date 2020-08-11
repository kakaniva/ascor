/**
 * 判断是否为字符串
 * @param {any} arg
 * @return Boolean 返回布尔值
 */

const isString = (arg: any) => {
	return typeof arg === "string";
};

/**
 * isString()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isString.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isString(m));
};

/**
 * isString()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isString.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isString(m));
};

export { isString };
