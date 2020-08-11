/**
 * 判断传入参数是否为数组
 * @param arg 参数，任意值
 * @return Boolean 返回布尔值
 */
const isArray = (arg: any) => {
	return Array.isArray(arg);
};

/**
 * isArray()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isArray.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isArray(m));
};

/**
 * isArray()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isArray.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isArray(m));
};

export { isArray };
