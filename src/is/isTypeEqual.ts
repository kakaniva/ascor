/**
 * 判断两个值类型是否相同
 * @param  a 任意值
 * @param  b 任意值
 * @return Boolean 返回布尔值
 */

export const isTypeEqual = (a: any, b: any) => {
	return typeof a === typeof b && Object.prototype.toString.call(a) === Object.prototype.toString.call(b);
};
