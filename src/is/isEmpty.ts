import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";

/**
 * 判断是否为空值，如'',null,undefined 均返回true
 * @param arg 任意值
 * @return Boolean 返回布尔值
 */

const isEmpty = (arg: any) => {
	return isNull(arg) || isUndefined(arg) || arg === "";
};

/**
 * isEmpty()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isEmpty.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isEmpty(m));
};

/**
 * isEmpty()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isEmpty.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isEmpty(m));
};

export { isEmpty };
