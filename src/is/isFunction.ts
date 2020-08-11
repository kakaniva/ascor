/**
 * 判断是否为函数
 * @param arg 任意值
 * @return Boolean 返回布尔值
 */

const isFunction = (arg: any) => {
	return typeof arg === "function";
};

/**
 * isFunction()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isFunction.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isFunction(m));
};

/**
 * isFunction()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isFunction.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isFunction(m));
};

export { isFunction };
