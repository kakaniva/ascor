import { delay } from "./delay";

describe("delay 相关测试", () => {
	it(`delay(3000) 结果为 true`, async function () {
		this.timeout(4000);
		await delay(3000);
		return true;
	});
});
