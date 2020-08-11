/**
 * 判断是否为邮箱，名称允许汉字、字母、数字，域名只允许英文域名
 * @param arg 传入邮箱
 * @return Boolean 返回布尔值
 */

const isEmail = (arg: string) => {
	let reg = /^[A-Za-z0-9\u4e00-\u9fa5\.\_\-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	return reg.test(arg);
};

/**
 * isEmail()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isEmail.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isEmail(m));
};

/**
 * isEmail()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isEmail.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isEmail(m));
};

export { isEmail };
