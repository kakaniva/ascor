import { isString } from "../is/index";

/**
 * 去除字符串左边空格，制表符，回车
 * @param {String} str
 * @return string 返回字符串
 */

export const trimL = (str: string) => {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/(^[\s\n\t]+)/g, "");
};
