import { isFunction, isNumber } from "../is/index";
import { delay } from "./delay";

/**
 * 倒计时，new Countdown(10,1)  10秒倒计时，以1秒的间隔倒数
 */
export class Countdown {
	private countBak: number;
	private count: number;
	private stepBak: number;
	private step: number;

	/**
	 * 倒计时
	 * @param {Number} s 单位秒，需要计时的总秒数
	 * @param {Number} step 倒计时间隔 （秒）
	 */
	constructor(s: number, step: number = 1) {
		if (!isNumber(s)) {
			throw new Error("倒计时时间必须为数值");
		}
		if (!isNumber(step)) {
			throw new Error("时间间隔必须为数值");
		}
		this.countBak = this.count = s;
		this.stepBak = this.step = step;
	}
	/**
	 * 开始倒计时
	 * @param {Function} fn 回调函数
	 */
	public async run(fn: Function): Promise<void> {
		try {
			if (isFunction(fn)) {
				if ((await fn(this.count)) !== false) {
					await delay(this.step * 1000);
					if (this.count > 0) {
						this.count -= this.step;
						this.run(fn);
					} else {
						this.reset();
					}
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
	/**
	 * 重置秒数
	 * @param {Number} s 秒数，可选 ，不传默认为创建实例时的时间
	 * @param {Number} step 时间间隔（秒），可选 ，不传默认为创建实例时的时间间隔
	 */
	public reset(s: number = this.countBak, step: number = this.stepBak): void {
		if (!isNumber(s)) {
			s = this.countBak;
		}
		if (!isNumber(step)) {
			step = this.stepBak;
		}
		this.countBak = this.count = s;
		this.stepBak = this.step = step;
	}
}
