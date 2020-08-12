import { isString } from "../is/index";

/**
 * 去除字符串首尾空格，制表符，回车
 * @param str
 * @return string 返回字符串
 */

export const trim = (str: string) => {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
};
