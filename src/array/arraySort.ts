import { isString, isArray, isEmpty, isNumber, isObject } from "../is/index";

interface configMode {
	mode?: "asc" | "desc"; //模式 asc：正序  desc：倒序,默认asc
	key?: string; //数组元素对象的键
}

/**
 * 数组排序，正序：纯数字 >> 中文 >> 字母，倒序 ： 字母 >> 中文 >> 纯数字，中文则按拼音首字母排列
 * @param  arr 传入需要排序的数组
 * @param  config {mode:"asc | desc",key:"id"} asc正序，从小到大，desc倒序，从大到小， key为要比较的对象的key
 * @return Array 返回排序后的数组
 */

export const arraySort = (arr: any[], config?: configMode) => {
	let _c = {
		mode: "asc", //默认正序
		key: "",
		...(isObject(config) ? config : {}),
	};
	if (!isArray(arr)) {
		return arr;
	}

	let format = (v: any, key: string) => {
		if (isEmpty(v)) {
			return 0;
		}
		let _v = isEmpty(key) ? v : v[key];
		if (isEmpty(_v)) {
			return 0;
		}
		if (isNumber(_v)) {
			return _v;
		}
		if (!isNaN(_v)) {
			return Number(_v);
		}
		if (!isString(_v)) {
			return _v.toString();
		}
		return _v;
	};
	//复制数组，避免修改原数组
	let _arr = JSON.parse(JSON.stringify(arr));
	return _arr.sort((a: any, b: any) => {
		let _a = format(a, _c.key);
		let _b = format(b, _c.key);
		let desc = _c.mode == "desc"; //是否倒序

		if (isNumber(_a) && !isNumber(_b)) {
			return desc ? 1 : -1;
		}
		if (!isNumber(_a) && isNumber(_b)) {
			return desc ? -1 : 1;
		}
		if (isString(_a) && isString(_b)) {
			return desc ? -_a.localeCompare(_b, "zh") : _a.localeCompare(_b, "zh");
		}
		return _a < _b ? (desc ? 1 : -1) : _a > _b ? (desc ? -1 : 1) : 0;
	});
};
