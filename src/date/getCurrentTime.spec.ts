import { expect } from "chai";
import { getCurrentTime } from "./getCurrentTime";

describe("getCurrentTime 函数测试", () => {
	it("getCurrentTime()", () => {
		expect(getCurrentTime() instanceof Date).to.be.true;
	});
	it("getCurrentTime(true)", () => {
		expect(typeof getCurrentTime(true)).to.be.equal("number");
	});
	it("getCurrentTime('YYYY-mm-dd')", () => {
        
		expect(typeof getCurrentTime('YYYY-mm-dd')).to.be.equal("string");
	});
});
