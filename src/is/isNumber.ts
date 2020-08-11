/**
 * 判断传入参数是否为数值,例：isNumber(45)
 * @param arg 需要判断的值
 * @return Boolean 返回布尔值
 */

const isNumber = (arg: any): Boolean => {
	return typeof arg === "number";
};

/**
 * 判断多个参数是否都为number类型,例：isNumber.all(45,'str')
 * @param arg 可传多个判断，当所有参数都为number类型时返回true
 * @return Boolean 返回布尔值
 */

isNumber.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isNumber(m));
};

/**
 * 判断多个参数是否存在number类型,例：isNumber.or(45,'str')
 * @param arg 可传多个判断，当传入的参数存在number类型时返回true
 * @return Boolean 返回布尔值
 */
isNumber.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isNumber(m));
};

export { isNumber };
