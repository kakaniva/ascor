/**
 * 判断是否为对象
 * @param arg
 * @return Boolean 返回布尔值
 */

const isObject = (arg: any) => {
	return arg instanceof Object && Object.prototype.toString.call(arg) === "[object Object]";
};

/**
 * isObject()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isObject.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isObject(m));
};

/**
 * isObject()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isObject.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isObject(m));
};

export { isObject };
