/**
 * 判断是否为null
 * @param  arg 任意值
 * @return Boolean 返回布尔值
 */

const isNull = (arg: any) => {
	return arg === null && typeof arg === "object";
};

/**
 * isNull()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isNull.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isNull(m));
};

/**
 * isNull()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isNull.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isNull(m));
};

export { isNull };
