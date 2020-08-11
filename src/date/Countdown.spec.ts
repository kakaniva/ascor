import { Countdown } from "./Countdown";

describe("Countdown 类测试", () => {
	it("new Countdown(5) 5秒倒计时测试", function (done) {
		this.timeout(100000);
		let c = new Countdown(5);
		c.run((t: number) => {
			console.log(t);
			if (t <= 0) {
				done();
			}
		});
	});
	it("new Countdown(10) 10秒倒计时测试", function (done) {
		this.timeout(110000);
		let c = new Countdown(10);
		c.run((t: number) => {
			console.log(t);
			if (t == 8) {
				c.reset(4, 1);
			}
			if (t <= 0) {
				done();
			}
		});
	});
});
