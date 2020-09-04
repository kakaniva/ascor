import { isObject } from "../is/index";

/**
 * 深度合并对象
 * 如果target(也就是FirstOBJ[key])存在，
 * 且是对象的话再去调用deepObjectMerge，
 * 否则就是FirstOBJ[key]里面没这个对象，需要与SecondOBJ[key]合并
 */

export const deepMergeObject = (FirstOBJ: { [x: string]: any }, SecondOBJ: { [x: string]: any }) => {
	if (!isObject(FirstOBJ)) {
		return FirstOBJ;
	}
	if (!isObject(SecondOBJ)) {
		return FirstOBJ;
	}
	let one = { ...FirstOBJ },
		two = { ...SecondOBJ };
	// 深度合并对象
	for (let key in two) {
		one[key] = one[key] && isObject(one[key]) ? deepMergeObject(one[key], two[key]) : (one[key] = two[key]);
	}
	return one;
};
