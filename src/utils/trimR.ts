import { isString } from "../is/index";
/**
 * 去除字符串右边空格，制表符，回车
 * @param str
 * @return string 返回字符串
 */

export const trimR = (str: string) => {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/([\s\n\t]+$)/g, "");
};
