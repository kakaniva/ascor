import { isDeepEqual, isArray, isEmpty } from "../is";
/**
 * 判断数组是否有重复数据，针对一维数组,使用全等于判断  例如33和'33' 不相等，如果元素是对象则递归对比，如果对象包含方法函数则不相等
 * @param arr 传入需要搜索的数组
 * @param key 数组元素为对象时，可传入对象的唯一key进行对比，不传则深度对比,只支持一维数组 如 [{a:1},{a:2,c:2},{a:3}]
 * @return Boolean 返回布尔值
 */
export const arrayHasRepeat = (arr: any[], key?: string) => {
	if (!isArray(arr)) {
		return false;
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (isEmpty(key)) {
				if (isDeepEqual(arr[i], arr[j])) {
					return true;
				}
			} else {
				if (arr[i][<string>key] === arr[j][<string>key]) {
					return true;
				}
			}
		}
	}
	return false;
};
