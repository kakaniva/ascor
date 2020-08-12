import { isNumber } from "../is/index";
/**
 * 时间格式化
 * @param {Date | Number} date 时间对象，如new Date(),new Date('2019/05/05 08:08:08') 或时间戳 如：1596507000
 * @param {String} fmt 格式，如”YYYY-mm-dd HH:MM:SS“
 * @return 返回格式化的字符串
 */
export const dateFormat = (date: Date | number = new Date(), fmt: string = "YYYY-mm-dd HH:MM") => {
	if (!isNaN(<number>date)) {
		date = Number(date);
	}
	if (isNumber(date)) {
		date = new Date(date);
	}
	if (!(date instanceof Date)) {
		return date;
	}
	let opt: any = {
		"Y+": date.getFullYear().toString(), // 年
		"y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"S+": date.getSeconds().toString(), // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		let ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
		}
	}
	return fmt;
};
