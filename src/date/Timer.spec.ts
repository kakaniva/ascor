import { Timer } from "./Timer";
import { delay } from "./delay";


describe("Timer 相关测试", () => {
	it(`new Timer()`, async function () {
		this.timeout(4000);
		let t = new Timer();
		t.start();
		await delay(3000);
		let s = await t.step();
		console.log(`经过${s}毫秒`);
		t.stop();
		return s;
	});
});
