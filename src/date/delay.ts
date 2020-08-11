/**
 * 延时执行 例： delay(3000).then(()=>{ do something })
 * @param {Number} ms  延时毫秒数
 */
export const delay = (ms: number): Promise<any> => {
	return new Promise((res) => {
		setTimeout(() => {
			res();
		}, ms);
	});
};
