import { isDeepEqual, isArray } from "../is/index";
/**
 * 判断数组是否存在指定值，存在则返回数组下标，不存在返回-1,不支持函数对比
 * @param arr 传入需要搜索的数组
 * @param  value 传入搜索值
 * @return number 如果搜索到则返回数组的下标，否则返回-1
 */
export const arrayHasValue = (arr: any[], value: any): number => {
	if (!isArray(arr)) {
		return -1;
	}
	for (let i = 0; i < arr.length; i++) {
		if (isDeepEqual(arr[i], value)) {
			return i;
		}
	}
	return -1;
};
