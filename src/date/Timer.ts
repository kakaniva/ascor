import { getCurrentTime } from "./getCurrentTime";

/**
 * 计时器，例：new Timer()
 */
export const Timer = class {
	public isStart: Boolean = false;
	public begin: any = getCurrentTime(true);

	/**
	 * 开始计时
	 */
	public start(): void {
		if (!this.isStart) {
			this.isStart = true;
		}
		this.begin = getCurrentTime(true);
	}
	/**
	 * 步进，执行一次返回经过的时间毫秒数
	 */
	public step(): number {
		if (!this.isStart) {
			return 0;
		}
		return <number>getCurrentTime(true) - <number>this.begin;
	}
	/**
	 * 停止计时，返回经过的毫秒数
	 */
	public stop(): number {
		let s = this.step();
		this.isStart = false;
		return s;
	}
};
