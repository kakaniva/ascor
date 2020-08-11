/**
 * 判断是否为固定电话 如0758-88888888
 * @param arg
 */

const isTel = (arg: any) => {
	let reg = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
	return reg.test(arg);
};

/**
 * isTel()的与运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */

isTel.all = (...arg: any[]): Boolean => {
	return arg.every((m) => isTel(m));
};

/**
 * isTel()的或运算
 * @param arg 可传多个判断
 * @return Boolean 返回布尔值
 */
isTel.or = (...arg: any[]): Boolean => {
	return arg.some((m) => isTel(m));
};

export { isTel };
