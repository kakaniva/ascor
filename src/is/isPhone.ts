/**
 * 判断是否为手机号码
 * @param  arg
 * @return Boolean 返回布尔值
 */

const isPhone = (arg: any) => {
	let reg = /^1[3-9]\d{9}$/;
	return reg.test(arg);
};

/**
 * isPhone()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isPhone.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isPhone(m));
};

/**
 * isPhone()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isPhone.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isPhone(m));
};

export { isPhone };
