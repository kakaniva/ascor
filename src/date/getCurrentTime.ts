/**
 * 获取当前时间 例：getCurrentTime(true)
 * @param {Boolean} bool  true返回时间戳，false返回Date实例
 */

export const getCurrentTime = (bool: Boolean): number | Date => {
	return bool ? new Date().getTime() : new Date();
};
