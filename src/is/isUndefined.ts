/**
 * 判断是否为undefined
 * @param {any} arg 不传参也是undefined，返回true
 * @return Boolean 返回布尔值
 */

export const isUndefined = (arg?: any) => {
	return arg === undefined && typeof arg === "undefined";
};
