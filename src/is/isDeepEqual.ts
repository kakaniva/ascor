import { isObject } from "./isObject";
import { isArray } from "./isArray";
import { isNumber } from "./isNumber";
import { isTypeEqual } from "./isTypeEqual";

/**
 * 判断两个值是否相等,如果是嵌套对象则递归检查，暂不支持函数判断，如果对象存在函数方法，则会返回false
 * @param  a
 * @param  b
 * @return Boolean 返回布尔值
 */

export const isDeepEqual = (a: any, b: any) => {
	// 不同类型返回false
	if (!isTypeEqual(a, b)) {
		return false;
	}
	//全等于返回true
	if (a === b) {
		return true;
	}
	//对于NaN===NaN => false ,我们要让他变为true，当他是相等的
	if (isNaN(a) && isNaN(b) && isNumber(a) && isNumber(b)) {
		return true;
	}
	//对象类型判断
	if (isObject(a) && isObject(b)) {
		if (Object.keys(a).length !== Object.keys(b).length) {
			return false;
		}
		for (const key in a) {
			if (a.hasOwnProperty(key)) {
				if (!isDeepEqual(a[key], b[key])) {
					return false;
				}
			}
		}
		return true;
	}
	//数组类型判断，不按顺序，深度递归检测
	if (isArray(a) && isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}
		let tmp: any[] = [];
		for (let i = 0; i < a.length; i++) {
			let f = false;
			for (let j = 0; j < b.length; j++) {
				if (!tmp.includes(j)) {
					if (isDeepEqual(a[i], b[j])) {
						f = true;
						tmp.push(j);
						break;
					}
				}
			}
			if (!f) {
				return false;
			}
		}
		return tmp.length === b.length;
	}
	return false;
};
