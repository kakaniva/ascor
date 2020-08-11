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
 * @param {Number} num 随机数位数，默认36位
 * @return string 返回字符串
 */
export const getRanStr = (num: number = 36): string => {
	let str: string = "";
	//先随机36位字符串数组
	for (let i = 0; i < num; i++) {
		str += $char[Math.floor(Math.random() * $char.length)];
	}
	return str;
};
