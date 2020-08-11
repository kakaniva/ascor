/**
 * 判断是否为undefined
 * @param {any} arg 不传参也是undefined，返回true
 * @return Boolean 返回布尔值
 */

const isUndefined = (arg?: any) => {
	return arg === undefined && typeof arg === "undefined";
};

/**
 * isUndefined()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isUndefined.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isUndefined(m));
};

/**
 * isUndefined()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isUndefined.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isUndefined(m));
};

export { isUndefined };
