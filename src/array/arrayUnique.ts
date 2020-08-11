import { isArray, isEmpty } from "../is";

/**
 * 数组去重
 * @param arr 传入需要去重的数组
 * @param ownkey 如果数组元素是对象，可以指定判断重复的key
 */

export const arrayUnique = (arr: any[], ownkey?: string) => {
	if (!isArray(arr)) {
		return arr;
	}
	return arr.reduce((prev, cur) => {
		if (!isEmpty(ownkey)) {
			return prev.some((m: any) => m[<string>ownkey] === cur[<string>ownkey]) ? prev : [...prev, cur];
		}
		return prev.includes(cur) ? prev : [...prev, cur];
	}, []);
};
