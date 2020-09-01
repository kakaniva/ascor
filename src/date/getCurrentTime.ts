import { dateFormat } from "./dateFormat";

/**
 * 获取当前时间 例：getCurrentTime(true)
 * @param {Boolean | String} bool  true返回时间戳，false返回Date实例,也可以传入格式化的字符串 如: ‘YYYY-mm-dd HH:MM:SS’
 */

export const getCurrentTime = (bool: Boolean | string = false): number | Date | string => {
	if (typeof bool == "string") {
		return dateFormat(new Date(), <string>bool);
	}
	return bool ? new Date().getTime() : new Date();
};
