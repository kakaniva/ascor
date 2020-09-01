import { isNumber, isEmpty, isString } from "../is/index";

//随机的字符库，26个字母大小写加0-9
let $char: Array<number | string> = [];

for (let i = 0; i < 26; i++) {
	$char.push(String.fromCodePoint(65 + i)); //大写字母
	$char.push(String.fromCodePoint(97 + i)); //小写字母
	if (i < 9) {
		$char.push(i + 1); //0-9
	}
}

/**
 * 生成随机字符串
 * @param  num 随机数位数，默认36位 例： 12 ，'12'
 * @param  source 字符串资源，可选，如果传入字符串，则以此字符串作为资源，生成随机字符串
 * @return string 返回字符串
 */
export const getRanStr = (num: number | string = 36, source?: string): string => {
	if (!isNaN(<number>num)) {
		num = Number.parseInt(<string>num);
	}
	if (!isNumber(num)) {
		num = 36;
	}
	let str: string = "";
	let strSource = isString(source) && !isEmpty(source) ? source : $char;
	//先随机36位字符串数组
	for (let i = 0; i < num; i++) {
		str += strSource[Math.floor(Math.random() * strSource.length)];
	}
	return str;
};
